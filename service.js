

document.addEventListener(
    "DOMContentLoaded",
    function () {

        if (typeof gsap === "undefined") {
            return;
        }


        const hero =
            document.querySelector(
                ".service-page-hero"
            );


        if (!hero) {
            return;
        }


        const breadcrumb =
            hero.querySelector(
                ".service-breadcrumb"
            );


        const title =
            hero.querySelector(
                ".service-hero-title"
            );


        const line =
            hero.querySelector(
                ".service-hero-line"
            );


        const description =
            hero.querySelector(
                ".service-hero-description"
            );


        const button =
            hero.querySelector(
                ".service-hero-btn"
            );


        const image =
            hero.querySelector(
                ".service-hero-image"
            );


        const floatingCard =
            hero.querySelector(
                ".service-floating-card"
            );


        const corner =
            hero.querySelector(
                ".service-corner"
            );


        gsap.set(
            breadcrumb,
            {
                opacity: 0,
                y: 20
            }
        );


        gsap.set(
            title,
            {
                opacity: 0,
                y: 45
            }
        );


        gsap.set(
            line,
            {
                scaleX: 0
            }
        );


        gsap.set(
            description,
            {
                opacity: 0,
                y: 25
            }
        );


        gsap.set(
            button,
            {
                opacity: 0,
                y: 20
            }
        );


        gsap.set(
            image,
            {
                scale: 1.12,
                opacity: 0
            }
        );


        gsap.set(
            floatingCard,
            {
                opacity: 0,
                y: 25
            }
        );


        gsap.set(
            corner,
            {
                opacity: 0,
                scale: 0.7
            }
        );



        const tl =
            gsap.timeline();


        tl

        .to(
            image,
            {
                scale: 1.03,
                opacity: 1,
                duration: 1.3,
                ease: "power3.out"
            }
        )


        .to(
            breadcrumb,
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "power3.out"
            },
            "-=0.8"
        )


        .to(
            title,
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out"
            },
            "-=0.3"
        )


        .to(
            line,
            {
                scaleX: 1,
                duration: 0.5,
                ease: "power3.out"
            },
            "-=0.4"
        )


        .to(
            description,
            {
                opacity: 1,
                y: 0,
                duration: 0.55,
                ease: "power3.out"
            },
            "-=0.2"
        )


        .to(
            button,
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "power3.out"
            },
            "-=0.25"
        )


        .to(
            floatingCard,
            {
                opacity: 1,
                y: 0,
                duration: 0.55,
                ease: "power3.out"
            },
            "-=0.2"
        )


        .to(
            corner,
            {
                opacity: 0.8,
                scale: 1,
                duration: 0.5,
                ease: "power3.out"
            },
            "-=0.3"
        );

        gsap.to(
            image,
            {
                scale: 1.07,

                duration: 8,

                repeat: -1,

                yoyo: true,

                ease: "sine.inOut"
            }
        );


        gsap.to(
            floatingCard,
            {
                y: -7,

                duration: 2.2,

                repeat: -1,

                yoyo: true,

                ease: "sine.inOut"
            }
        );

    }
);



        




        const section =
            document.querySelector(
                ".service-solutions"
            );


       

        const eyebrow =
            section.querySelector(
                ".solutions-eyebrow"
            );


        const title =
            section.querySelector(
                ".solutions-title"
            );


        const line =
            section.querySelector(
                ".solutions-line"
            );


        const intro =
            section.querySelector(
                ".solutions-intro"
            );


        const feature =
            section.querySelector(
                ".solution-feature"
            );


        const featureIcon =
            section.querySelector(
                ".feature-icon"
            );


        const serviceItems =
            section.querySelectorAll(
                ".solution-item"
            );


        const bottom =
            section.querySelector(
                ".solutions-bottom"
            );


        const bgCircleOne =
            section.querySelector(
                ".solutions-bg-circle-one"
            );


        const bgCircleTwo =
            section.querySelector(
                ".solutions-bg-circle-two"
            );


        const ringOne =
            section.querySelector(
                ".feature-ring-one"
            );


        const ringTwo =
            section.querySelector(
                ".feature-ring-two"
            );

        gsap.set(
            eyebrow,
            {
                opacity: 0,
                y: 20
            }
        );


        gsap.set(
            title,
            {
                opacity: 0,
                y: 45
            }
        );


        gsap.set(
            line,
            {
                scaleX: 0
            }
        );


        gsap.set(
            intro,
            {
                opacity: 0,
                y: 25
            }
        );


        gsap.set(
            feature,
            {
                opacity: 0,
                x: -70
            }
        );


        gsap.set(
            serviceItems,
            {
                opacity: 0,
                x: 60
            }
        );


        gsap.set(
            bottom,
            {
                opacity: 0,
                y: 20
            }
        );

        const timeline =
            gsap.timeline({

                scrollTrigger: {

                    trigger: section,

                    start: "top 75%",

                    end: "bottom 25%",

                    toggleActions:
                        "play none none reverse"

                }

            });



        timeline

            .to(
                eyebrow,
                {
                    opacity: 1,

                    y: 0,

                    duration: 0.45,

                    ease: "power3.out"
                }
            )


            .to(
                title,
                {
                    opacity: 1,

                    y: 0,

                    duration: 0.75,

                    ease: "power3.out"
                },
                "-=0.20"
            )



            .to(
                line,
                {
                    scaleX: 1,

                    duration: 0.5,

                    ease: "power3.out"
                },
                "-=0.35"
            )


            .to(
                intro,
                {
                    opacity: 1,

                    y: 0,

                    duration: 0.55,

                    ease: "power3.out"
                },
                "-=0.25"
            )
            .to(
                feature,
                {
                    opacity: 1,

                    x: 0,

                    duration: 0.8,

                    ease: "power3.out"
                },
                "-=0.10"
            )
            .to(
                serviceItems,
                {
                    opacity: 1,

                    x: 0,

                    duration: 0.65,

                    stagger: 0.12,

                    ease: "power3.out"
                },
                "-=0.55"
            )


            .to(
                bottom,
                {
                    opacity: 1,

                    y: 0,

                    duration: 0.5,

                    ease: "power3.out"
                },
                "-=0.25"
            );

        gsap.to(
            featureIcon,
            {

                rotation: 8,

                duration: 2,

                repeat: -1,

                yoyo: true,

                ease: "sine.inOut"

            }
        );


        gsap.to(
            ringOne,
            {

                rotation: 360,

                duration: 20,

                repeat: -1,

                ease: "none"

            }
        );


        gsap.to(
            ringTwo,
            {

                rotation: -360,

                duration: 14,

                repeat: -1,

                ease: "none"

            }
        );

        gsap.to(
            bgCircleOne,
            {

                x: -25,

                y: -20,

                duration: 5,

                repeat: -1,

                yoyo: true,

                ease: "sine.inOut"

            }
        );


        gsap.to(
            bgCircleTwo,
            {

                x: 20,

                y: 15,

                duration: 6,

                repeat: -1,

                yoyo: true,

                ease: "sine.inOut"

            }
        );

        serviceItems.forEach(
            function (item) {


                const icon =
                    item.querySelector(
                        ".solution-icon"
                    );


                const arrow =
                    item.querySelector(
                        ".solution-arrow"
                    );


                const heading =
                    item.querySelector(
                        ".solution-content h3"
                    );



                item.addEventListener(
                    "mouseenter",
                    function () {


                        gsap.to(
                            icon,
                            {

                                scale: 1.1,

                                rotation: -8,

                                duration: 0.3,

                                ease: "power2.out"

                            }
                        );


                        gsap.to(
                            arrow,
                            {

                                scale: 1.08,

                                x: 3,

                                duration: 0.3,

                                ease: "power2.out"

                            }
                        );


                        gsap.to(
                            heading,
                            {

                                x: 4,

                                duration: 0.3,

                                ease: "power2.out"

                            }
                        );


                    }
                );



                item.addEventListener(
                    "mouseleave",
                    function () {


                        gsap.to(
                            icon,
                            {

                                scale: 1,

                                rotation: 0,

                                duration: 0.3,

                                ease: "power2.out"

                            }
                        );


                        gsap.to(
                            arrow,
                            {

                                scale: 1,

                                x: 0,

                                duration: 0.3,

                                ease: "power2.out"

                            }
                        );


                        gsap.to(
                            heading,
                            {

                                x: 0,

                                duration: 0.3,

                                ease: "power2.out"

                            }
                        );


                    }
                );


            }
        );


        feature.addEventListener(
            "mouseenter",
            function () {


                gsap.to(
                    featureIcon,
                    {

                        scale: 1.1,

                        duration: 0.4,

                        ease: "power2.out"

                    }
                );


            }
        );


        feature.addEventListener(
            "mouseleave",
            function () {


                gsap.to(
                    featureIcon,
                    {

                        scale: 1,

                        duration: 0.4,

                        ease: "power2.out"

                    }
                );


            }
        );

        const viewLink =
            section.querySelector(
                ".solutions-view-link"
            );


        if (viewLink) {


            viewLink.addEventListener(
                "mouseenter",
                function () {

                    gsap.to(
                        viewLink.querySelector("i"),
                        {
                            x: 6,

                            duration: 0.3,

                            ease: "power2.out"
                        }
                    );

                }
            );


            viewLink.addEventListener(
                "mouseleave",
                function () {

                    gsap.to(
                        viewLink.querySelector("i"),
                        {
                            x: 0,

                            duration: 0.3,

                            ease: "power2.out"
                        }
                    );

                }
            );

        }



        window.addEventListener(
            "load",
            function () {

                ScrollTrigger.refresh();

            }
        );


