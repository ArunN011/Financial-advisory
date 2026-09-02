

document.addEventListener(
    "DOMContentLoaded",
    function () {

        if (typeof gsap === "undefined") {
            return;
        }


        const hero =
            document.querySelector(
                ".blog-page-hero"
            );


        if (!hero) {
            return;
        }


        const breadcrumb =
            hero.querySelector(
                ".blog-breadcrumb"
            );


        const title =
            hero.querySelector(
                ".blog-hero-title"
            );


        const line =
            hero.querySelector(
                ".blog-hero-line"
            );


        const description =
            hero.querySelector(
                ".blog-hero-description"
            );


        const button =
            hero.querySelector(
                ".blog-hero-btn"
            );


        const image =
            hero.querySelector(
                ".blog-hero-image"
            );


        const floatingCard =
            hero.querySelector(
                ".blog-floating-card"
            );


        const corner =
            hero.querySelector(
                ".blog-hero-corner"
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
                opacity: 0,
                scale: 1.12
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


     
        const timeline =
            gsap.timeline();


        timeline

            .to(
                image,
                {
                    opacity: 1,

                    scale: 1.04,

                    duration: 1.3,

                    ease: "power3.out"
                }
            )


            .to(
                breadcrumb,
                {
                    opacity: 1,

                    y: 0,

                    duration: 0.45,

                    ease: "power3.out"
                },
                "-=0.85"
            )


            .to(
                title,
                {
                    opacity: 1,

                    y: 0,

                    duration: 0.8,

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
                "-=0.2"
            )


            .to(
                floatingCard,
                {
                    opacity: 1,

                    y: 0,

                    duration: 0.55,

                    ease: "power3.out"
                },
                "-=0.15"
            )


            .to(
                corner,
                {
                    opacity: 1,

                    scale: 1,

                    duration: 0.45,

                    ease: "power3.out"
                },
                "-=0.25"
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
                y: -6,

                duration: 2.3,

                repeat: -1,

                yoyo: true,

                ease: "sine.inOut"
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
                ".blog-featured"
            );


        if (!section) {
            return;
        }


        const eyebrow =
            section.querySelector(
                ".blog-section-eyebrow"
            );


        const title =
            section.querySelector(
                ".blog-section-heading h2"
            );


        const line =
            section.querySelector(
                ".blog-heading-line"
            );


        const intro =
            section.querySelector(
                ".blog-section-intro"
            );


        const featured =
            section.querySelector(
                ".featured-blog-card"
            );


        const sideCards =
            section.querySelectorAll(
                ".blog-horizontal-card"
            );


        const bottom =
            section.querySelector(
                ".blog-featured-bottom"
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
                y: 40
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
            featured,
            {
                opacity: 0,
                x: -55
            }
        );


        gsap.set(
            sideCards,
            {
                opacity: 0,
                x: 50
            }
        );


        gsap.set(
            bottom,
            {
                opacity: 0,
                y: 20
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
                        duration: 0.45,
                        ease: "power3.out"
                    }
                )


                .to(
                    title,
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
                        duration: 0.45,
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
                    "-=0.2"
                )


                .to(
                    featured,
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.75,
                        ease: "power3.out"
                    },
                    "-=0.1"
                )


                .to(
                    sideCards,
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.55,
                        stagger: 0.12,
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

        } else {

        

            gsap.to(
                [
                    eyebrow,
                    title,
                    intro,
                    featured,
                    sideCards,
                    bottom
                ],
                {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.08
                }
            );


            gsap.to(
                line,
                {
                    scaleX: 1,
                    duration: 0.5
                }
            );

        }


     

        if (
            typeof ScrollTrigger !== "undefined"
        ) {

            const featuredImage =
                section.querySelector(
                    ".featured-blog-image img"
                );


            if (featuredImage) {

                gsap.to(
                    featuredImage,
                    {
                        yPercent: -4,

                        ease: "none",

                        scrollTrigger: {

                            trigger: featured,

                            start: "top bottom",

                            end: "bottom top",

                            scrub: 1

                        }

                    }
                );

            }

        }



        const cards =
            section.querySelectorAll(
                ".featured-blog-card, .blog-horizontal-card"
            );


        cards.forEach(
            function (card) {

                const arrow =
                    card.querySelector(
                        ".featured-blog-open, .blog-small-arrow"
                    );


                if (!arrow) {
                    return;
                }


                card.addEventListener(
                    "mouseenter",
                    function () {

                        gsap.to(
                            arrow,
                            {
                                scale: 1.08,

                                duration: 0.25,

                                ease: "power2.out"
                            }
                        );

                    }
                );


                card.addEventListener(
                    "mouseleave",
                    function () {

                        gsap.to(
                            arrow,
                            {
                                scale: 1,

                                duration: 0.25,

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
                ".blog-topics"
            );


        if (!section) {
            return;
        }


        const eyebrow =
            section.querySelector(
                ".blog-topics-eyebrow"
            );


        const title =
            section.querySelector(
                ".blog-topics-heading h2"
            );


        const line =
            section.querySelector(
                ".blog-topics-line"
            );


        const intro =
            section.querySelector(
                ".blog-topics-intro"
            );


        const cards =
            section.querySelectorAll(
                ".blog-topic-card"
            );


        const bottom =
            section.querySelector(
                ".blog-topics-bottom"
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
                y: 40
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
            cards,
            {
                opacity: 0,
                y: 45
            }
        );


        gsap.set(
            bottom,
            {
                opacity: 0,
                y: 20
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
                        duration: 0.45,
                        ease: "power3.out"
                    }
                )


                .to(
                    title,
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
                        duration: 0.45,
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
                    "-=0.2"
                )


                .to(
                    cards,
                    {
                        opacity: 1,
                        y: 0,

                        duration: 0.6,

                        stagger: 0.1,

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
                cards,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.08
                }
            );

        }



        cards.forEach(
            function (card) {

                const icon =
                    card.querySelector(
                        ".blog-topic-icon"
                    );


                const arrow =
                    card.querySelector(
                        ".blog-topic-arrow"
                    );


                card.addEventListener(
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

                                duration: 0.3,

                                ease: "power2.out"
                            }
                        );


                        gsap.to(
                            arrow,
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



        const bgOne =
            section.querySelector(
                ".blog-topics-bg-one"
            );


        const bgTwo =
            section.querySelector(
                ".blog-topics-bg-two"
            );


        if (bgOne) {

            gsap.to(
                bgOne,
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


        if (bgTwo) {

            gsap.to(
                bgTwo,
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

    }
);


document.addEventListener(
    "DOMContentLoaded",
    function () {

        const section =
            document.querySelector(
                ".latest-articles"
            );


        if (!section) {
            return;
        }


        const cards =
            section.querySelectorAll(
                ".article-filter-item"
            );


        const filters =
            section.querySelectorAll(
                ".latest-filter"
            );


        filters.forEach(
            function (filter) {

                filter.addEventListener(
                    "click",
                    function () {

                        const category =
                            filter.dataset.filter;


                        filters.forEach(
                            function (button) {

                                button.classList.remove(
                                    "active"
                                );

                            }
                        );


                        filter.classList.add(
                            "active"
                        );


                        cards.forEach(
                            function (card) {

                                const cardCategory =
                                    card.dataset.category;


                                const show =
                                    category === "all" ||
                                    cardCategory === category;


                                if (
                                    typeof gsap !==
                                    "undefined"
                                ) {

                                    if (show) {

                                        gsap.to(
                                            card,
                                            {
                                                opacity: 1,

                                                scale: 1,

                                                height: "auto",

                                                duration: 0.35,

                                                ease: "power2.out",

                                                overwrite: true
                                            }
                                        );

                                        card.style.display =
                                            "";

                                    } else {

                                        gsap.to(
                                            card,
                                            {
                                                opacity: 0,

                                                scale: 0.96,

                                                duration: 0.25,

                                                ease: "power2.in",

                                                overwrite: true,

                                                onComplete:
                                                    function () {

                                                        card.style.display =
                                                            "none";

                                                    }
                                            }
                                        );

                                    }

                                } else {

                                    card.style.display =
                                        show ? "" : "none";

                                }

                            }
                        );

                    }
                );

            }
        );


        if (
            typeof gsap === "undefined"
        ) {
            return;
        }


        const eyebrow =
            section.querySelector(
                ".latest-eyebrow"
            );


        const title =
            section.querySelector(
                ".latest-heading h2"
            );


        const line =
            section.querySelector(
                ".latest-line"
            );


        const intro =
            section.querySelector(
                ".latest-intro"
            );


        const visibleCards =
            section.querySelectorAll(
                ".article-filter-item"
            );


        const bottom =
            section.querySelector(
                ".latest-bottom"
            );


        gsap.set(
            eyebrow,
            {
                opacity: 1,
                y: 20
            }
        );


        gsap.set(
            title,
            {
                opacity: 1,
                y: 40
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
                opacity: 1,
                y: 25
            }
        );


        gsap.set(
            visibleCards,
            {
                opacity: 1,
                y: 45
            }
        );


        gsap.set(
            bottom,
            {
                opacity: 0,
                y: 20
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

                        duration: 0.45,

                        ease: "power3.out"
                    }
                )


                .to(
                    title,
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

                        duration: 0.45,

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
                    "-=0.2"
                )


                .to(
                    visibleCards,
                    {
                        opacity: 1,

                        y: 0,

                        duration: 0.6,

                        stagger: 0.08,

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
                visibleCards,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.08
                }
            );

        }



        const allCards =
            section.querySelectorAll(
                ".latest-card"
            );


        allCards.forEach(
            function (card) {

                const image =
                    card.querySelector(
                        ".latest-image img"
                    );


                const openButton =
                    card.querySelector(
                        ".latest-open"
                    );


                card.addEventListener(
                    "mouseenter",
                    function () {

                        gsap.to(
                            image,
                            {
                                scale: 1.08,

                                duration: 0.75,

                                ease: "power3.out"
                            }
                        );


                        gsap.to(
                            openButton,
                            {
                                scale: 1.08,

                                duration: 0.25,

                                ease: "power2.out"
                            }
                        );

                    }
                );


                card.addEventListener(
                    "mouseleave",
                    function () {

                        gsap.to(
                            image,
                            {
                                scale: 1,

                                duration: 0.75,

                                ease: "power3.out"
                            }
                        );


                        gsap.to(
                            openButton,
                            {
                                scale: 1,

                                duration: 0.25,

                                ease: "power2.out"
                            }
                        );

                    }
                );

            }
        );

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
            opacity: 1,
            y: 40
        }
    );


    gsap.set(
        footerInfo,
        {
            opacity: 1,
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
            opacity: 1
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
