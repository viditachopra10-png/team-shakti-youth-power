document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       MOBILE MENU
    ========================= */

    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.getElementById("navMenu");

    if (menuBtn && navMenu) {

        menuBtn.addEventListener("click", function () {
            navMenu.classList.toggle("show");
        });


        const navLinks = navMenu.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {
                navMenu.classList.remove("show");
            });

        });
    }


    /* =========================
       ACTIVE PAGE
    ========================= */

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    const links = document.querySelectorAll("nav a");

    links.forEach(function (link) {

        const linkPage =
            link.getAttribute("href").split("/").pop();

        if (linkPage === currentPage) {
            link.classList.add("active");
        }

    });


    /* =========================
       SCROLL REVEAL
    ========================= */

    const revealElements = document.querySelectorAll(
        ".info-card, .content-box, .mini-card, .process-step, .impact-card, .initiative-card, .solution-feature"
    );

    revealElements.forEach(function (element) {
        element.classList.add("reveal");
    });


    const observer = new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(function (element) {
        observer.observe(element);
    });


    /* =========================
       CLOSE MOBILE MENU
       WHEN CLICKING OUTSIDE
    ========================= */

    document.addEventListener("click", function (event) {

        if (
            navMenu &&
            menuBtn &&
            !navMenu.contains(event.target) &&
            !menuBtn.contains(event.target)
        ) {
            navMenu.classList.remove("show");
        }

    });

});