document.addEventListener(
    "DOMContentLoaded",
    function () {

        if (
            typeof gsap === "undefined" ||
            typeof ScrollTrigger === "undefined"
        ) {
            console.warn(
                "GSAP / ScrollTrigger not loaded."
            );
            return;
        }


        gsap.registerPlugin(
            ScrollTrigger
        );


        const section =
            document.querySelector(
                ".finance-testimonials"
            );


        if (!section) {
            return;
        }


        const eyebrow =
            section.querySelector(
                ".testimonial-eyebrow"
            );


        const heading =
            section.querySelector(
                ".testimonial-heading h2"
            );


        const line =
            section.querySelector(
                ".testimonial-line"
            );


        const intro =
            section.querySelector(
                ".testimonial-intro"
            );


        const feature =
            section.querySelector(
                ".testimonial-feature"
            );


        const cards =
            section.querySelectorAll(
                ".testimonial-card"
            );


        const bottom =
            section.querySelector(
                ".testimonial-bottom"
            );


        const orbOne =
            section.querySelector(
                ".testimonial-orb-one"
            );


        const orbTwo =
            section.querySelector(
                ".testimonial-orb-two"
            );


      
        gsap.set(
            eyebrow,
            {
                opacity: 0,
                y: 20
            }
        );


        gsap.set(
            heading,
            {
                opacity: 0,
                y: 45
            }
        );


        gsap.set(
            line,
            {
                scaleX: 0
            }
        );


        gsap.set(
            intro,
            {
                opacity: 0,
                y: 25
            }
        );


        gsap.set(
            feature,
            {
                opacity: 0,
                x: -60
            }
        );


        gsap.set(
            cards,
            {
                opacity: 0,
                x: 50
            }
        );


        gsap.set(
            bottom,
            {
                opacity: 0,
                y: 25
            }
        );


       

        const timeline =
            gsap.timeline({

                scrollTrigger: {

                    trigger: section,

                    start: "top 75%",

                    toggleActions:
                        "play none none reverse"

                }

            });


        timeline

            .to(
                eyebrow,
                {
                    opacity: 1,
                    y: 0,

                    duration: 0.45,

                    ease: "power3.out"
                }
            )

            .to(
                heading,
                {
                    opacity: 1,
                    y: 0,

                    duration: 0.7,

                    ease: "power3.out"
                },
                "-=0.2"
            )

            .to(
                line,
                {
                    scaleX: 1,

                    duration: 0.5,

                    ease: "power3.out"
                },
                "-=0.3"
            )

            .to(
                intro,
                {
                    opacity: 1,
                    y: 0,

                    duration: 0.5,

                    ease: "power3.out"
                },
                "-=0.3"
            )

            .to(
                feature,
                {
                    opacity: 1,
                    x: 0,

                    duration: 0.75,

                    ease: "power3.out"
                },
                "-=0.1"
            )

            .to(
                cards,
                {
                    opacity: 1,
                    x: 0,

                    duration: 0.6,

                    stagger: 0.15,

                    ease: "power3.out"
                },
                "-=0.5"
            )

            .to(
                bottom,
                {
                    opacity: 1,
                    y: 0,

                    duration: 0.5,

                    ease: "power3.out"
                },
                "-=0.2"
            );



        gsap.to(
            orbOne,
            {
                x: -25,
                y: 25,

                duration: 6,

                repeat: -1,

                yoyo: true,

                ease: "sine.inOut"
            }
        );


        gsap.to(
            orbTwo,
            {
                x: 20,
                y: -20,

                duration: 5,

                repeat: -1,

                yoyo: true,

                ease: "sine.inOut"
            }
        );


        
        feature.addEventListener(
            "mouseenter",
            function () {

                gsap.to(
                    ".testimonial-quote-icon",
                    {
                        rotation: 10,
                        scale: 1.08,

                        duration: 0.35,

                        ease: "power2.out"
                    }
                );

            }
        );


        feature.addEventListener(
            "mouseleave",
            function () {

                gsap.to(
                    ".testimonial-quote-icon",
                    {
                        rotation: 0,
                        scale: 1,

                        duration: 0.35,

                        ease: "power2.out"
                    }
                );

            }
        );



        cards.forEach(
            function (card) {

                const avatar =
                    card.querySelector(
                        ".small-avatar"
                    );


                card.addEventListener(
                    "mouseenter",
                    function () {

                        gsap.to(
                            avatar,
                            {
                                scale: 1.12,

                                duration: 0.3,

                                ease: "power2.out"
                            }
                        );

                    }
                );


                card.addEventListener(
                    "mouseleave",
                    function () {

                        gsap.to(
                            avatar,
                            {
                                scale: 1,

                                duration: 0.3,

                                ease: "power2.out"
                            }
                        );

                    }
                );

            }
        );


    

        window.addEventListener(
            "load",
            function () {

                ScrollTrigger.refresh();

            }
        );

    }
);


