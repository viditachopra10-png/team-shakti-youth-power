document.addEventListener("DOMContentLoaded", () => {

    const earth = document.querySelector(".earth-area");

    if (earth) {

        earth.addEventListener("mouseenter", () => {
            earth.style.animationPlayState = "paused";
        });

        earth.addEventListener("mouseleave", () => {
            earth.style.animationPlayState = "running";
        });

    }

});
