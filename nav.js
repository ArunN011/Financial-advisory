document.addEventListener("DOMContentLoaded", function () {



    if (typeof gsap === "undefined") {
        console.error("GSAP is not loaded.");
        return;
    }



    if (typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
    }


    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobileMenu");

    const mobileLinks =
        document.querySelectorAll(".mobile-nav-link");

    const mobileAuthLinks =
        document.querySelectorAll(
            ".mobile-login, .mobile-register"
        );


    let menuOpen = false;
    let menuTimeline = null;



    const desktopNavigation =
        document.querySelector(".desktop-navigation");


    if (desktopNavigation) {

        const navbarTimeline = gsap.timeline();

        navbarTimeline


            .from(".brand-logo", {
                x: -40,
                opacity: 0,
                duration: 0.7,
                ease: "power3.out"
            })

          

            .from(
                ".desktop-navigation .nav-link",
                {
                    x: 30,
                    opacity: 0,
                    duration: 0.45,
                    stagger: 0.08,
                    ease: "power3.out"
                },
                "-=0.35"
            )

            .from(
                ".desktop-navigation .login-btn",
                {
                    y: 20,
                    opacity: 0,
                    duration: 0.45,
                    ease: "power3.out"
                },
                "-=0.25"
            )


            .from(
                ".desktop-navigation .register-btn",
                {
                    y: 20,
                    opacity: 0,
                    duration: 0.45,
                    ease: "power3.out"
                },
                "-=0.30"
            );

    }


    const heroImage =
        document.querySelector(".hero-image");

    const heroEyebrow =
        document.querySelector(".hero-eyebrow");

    const heroTitle =
        document.querySelector(".hero-title");

    const heroDescription =
        document.querySelector(".hero-description");

    const heroButton =
        document.querySelector(".hero-start-btn");


    if (heroImage) {

        gsap.fromTo(
            heroImage,
            {
                scale: 1.15,
                opacity: 1
            },
            {
                scale: 1.05,
                opacity: 1,
                duration: 1.4,
                ease: "power3.out"
            }
        );

    }


    if (heroEyebrow) {

        gsap.fromTo(
            heroEyebrow,
            {
                y: 25,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.7,
                delay: 0.3,
                ease: "power3.out"
            }
        );

    }


    if (heroTitle) {

        gsap.fromTo(
            heroTitle,
            {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.9,
                delay: 0.45,
                ease: "power3.out"
            }
        );

    }


    if (heroDescription) {

        gsap.fromTo(
            heroDescription,
            {
                y: 30,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.7,
                delay: 0.65,
                ease: "power3.out"
            }
        );

    }


    if (heroButton) {

        gsap.fromTo(
            heroButton,
            {
                y: 25,
                opacity: 1
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                delay: 0.8,
                ease: "power3.out"
            }
        );

    }


  

    function openMenu() {

        if (!hamburger || !mobileMenu) {
            return;
        }


        menuOpen = true;



        hamburger.classList.add("active");

        hamburger.setAttribute(
            "aria-expanded",
            "true"
        );

        hamburger.setAttribute(
            "aria-label",
            "Close navigation menu"
        );



        document.body.classList.add("menu-open");



        if (menuTimeline) {
            menuTimeline.kill();
        }



        gsap.set(mobileMenu, {
            visibility: "visible",
            pointerEvents: "auto",
            opacity: 0,
            yPercent: -5
        });


        gsap.set(mobileLinks, {
            opacity: 0,
            y: 30
        });


        gsap.set(mobileAuthLinks, {
            opacity: 0,
            y: 20
        });


        menuTimeline = gsap.timeline();


        menuTimeline

            .to(mobileMenu, {
                opacity: 1,
                yPercent: 0,
                duration: 0.45,
                ease: "power3.out"
            })

            .to(
                mobileLinks,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.08,
                    ease: "power3.out"
                },
                "-=0.20"
            )

            .to(
                mobileAuthLinks,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.4,
                    stagger: 0.08,
                    ease: "power3.out"
                },
                "-=0.20"
            );

    }




    function closeMenu() {

        if (!hamburger || !mobileMenu) {
            return;
        }


        menuOpen = false;



        hamburger.classList.remove("active");

        hamburger.setAttribute(
            "aria-expanded",
            "false"
        );

        hamburger.setAttribute(
            "aria-label",
            "Open navigation menu"
        );


     

        if (menuTimeline) {
            menuTimeline.kill();
        }


        menuTimeline = gsap.timeline({

            onComplete: function () {

                gsap.set(mobileMenu, {
                    visibility: "hidden",
                    pointerEvents: "none",
                    opacity: 0,
                    yPercent: -5
                });


                gsap.set(mobileLinks, {
                    opacity: 0,
                    y: 30
                });


                gsap.set(mobileAuthLinks, {
                    opacity: 0,
                    y: 20
                });


         
                document.body.classList.remove(
                    "menu-open"
                );

            }

        });


        menuTimeline

            .to(
                mobileAuthLinks,
                {
                    opacity: 0,
                    y: 15,
                    duration: 0.2,
                    stagger: 0.04,
                    ease: "power2.in"
                }
            )

            .to(
                mobileLinks,
                {
                    opacity: 0,
                    y: -20,
                    duration: 0.25,
                    stagger: 0.04,
                    ease: "power2.in"
                },
                "-=0.08"
            )

            .to(
                mobileMenu,
                {
                    opacity: 0,
                    yPercent: -5,
                    duration: 0.35,
                    ease: "power3.in"
                },
                "-=0.10"
            );

    }



    if (hamburger) {

        hamburger.addEventListener(
            "click",
            function () {

                if (menuOpen) {

                    closeMenu();

                } else {

                    openMenu();

                }

            }
        );

    }




    mobileLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                closeMenu();

            }
        );

    });


    mobileAuthLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                closeMenu();

            }
        );

    });




    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                menuOpen
            ) {

                closeMenu();

            }

        }
    );



    window.addEventListener(
        "resize",
        function () {

            if (
                window.innerWidth >= 992 &&
                menuOpen
            ) {

                closeMenu();

            }

        }
    );
});