document.addEventListener("DOMContentLoaded", function () {

    const faqSection =
        document.querySelector(".finance-faq");

    if (!faqSection) {
        return;
    }


    const faqItems =
        faqSection.querySelectorAll(".faq-box");


    faqItems.forEach(function (item) {

        const question =
            item.querySelector(".faq-question");

        const icon =
            item.querySelector(".faq-icon i");


        if (!question) {
            return;
        }


        question.addEventListener("click", function () {

            const isOpen =
                item.classList.contains("active");



            faqItems.forEach(function (otherItem) {

                otherItem.classList.remove("active");


                const otherButton =
                    otherItem.querySelector(
                        ".faq-question"
                    );


                const otherIcon =
                    otherItem.querySelector(
                        ".faq-icon i"
                    );


                if (otherButton) {

                    otherButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }


                if (otherIcon) {

                    otherIcon.classList.remove(
                        "fa-minus"
                    );

                    otherIcon.classList.add(
                        "fa-plus"
                    );

                }

            });

            if (!isOpen) {

                item.classList.add("active");


                question.setAttribute(
                    "aria-expanded",
                    "true"
                );


                if (icon) {

                    icon.classList.remove(
                        "fa-plus"
                    );

                    icon.classList.add(
                        "fa-minus"
                    );

                }

            }

        });

    });



    if (typeof gsap !== "undefined") {



        gsap.set(
            faqSection.querySelectorAll(
                ".faq-eyebrow"
            ),
            {
                opacity: 0,
                y: 25
            }
        );


        gsap.set(
            faqSection.querySelectorAll(
                ".faq-title"
            ),
            {
                opacity: 0,
                y: 40
            }
        );


        gsap.set(
            faqSection.querySelectorAll(
                ".faq-title-line"
            ),
            {
                scaleX: 0
            }
        );


        gsap.set(
            faqSection.querySelectorAll(
                ".faq-introduction"
            ),
            {
                opacity: 0,
                y: 25
            }
        );


        gsap.set(
            faqSection.querySelectorAll(
                ".faq-advisor-card"
            ),
            {
                opacity: 0,
                x: -45
            }
        );


        gsap.set(
            faqSection.querySelectorAll(
                ".faq-box"
            ),
            {
                opacity: 0,
                x: 40
            }
        );


        gsap.set(
            faqSection.querySelectorAll(
                ".faq-bottom"
            ),
            {
                opacity: 0,
                y: 25
            }
        );


        const faqTimeline =
            gsap.timeline({
                paused: true
            });


        faqTimeline
            .to(
                faqSection.querySelector(
                    ".faq-eyebrow"
                ),
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    ease: "power3.out"
                }
            )


            .to(
                faqSection.querySelector(
                    ".faq-title"
                ),
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    ease: "power3.out"
                },
                "-=0.25"
            )


            .to(
                faqSection.querySelector(
                    ".faq-title-line"
                ),
                {
                    scaleX: 1,
                    duration: 0.45,
                    ease: "power3.out"
                },
                "-=0.3"
            )


            .to(
                faqSection.querySelector(
                    ".faq-introduction"
                ),
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    ease: "power3.out"
                },
                "-=0.2"
            )


            .to(
                faqSection.querySelector(
                    ".faq-advisor-card"
                ),
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.7,
                    ease: "power3.out"
                },
                "-=0.15"
            )


            .to(
                faqSection.querySelectorAll(
                    ".faq-box"
                ),
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: "power3.out"
                },
                "-=0.4"
            )


            .to(
                faqSection.querySelector(
                    ".faq-bottom"
                ),
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    ease: "power3.out"
                },
                "-=0.2"
            );


        if (
            "IntersectionObserver" in window
        ) {

            const observer =
                new IntersectionObserver(
                    function (entries) {

                        entries.forEach(
                            function (entry) {

                                if (
                                    entry.isIntersecting
                                ) {

                                    faqTimeline.play();

                                    observer.unobserve(
                                        entry.target
                                    );

                                }

                            }
                        );

                    },
                    {
                        threshold: 0.15
                    }
                );


            observer.observe(faqSection);

        } else {

            faqTimeline.play();

        }


        const circleOne =
            faqSection.querySelector(
                ".faq-decoration-1"
            );


        const circleTwo =
            faqSection.querySelector(
                ".faq-decoration-2"
            );


        if (circleOne) {

            gsap.to(circleOne, {

                x: -20,
                y: 20,

                duration: 6,

                repeat: -1,

                yoyo: true,

                ease: "sine.inOut"

            });

        }


        if (circleTwo) {

            gsap.to(circleTwo, {

                x: 20,
                y: -15,

                duration: 5,

                repeat: -1,

                yoyo: true,

                ease: "sine.inOut"

            });

        }

    }

});


