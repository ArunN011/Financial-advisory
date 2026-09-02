document.addEventListener("DOMContentLoaded", function () {

    const backButton =
        document.getElementById("errorBackButton");


    if (backButton) {

        backButton.addEventListener(
            "click",
            function () {

                const referrer =
                    document.referrer;


                const currentOrigin =
                    window.location.origin;


                const canGoBack =
                    window.history.length > 1 &&
                    referrer &&
                    referrer.startsWith(currentOrigin);


                if (canGoBack) {

                    window.history.back();

                } else {

                    window.location.href =
                        "index.html";

                }

            }
        );

    }


    if (
        typeof gsap ===
        "undefined"
    ) {
        return;
    }


    const logo =
        document.querySelector(
            ".error-logo"
        );

    const eyebrow =
        document.querySelector(
            ".error-eyebrow"
        );

    const number =
        document.querySelector(
            ".error-number"
        );

    const icon =
        document.querySelector(
            ".error-icon"
        );

    const heading =
        document.querySelector(
            ".error-content h1"
        );

    const description =
        document.querySelector(
            ".error-content > p"
        );

    const actions =
        document.querySelector(
            ".error-actions"
        );

    const help =
        document.querySelector(
            ".error-help"
        );

    const footer =
        document.querySelector(
            ".error-footer"
        );

    const shapes =
        document.querySelectorAll(
            ".error-shape"
        );


    gsap.set(
        [
            logo,
            eyebrow,
            number,
            icon,
            heading,
            description,
            actions,
            help,
            footer
        ],
        {
            opacity: 0,
            y: 20
        }
    );


    const timeline =
        gsap.timeline();


    timeline
        .to(
            logo,
            {
                opacity: 1,
                y: 0,
                duration: 0.45,
                ease: "power3.out"
            }
        )
        .to(
            eyebrow,
            {
                opacity: 1,
                y: 0,
                duration: 0.4,
                ease: "power3.out"
            },
            "-=0.18"
        )
        .to(
            number,
            {
                opacity: 1,
                y: 0,
                duration: 0.7,
                ease: "power3.out"
            },
            "-=0.15"
        )
        .to(
            icon,
            {
                opacity: 1,
                y: 0,
                duration: 0.45,
                ease: "back.out(1.7)"
            },
            "-=0.28"
        )
        .to(
            heading,
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "power3.out"
            },
            "-=0.2"
        )
        .to(
            description,
            {
                opacity: 1,
                y: 0,
                duration: 0.45,
                ease: "power3.out"
            },
            "-=0.25"
        )
        .to(
            actions,
            {
                opacity: 1,
                y: 0,
                duration: 0.45,
                ease: "power3.out"
            },
            "-=0.18"
        )
        .to(
            help,
            {
                opacity: 1,
                y: 0,
                duration: 0.4,
                ease: "power3.out"
            },
            "-=0.18"
        )
        .to(
            footer,
            {
                opacity: 1,
                y: 0,
                duration: 0.4,
                ease: "power3.out"
            },
            "-=0.15"
        );


    if (icon) {

        gsap.to(
            icon,
            {
                y: -6,
                duration: 2.2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            }
        );

    }


    if (number) {

        gsap.to(
            number,
            {
                scale: 1.02,
                duration: 2.8,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            }
        );

    }


    shapes.forEach(
        function (shape, index) {

            gsap.to(
                shape,
                {
                    rotation: index % 2 === 0
                        ? 180
                        : -180,
                    duration:
                        25 +
                        index * 6,
                    repeat: -1,
                    ease: "none"
                }
            );

        }
    );


    const buttons =
        document.querySelectorAll(
            ".error-back-btn, .error-home-btn"
        );


    buttons.forEach(
        function (button) {

            button.addEventListener(
                "mouseenter",
                function () {

                    gsap.to(
                        button,
                        {
                            scale: 1.025,
                            duration: 0.2,
                            ease: "power2.out"
                        }
                    );

                }
            );


            button.addEventListener(
                "mouseleave",
                function () {

                    gsap.to(
                        button,
                        {
                            scale: 1,
                            duration: 0.2,
                            ease: "power2.out"
                        }
                    );

                }
            );

        }
    );

});