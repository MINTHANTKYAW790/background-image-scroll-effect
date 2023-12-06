const imageEl = document.getElementById("bg-image");

window.addEventListener("scroll", () => {
    updateImage();
});
function updateImage() {
    imageEl.style.opacity = 1 - window.pageYOffset / 1800;
    imageEl.style.backgroundSize = 125 - window.pageYOffset / 20 + "%";
    console.log(window.pageYOffset);
}
updateImage();