document.addEventListener(
    "DOMContentLoaded",
    function () {

        if (typeof gsap === "undefined") {

            console.warn(
                "GSAP is not loaded."
            );

            return;
        }


        const section =
            document.querySelector(
                ".finance-pricing"
            );


        if (!section) {
            return;
        }



        const eyebrow =
            section.querySelector(
                ".pricing-eyebrow"
            );


        const title =
            section.querySelector(
                ".pricing-title"
            );


        const line =
            section.querySelector(
                ".pricing-title-line"
            );


        const description =
            section.querySelector(
                ".pricing-description"
            );


        const cards =
            section.querySelectorAll(
                ".pricing-card"
            );


        const bottom =
            section.querySelector(
                ".pricing-bottom"
            );


        const icons =
            section.querySelectorAll(
                ".pricing-icon"
            );


        const decorationOne =
            section.querySelector(
                ".pricing-decoration-one"
            );


        const decorationTwo =
            section.querySelector(
                ".pricing-decoration-two"
            );



        gsap.set(
            eyebrow,
            {
                opacity: 0,
                y: 20
            }
        );


        gsap.set(
            title,
            {
                opacity: 0,
                y: 45
            }
        );


        gsap.set(
            line,
            {
                scaleX: 0
            }
        );


        gsap.set(
            description,
            {
                opacity: 0,
                y: 25
            }
        );


        gsap.set(
            cards,
            {
                opacity: 0,
                y: 60
            }
        );


        gsap.set(
            bottom,
            {
                opacity: 0,
                y: 25
            }
        );



        if (
            typeof ScrollTrigger !== "undefined"
        ) {

            gsap.registerPlugin(
                ScrollTrigger
            );


            const timeline =
                gsap.timeline({

                    scrollTrigger: {

                        trigger: section,

                        start: "top 75%",

                        toggleActions:
                            "play none none reverse"

                    }

                });


            timeline

                .to(
                    eyebrow,
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        ease: "power3.out"
                    }
                )


                .to(
                    title,
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.75,
                        ease: "power3.out"
                    },
                    "-=0.25"
                )


                .to(
                    line,
                    {
                        scaleX: 1,
                        duration: 0.5,
                        ease: "power3.out"
                    },
                    "-=0.35"
                )


                .to(
                    description,
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        ease: "power3.out"
                    },
                    "-=0.2"
                )


                .to(
                    cards,
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.7,
                        stagger: 0.14,
                        ease: "power3.out"
                    },
                    "-=0.1"
                )


                .to(
                    bottom,
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        ease: "power3.out"
                    },
                    "-=0.2"
                );

        } else {

          

            gsap.to(
                eyebrow,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.4
                }
            );


            gsap.to(
                title,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5
                }
            );


            gsap.to(
                line,
                {
                    scaleX: 1,
                    duration: 0.4
                }
            );


            gsap.to(
                description,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.4
                }
            );


            gsap.to(
                cards,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.1
                }
            );


            gsap.to(
                bottom,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.4
                }
            );

        }



        icons.forEach(
            function (icon, index) {

                gsap.to(
                    icon,
                    {

                        y: -5,

                        duration:
                            2 + (index * 0.15),

                        repeat: -1,

                        yoyo: true,

                        ease: "sine.inOut"

                    }
                );

            }
        );


        if (decorationOne) {

            gsap.to(
                decorationOne,
                {

                    x: -20,
                    y: 20,

                    duration: 6,

                    repeat: -1,

                    yoyo: true,

                    ease: "sine.inOut"

                }
            );

        }


        if (decorationTwo) {

            gsap.to(
                decorationTwo,
                {

                    x: 20,
                    y: -15,

                    duration: 5,

                    repeat: -1,

                    yoyo: true,

                    ease: "sine.inOut"

                }
            );

        }



        cards.forEach(
            function (card) {

                const icon =
                    card.querySelector(
                        ".pricing-icon"
                    );


                const button =
                    card.querySelector(
                        ".pricing-button"
                    );


                card.addEventListener(
                    "mouseenter",
                    function () {

                        gsap.to(
                            icon,
                            {
                                scale: 1.1,

                                rotation: -8,

                                duration: 0.35,

                                ease: "power2.out"
                            }
                        );


                        gsap.to(
                            button,
                            {
                                x: 3,

                                duration: 0.3,

                                ease: "power2.out"
                            }
                        );

                    }
                );


                card.addEventListener(
                    "mouseleave",
                    function () {

                        gsap.to(
                            icon,
                            {
                                scale: 1,

                                rotation: 0,

                                duration: 0.35,

                                ease: "power2.out"
                            }
                        );


                        gsap.to(
                            button,
                            {
                                x: 0,

                                duration: 0.3,

                                ease: "power2.out"
                            }
                        );

                    }
                );

            }
        );


    }
);


document.addEventListener(
    "DOMContentLoaded",
    function () {

        if (typeof gsap === "undefined") {
            return;
        }


        const section =
            document.querySelector(
                ".advisory-process"
            );


        if (!section) {
            return;
        }


        const eyebrow =
            section.querySelector(
                ".process-eyebrow"
            );


        const title =
            section.querySelector(
                ".process-title"
            );


        const line =
            section.querySelector(
                ".process-line"
            );


        const description =
            section.querySelector(
                ".process-description"
            );


        const steps =
            section.querySelectorAll(
                ".process-step"
            );


        const bottom =
            section.querySelector(
                ".process-bottom"
            );


        const icons =
            section.querySelectorAll(
                ".process-icon"
            );



        gsap.set(
            eyebrow,
            {
                opacity: 0,
                y: 20
            }
        );


        gsap.set(
            title,
            {
                opacity: 0,
                y: 45
            }
        );


        gsap.set(
            line,
            {
                scaleX: 0
            }
        );


        gsap.set(
            description,
            {
                opacity: 0,
                y: 25
            }
        );


        gsap.set(
            steps,
            {
                opacity: 0,
                y: 55
            }
        );


        gsap.set(
            bottom,
            {
                opacity: 0,
                y: 25
            }
        );



        if (
            typeof ScrollTrigger !==
            "undefined"
        ) {

            gsap.registerPlugin(
                ScrollTrigger
            );


            const timeline =
                gsap.timeline({

                    scrollTrigger: {

                        trigger: section,

                        start: "top 75%",

                        toggleActions:
                            "play none none reverse"

                    }

                });


            timeline

                .to(
                    eyebrow,
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        ease: "power3.out"
                    }
                )

                .to(
                    title,
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.75,
                        ease: "power3.out"
                    },
                    "-=0.2"
                )

                .to(
                    line,
                    {
                        scaleX: 1,
                        duration: 0.5,
                        ease: "power3.out"
                    },
                    "-=0.3"
                )

                .to(
                    description,
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        ease: "power3.out"
                    },
                    "-=0.2"
                )

                .to(
                    steps,
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.65,
                        stagger: 0.14,
                        ease: "power3.out"
                    },
                    "-=0.1"
                )

                .to(
                    bottom,
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        ease: "power3.out"
                    },
                    "-=0.2"
                );

        } else {

          

            gsap.to(
                eyebrow,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.4
                }
            );


            gsap.to(
                title,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5
                }
            );


            gsap.to(
                line,
                {
                    scaleX: 1,
                    duration: 0.4
                }
            );


            gsap.to(
                description,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.4
                }
            );


            gsap.to(
                steps,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.1
                }
            );


            gsap.to(
                bottom,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.4
                }
            );

        }


        
        icons.forEach(
            function (icon, index) {

                gsap.to(
                    icon,
                    {

                        y: -5,

                        duration:
                            2 + index * 0.15,

                        repeat: -1,

                        yoyo: true,

                        ease: "sine.inOut"

                    }
                );

            }
        );


        steps.forEach(
            function (step) {

                const icon =
                    step.querySelector(
                        ".process-icon"
                    );


                step.addEventListener(
                    "mouseenter",
                    function () {

                        gsap.to(
                            icon,
                            {
                                scale: 1.1,

                                rotation: -8,

                                duration: 0.3,

                                ease: "power2.out"
                            }
                        );

                    }
                );


                step.addEventListener(
                    "mouseleave",
                    function () {

                        gsap.to(
                            icon,
                            {
                                scale: 1,

                                rotation: 0,

                                duration: 0.3,

                                ease: "power2.out"
                            }
                        );

                    }
                );

            }
        );

    }
);


document.addEventListener(
    "DOMContentLoaded",
    function () {

        if (typeof gsap === "undefined") {
            return;
        }


        const section =
            document.querySelector(
                ".finance-final-cta"
            );


        if (!section) {
            return;
        }


        const label =
            section.querySelector(
                ".final-cta-label"
            );


        const title =
            section.querySelector(
                ".final-cta-title"
            );


        const description =
            section.querySelector(
                ".final-cta-description"
            );


        const actions =
            section.querySelector(
                ".final-cta-actions"
            );


        const details =
            section.querySelector(
                ".final-cta-details"
            );


        const detailsItems =
            section.querySelectorAll(
                ".final-cta-details > div"
            );


        const decorationOne =
            section.querySelector(
                ".cta-decoration-one"
            );


        const decorationTwo =
            section.querySelector(
                ".cta-decoration-two"
            );



        gsap.set(label, {
            opacity: 0,
            y: 20
        });


        gsap.set(title, {
            opacity: 0,
            y: 45
        });


        gsap.set(description, {
            opacity: 0,
            y: 25
        });


        gsap.set(actions, {
            opacity: 0,
            y: 25
        });


        gsap.set(details, {
            opacity: 0,
            y: 20
        });


        gsap.set(detailsItems, {
            opacity: 0,
            y: 15
        });


    

        if (
            typeof ScrollTrigger !== "undefined"
        ) {

            gsap.registerPlugin(
                ScrollTrigger
            );


            const timeline =
                gsap.timeline({

                    scrollTrigger: {

                        trigger: section,

                        start: "top 78%",

                        toggleActions:
                            "play none none reverse"

                    }

                });


            timeline

                .to(
                    label,
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        ease: "power3.out"
                    }
                )

                .to(
                    title,
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: "power3.out"
                    },
                    "-=0.2"
                )

                .to(
                    description,
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.55,
                        ease: "power3.out"
                    },
                    "-=0.3"
                )

                .to(
                    actions,
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        ease: "power3.out"
                    },
                    "-=0.2"
                )

                .to(
                    details,
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        ease: "power3.out"
                    },
                    "-=0.15"
                )

                .to(
                    detailsItems,
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.4,
                        stagger: 0.1,
                        ease: "power3.out"
                    },
                    "-=0.25"
                );

        } else {


            gsap.to(label, {
                opacity: 1,
                y: 0,
                duration: 0.4
            });

            gsap.to(title, {
                opacity: 1,
                y: 0,
                duration: 0.5
            });

            gsap.to(description, {
                opacity: 1,
                y: 0,
                duration: 0.4
            });

            gsap.to(actions, {
                opacity: 1,
                y: 0,
                duration: 0.4
            });

            gsap.to(details, {
                opacity: 1,
                y: 0,
                duration: 0.4
            });

            gsap.to(detailsItems, {
                opacity: 1,
                y: 0,
                duration: 0.4,
                stagger: 0.08
            });

        }



        gsap.to(
            decorationOne,
            {
                x: 25,
                y: 20,

                duration: 6,

                repeat: -1,

                yoyo: true,

                ease: "sine.inOut"
            }
        );


        gsap.to(
            decorationTwo,
            {
                x: -20,
                y: -20,

                duration: 5,

                repeat: -1,

                yoyo: true,

                ease: "sine.inOut"
            }
        );



        const primaryButton =
            section.querySelector(
                ".final-cta-primary"
            );


        if (primaryButton) {

            primaryButton.addEventListener(
                "mouseenter",
                function () {

                    gsap.to(
                        primaryButton,
                        {
                            scale: 1.03,

                            duration: 0.25,

                            ease: "power2.out"
                        }
                    );

                }
            );


            primaryButton.addEventListener(
                "mouseleave",
                function () {

                    gsap.to(
                        primaryButton,
                        {
                            scale: 1,

                            duration: 0.25,

                            ease: "power2.out"
                        }
                    );

                }
            );

        }

    }
);
const financeFooter =
    document.querySelector(".finance-footer");


if (financeFooter) {

    const footerMain =
        financeFooter.querySelectorAll(
            ".footer-brand, .footer-column, .footer-contact"
        );

    const footerInfo =
        financeFooter.querySelectorAll(
            ".footer-info-item"
        );

    const footerSocial =
        financeFooter.querySelectorAll(
            ".footer-social a"
        );

    const footerBottom =
        financeFooter.querySelector(
            ".footer-bottom"
        );



    gsap.set(
        footerMain,
        {
            opacity: 0,
            y: 40
        }
    );


    gsap.set(
        footerInfo,
        {
            opacity: 0,
            y: 25
        }
    );


    gsap.set(
        footerSocial,
        {
            opacity: 0,
            scale: 0.7
        }
    );


    gsap.set(
        footerBottom,
        {
            opacity: 0
        }
    );



    const footerTimeline =
        gsap.timeline({

            scrollTrigger: {

                trigger: financeFooter,

                start: "top 85%",

                toggleActions:
                    "play none none reverse"

            }

        });


    footerTimeline

        .to(
            footerMain,
            {
                opacity: 1,
                y: 0,

                duration: 0.7,

                stagger: 0.12,

                ease: "power3.out"
            }
        )

        .to(
            footerSocial,
            {
                opacity: 1,
                scale: 1,

                duration: 0.45,

                stagger: 0.08,

                ease: "back.out(1.7)"
            },
            "-=0.3"
        )

        .to(
            footerInfo,
            {
                opacity: 1,
                y: 0,

                duration: 0.55,

                stagger: 0.1,

                ease: "power3.out"
            },
            "-=0.25"
        )

        .to(
            footerBottom,
            {
                opacity: 1,

                duration: 0.5,

                ease: "power2.out"
            },
            "-=0.2"
        );

}