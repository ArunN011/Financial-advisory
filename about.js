

const aboutHero =
    document.querySelector(".about-hero");


if (aboutHero) {

    const breadcrumb =
        aboutHero.querySelector(
            ".about-breadcrumb"
        );

    const title =
        aboutHero.querySelector(
            ".about-hero-title"
        );

    const line =
        aboutHero.querySelector(
            ".about-title-line"
        );

    const image =
        aboutHero.querySelector(
            ".about-hero-image"
        );

    const imageSide =
        aboutHero.querySelector(
            ".about-hero-right"
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
            opacity: 0,
            scaleX: 0,
            transformOrigin: "left center"
        }
    );


    gsap.set(
        imageSide,
        {
            clipPath:
                "inset(0 0 0 100%)"
        }
    );


    gsap.set(
        image,
        {
            scale: 1.12
        }
    );


 

    const aboutHeroTimeline =
        gsap.timeline();


    aboutHeroTimeline

        .to(
            imageSide,
            {
                clipPath:
                    "inset(0 0 0 0)",

                duration: 1.1,

                ease: "power4.inOut"
            }
        )

        .to(
            image,
            {
                scale: 1,

                duration: 1.5,

                ease: "power3.out"
            },
            "-=0.8"
        )

        .to(
            breadcrumb,
            {
                opacity: 1,

                y: 0,

                duration: 0.6,

                ease: "power3.out"
            },
            "-=0.9"
        )

        .to(
            title,
            {
                opacity: 1,

                y: 0,

                duration: 0.9,

                ease: "power3.out"
            },
            "-=0.35"
        )

        .to(
            line,
            {
                opacity: 1,

                scaleX: 1,

                duration: 0.6,

                ease: "power3.out"
            },
            "-=0.45"
        );


  

    gsap.to(
        image,
        {
            scale: 1.035,

            duration: 8,

            repeat: -1,

            yoyo: true,

            ease: "sine.inOut"
        }
    );


 

    imageSide.addEventListener(
        "mouseenter",
        function () {

            gsap.to(
                image,
                {
                    scale: 1.06,

                    duration: 1,

                    ease: "power2.out"
                }
            );

        }
    );


    imageSide.addEventListener(
        "mouseleave",
        function () {

            gsap.to(
                image,
                {
                    scale: 1.035,

                    duration: 1,

                    ease: "power2.out"
                }
            );

        }
    );

}


const advisoryIntro =
    document.querySelector(".advisory-intro");


if (advisoryIntro) {

    const advisoryImages =
        advisoryIntro.querySelectorAll(
            ".advisory-image"
        );

    const advisoryLabel =
        advisoryIntro.querySelector(
            ".advisory-label"
        );

    const advisoryTitle =
        advisoryIntro.querySelector(
            ".advisory-title"
        );

    const advisoryDescription =
        advisoryIntro.querySelector(
            ".advisory-description"
        );

    const advisoryFeatures =
        advisoryIntro.querySelectorAll(
            ".advisory-feature"
        );

    const advisoryButton =
        advisoryIntro.querySelector(
            ".advisory-btn"
        );

    const advisoryTrust =
        advisoryIntro.querySelector(
            ".advisory-trust"
        );

    const experience =
        advisoryIntro.querySelector(
            ".advisory-experience"
        );



    gsap.set(
        advisoryImages,
        {
            opacity: 0,
            scale: 1.12
        }
    );


    gsap.set(
        advisoryLabel,
        {
            opacity: 0,
            y: 25
        }
    );


    gsap.set(
        advisoryTitle,
        {
            opacity: 0,
            y: 45
        }
    );


    gsap.set(
        advisoryDescription,
        {
            opacity: 0,
            y: 25
        }
    );


    gsap.set(
        advisoryButton,
        {
            opacity: 0,
            y: 25
        }
    );


    gsap.set(
        advisoryTrust,
        {
            opacity: 0
        }
    );


    gsap.set(
        experience,
        {
            opacity: 0,
            scale: 0
        }
    );




    const advisoryTimeline =
        gsap.timeline({

            scrollTrigger: {

                trigger: advisoryIntro,

                start: "top 72%",

                toggleActions:
                    "play none none reverse"

            }

        });


    advisoryTimeline

       

        .to(
            advisoryImages,
            {
                opacity: 1,

                scale: 1,

                duration: 0.9,

                stagger: 0.13,

                ease: "power3.out"
            }
        )


        .to(
            experience,
            {
                opacity: 1,

                scale: 1,

                duration: 0.7,

                ease: "back.out(1.7)"
            },
            "-=0.45"
        )


        .to(
            advisoryLabel,
            {
                opacity: 1,

                y: 0,

                duration: 0.6,

                ease: "power3.out"
            },
            "-=0.65"
        )

        .to(
            advisoryTitle,
            {
                opacity: 1,

                y: 0,

                duration: 0.85,

                ease: "power3.out"
            },
            "-=0.3"
        )

        .to(
            advisoryDescription,
            {
                opacity: 1,

                y: 0,

                duration: 0.6,

                ease: "power3.out"
            },
            "-=0.4"
        )


        .to(
            advisoryFeatures,
            {
                opacity: 1,

                x: 0,

                duration: 0.55,

                stagger: 0.12,

                ease: "power3.out"
            },
            "-=0.2"
        )

        .to(
            advisoryButton,
            {
                opacity: 1,

                y: 0,

                duration: 0.55,

                ease: "power3.out"
            },
            "-=0.2"
        )


        .to(
            advisoryTrust,
            {
                opacity: 1,

                duration: 0.45,

                ease: "power2.out"
            },
            "-=0.2"
        );


 
    gsap.to(
        experience,
        {
            y: -9,

            duration: 2.3,

            repeat: -1,

            yoyo: true,

            ease: "sine.inOut"
        }
    );


    

    gsap.to(
        ".advisory-decoration",
        {
            rotation: 360,

            duration: 18,

            repeat: -1,

            ease: "none"
        }
    );

}

const financeHistory =
    document.querySelector(".finance-history");


if (financeHistory) {

    const historyIntro =
        financeHistory.querySelector(
            ".history-intro"
        );

    const historyLabel =
        financeHistory.querySelector(
            ".history-label"
        );

    const historyTitle =
        financeHistory.querySelector(
            ".history-intro h2"
        );

    const historyDescription =
        financeHistory.querySelector(
            ".history-intro p"
        );

    const milestones =
        financeHistory.querySelectorAll(
            ".history-milestone"
        );

    const historyLine =
        financeHistory.querySelector(
            ".history-line-progress"
        );

    const historyDots =
        financeHistory.querySelectorAll(
            ".history-dot"
        );

    const historyCards =
        financeHistory.querySelectorAll(
            ".history-card"
        );

    const historyBottom =
        financeHistory.querySelector(
            ".history-bottom"
        );

    const counter =
        financeHistory.querySelector(
            ".counter-number"
        );


    gsap.set(
        historyLabel,
        {
            opacity: 0,
            y: 20
        }
    );


    gsap.set(
        historyTitle,
        {
            opacity: 0,
            y: 45
        }
    );


    gsap.set(
        historyDescription,
        {
            opacity: 0,
            y: 25
        }
    );


    gsap.set(
        milestones,
        {
            opacity: 0,
            y: 45
        }
    );


    gsap.set(
        historyDots,
        {
            scale: 0.5
        }
    );


    gsap.set(
        historyCards,
        {
            y: 20
        }
    );


    gsap.set(
        historyBottom,
        {
            opacity: 0,
            y: 35
        }
    );


    gsap.set(
        historyLine,
        {
            height: "0%"
        }
    );



    const historyTimeline =
        gsap.timeline({

            scrollTrigger: {

                trigger: financeHistory,

                start: "top 72%",

                toggleActions:
                    "play none none reverse"

            }

        });


    historyTimeline

     

        .to(
            historyLabel,
            {
                opacity: 1,

                y: 0,

                duration: 0.55,

                ease: "power3.out"
            }
        )


        .to(
            historyTitle,
            {
                opacity: 1,

                y: 0,

                duration: 0.8,

                ease: "power3.out"
            },
            "-=0.25"
        )


        .to(
            historyDescription,
            {
                opacity: 1,

                y: 0,

                duration: 0.6,

                ease: "power3.out"
            },
            "-=0.35"
        )


        .to(
            historyLine,
            {
                height: "100%",

                duration: 2.2,

                ease: "power2.inOut"
            },
            "-=0.1"
        )

     

        .to(
            milestones,
            {
                opacity: 1,

                y: 0,

                duration: 0.65,

                stagger: 0.3,

                ease: "power3.out"
            },
            "-=1.7"
        )


        .to(
            historyDots,
            {
                scale: 1,

                duration: 0.5,

                stagger: 0.3,

                ease: "back.out(1.8)"
            },
            "-=1.8"
        )


        .to(
            historyCards,
            {
                y: 0,

                duration: 0.5,

                stagger: 0.25,

                ease: "power3.out"
            },
            "-=1.6"
        )


        .to(
            historyBottom,
            {
                opacity: 1,

                y: 0,

                duration: 0.7,

                ease: "power3.out"
            },
            "-=0.8"
        );


  

    const counterObject = {
        value: 0
    };


    gsap.to(
        counterObject,
        {
            value: 10,

            duration: 1.5,

            ease: "power2.out",

            scrollTrigger: {

                trigger: historyBottom,

                start: "top 85%",

                once: true

            },

            onUpdate: function () {

                counter.textContent =
                    Math.round(
                        counterObject.value
                    );

            }

        }
    );




    historyDots.forEach(
        function (dot) {

            dot.addEventListener(
                "mouseenter",
                function () {

                    gsap.to(
                        dot,
                        {
                            scale: 1.15,

                            background: "#208c91",

                            duration: 0.3,

                            ease: "power2.out"
                        }
                    );

                }
            );


            dot.addEventListener(
                "mouseleave",
                function () {

                    gsap.to(
                        dot,
                        {
                            scale: 1,

                            background: "#102d25",

                            duration: 0.3,

                            ease: "power2.out"
                        }
                    );

                }
            );

        }
    );

}


if (typeof gsap !== "undefined") {

    gsap.registerPlugin(ScrollTrigger);


    const whatSection =
        document.querySelector(".what-we-do");


    if (whatSection) {

        const intro =
            whatSection.querySelector(
                ".what-we-do-intro"
            );

        const label =
            whatSection.querySelector(
                ".what-label"
            );

        const title =
            whatSection.querySelector(
                ".what-intro-inner h2"
            );

        const line =
            whatSection.querySelector(
                ".what-line"
            );

        const description =
            whatSection.querySelector(
                ".what-intro-inner p"
            );

        const viewAll =
            whatSection.querySelector(
                ".what-view-all"
            );

        const cards =
            whatSection.querySelectorAll(
                ".finance-service-card"
            );

        const icons =
            whatSection.querySelectorAll(
                ".service-icon"
            );


     

        gsap.set(
            intro,
            {
                opacity: 1,
                x: -70
            }
        );


        gsap.set(
            label,
            {
                opacity: 1,
                y: 20
            }
        );


        gsap.set(
            title,
            {
                opacity:1,
                y: 35
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
                opacity: 1,
                y: 20
            }
        );


        gsap.set(
            viewAll,
            {
                opacity: 1,
                y: 15
            }
        );


        gsap.set(
            cards,
            {
                opacity: 1,
                y: 50
            }
        );


       

        const servicesTimeline =
            gsap.timeline({

                scrollTrigger: {

                    trigger: whatSection,

                    start: "top 75%",

                    toggleActions:
                        "play none none reverse"

                }

            });


        servicesTimeline

           

            .to(
                intro,
                {
                    opacity: 1,

                    x: 0,

                    duration: 0.8,

                    ease: "power3.out"
                }
            )


            .to(
                label,
                {
                    opacity: 1,

                    y: 0,

                    duration: 0.45,

                    ease: "power3.out"
                },
                "-=0.45"
            )

        

            .to(
                title,
                {
                    opacity: 1,

                    y: 0,

                    duration: 0.7,

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
                viewAll,
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

                    duration: 0.65,

                    stagger: 0.12,

                    ease: "power3.out"
                },
                "-=0.55"
            );


    
        cards.forEach(
            function(card) {

                const icon =
                    card.querySelector(
                        ".service-icon"
                    );


                card.addEventListener(
                    "mouseenter",
                    function() {

                        gsap.to(
                            icon,
                            {
                                rotation: -7,

                                scale: 1.08,

                                duration: 0.35,

                                ease: "power2.out"
                            }
                        );

                    }
                );


                card.addEventListener(
                    "mouseleave",
                    function() {

                        gsap.to(
                            icon,
                            {
                                rotation: 0,

                                scale: 1,

                                duration: 0.35,

                                ease: "power2.out"
                            }
                        );

                    }
                );

            }
        );

    }

}

if (typeof gsap !== "undefined") {

    gsap.registerPlugin(ScrollTrigger);


    const teamSection =
        document.querySelector(".team-section");


    if (teamSection) {

        const teamEyebrow =
            teamSection.querySelector(
                ".team-eyebrow"
            );

        const teamTitle =
            teamSection.querySelector(
                ".team-title"
            );

        const teamLine =
            teamSection.querySelector(
                ".team-title-line"
            );

        const teamIntro =
            teamSection.querySelector(
                ".team-intro"
            );

        const teamCards =
            teamSection.querySelectorAll(
                ".team-card"
            );

        const teamBottom =
            teamSection.querySelector(
                ".team-bottom"
            );



        gsap.set(
            teamEyebrow,
            {
                opacity: 1,
                y: 20
            }
        );


        gsap.set(
            teamTitle,
            {
                opacity: 1,
                y: 40
            }
        );


        gsap.set(
            teamLine,
            {
                scaleX: 0
            }
        );


        gsap.set(
            teamIntro,
            {
                opacity: 1,
                y: 25
            }
        );


        gsap.set(
            teamCards,
            {
                opacity: 1,
                y: 55
            }
        );


        gsap.set(
            teamBottom,
            {
                opacity: 1,
                y: 25
            }
        );


        
        const teamTimeline =
            gsap.timeline({

                scrollTrigger: {

                    trigger: teamSection,

                    start: "top 72%",

                    toggleActions:
                        "play none none reverse"

                }

            });


        teamTimeline

      
            .to(
                teamEyebrow,
                {
                    opacity: 1,

                    y: 0,

                    duration: 0.5,

                    ease: "power3.out"
                }
            )

            .to(
                teamTitle,
                {
                    opacity: 1,

                    y: 0,

                    duration: 0.8,

                    ease: "power3.out"
                },
                "-=0.25"
            )


            .to(
                teamLine,
                {
                    scaleX: 1,

                    duration: 0.55,

                    ease: "power3.out"
                },
                "-=0.4"
            )

        

            .to(
                teamIntro,
                {
                    opacity: 1,

                    y: 0,

                    duration: 0.6,

                    ease: "power3.out"
                },
                "-=0.35"
            )

           

            .to(
                teamCards,
                {
                    opacity: 1,

                    y: 0,

                    duration: 0.75,

                    stagger: 0.13,

                    ease: "power3.out"
                },
                "-=0.15"
            )

       

            .to(
                teamBottom,
                {
                    opacity: 1,

                    y: 0,

                    duration: 0.55,

                    ease: "power3.out"
                },
                "-=0.25"
            );


        teamCards.forEach(
            function(card) {

                const image =
                    card.querySelector(
                        ".team-image"
                    );


                gsap.to(
                    image,
                    {
                        yPercent: -4,

                        ease: "none",

                        scrollTrigger: {

                            trigger: card,

                            start: "top bottom",

                            end: "bottom top",

                            scrub: 1

                        }

                    }
                );

            }
        );



        teamCards.forEach(
            function(card) {

                const image =
                    card.querySelector(
                        ".team-image"
                    );

                const social =
                    card.querySelectorAll(
                        ".team-social a"
                    );

                const view =
                    card.querySelector(
                        ".team-view"
                    );


                card.addEventListener(
                    "mouseenter",
                    function() {

                        gsap.to(
                            image,
                            {
                                scale: 1.08,

                                duration: 0.8,

                                ease:
                                    "power3.out"
                            }
                        );


                        gsap.to(
                            social,
                            {
                                x: 0,

                                duration: 0.4,

                                stagger: 0.07,

                                ease:
                                    "power3.out"
                            }
                        );


                        gsap.to(
                            view,
                            {
                                x: 0,

                                duration: 0.45,

                                ease:
                                    "power3.out"
                            }
                        );

                    }
                );


                card.addEventListener(
                    "mouseleave",
                    function() {

                        gsap.to(
                            image,
                            {
                                scale: 1.01,

                                duration: 0.8,

                                ease:
                                    "power3.out"
                            }
                        );

                    }
                );

            }
        );

    }

}



document.addEventListener("DOMContentLoaded", function () {

    if (
        typeof gsap === "undefined" ||
        typeof ScrollTrigger === "undefined"
    ) {
        return;
    }

    gsap.registerPlugin(ScrollTrigger);


    const section =
        document.querySelector(
            ".financial-advantage"
        );

    if (!section) return;


    const eyebrow =
        section.querySelector(
            ".advantage-eyebrow"
        );

    const title =
        section.querySelector(
            ".advantage-header h2"
        );

    const line =
        section.querySelector(
            ".advantage-line"
        );

    const intro =
        section.querySelector(
            ".advantage-header > p"
        );

    const feature =
        section.querySelector(
            ".advantage-feature"
        );

    const cards =
        section.querySelectorAll(
            ".advantage-card"
        );

    const stats =
        section.querySelectorAll(
            ".advantage-stat"
        );


  

    gsap.set(eyebrow, {
        opacity: 0,
        y: 20
    });


    gsap.set(title, {
        opacity: 0,
        y: 40
    });


    gsap.set(line, {
        scaleX: 0
    });


    gsap.set(intro, {
        opacity: 0,
        y: 20
    });


    gsap.set(feature, {
        opacity: 0,
        x: -50
    });


    gsap.set(cards, {
        opacity: 0,
        y: 45
    });


    gsap.set(stats, {
        opacity: 0,
        y: 25
    });


    const tl =
        gsap.timeline({

            scrollTrigger: {

                trigger: section,

                start: "top 75%",

                toggleActions:
                    "play none none reverse"

            }

        });


    tl

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
            "-=0.35"
        )

        .to(
            intro,
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "power3.out"
            },
            "-=0.25"
        )

        .to(
            feature,
            {
                opacity: 1,
                x: 0,
                duration: 0.7,
                ease: "power3.out"
            },
            "-=0.15"
        )

        .to(
            cards,
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.12,
                ease: "power3.out"
            },
            "-=0.45"
        )

        .to(
            stats,
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.08,
                ease: "power3.out"
            },
            "-=0.25"
        );



    const counters =
        section.querySelectorAll(
            ".advantage-counter"
        );


    counters.forEach(function (counter) {

        const target =
            Number(
                counter.dataset.target
            );


        const object = {
            value: 0
        };


        gsap.to(
            object,
            {
                value: target,

                duration: 1.8,

                ease: "power2.out",

                scrollTrigger: {

                    trigger: counter,

                    start: "top 85%",

                    once: true

                },

                onUpdate: function () {

                    counter.textContent =
                        Math.floor(
                            object.value
                        );

                }

            }
        );

    });




    const orbitOne =
        section.querySelector(
            ".orbit-one"
        );

    const orbitTwo =
        section.querySelector(
            ".orbit-two"
        );


    gsap.to(
        orbitOne,
        {
            rotation: 360,

            duration: 18,

            repeat: -1,

            ease: "none"
        }
    );


    gsap.to(
        orbitTwo,
        {
            rotation: -360,

            duration: 13,

            repeat: -1,

            ease: "none"
        }
    );



    cards.forEach(function (card) {

        const icon =
            card.querySelector(
                ".advantage-card-top > i"
            );


        card.addEventListener(
            "mouseenter",
            function () {

                gsap.to(
                    icon,
                    {
                        scale: 1.15,
                        rotation: -8,
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

            }
        );

    });

});
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


document.addEventListener(
    "DOMContentLoaded",
    function () {

        if (
            typeof gsap === "undefined" ||
            typeof ScrollTrigger === "undefined"
        ) {
            console.warn(
                "GSAP or ScrollTrigger is missing."
            );

            return;
        }


        gsap.registerPlugin(
            ScrollTrigger
        );


        const section =
            document.querySelector(
                ".financial-insights"
            );


        if (!section) return;


        const eyebrow =
            section.querySelector(
                ".insights-eyebrow"
            );


        const title =
            section.querySelector(
                ".insights-heading h2"
            );


        const line =
            section.querySelector(
                ".insights-line"
            );


        const headerText =
            section.querySelector(
                ".insights-header-right"
            );


        const cards =
            section.querySelectorAll(
                ".insight-card"
            );


        const bottom =
            section.querySelector(
                ".insights-bottom"
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
            headerText,
            {
                opacity: 0,
                y: 25
            }
        );


        gsap.set(
            cards,
            {
                opacity: 0,
                y: 50
            }
        );


        gsap.set(
            bottom,
            {
                opacity: 0,
                y: 20
            }
        );


   

        const tl =
            gsap.timeline({

                scrollTrigger: {

                    trigger: section,

                    start: "top 75%",

                    toggleActions:
                        "play none none reverse"

                }

            });


        tl

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
                "-=0.35"
            )

            .to(
                headerText,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.55,
                    ease: "power3.out"
                },
                "-=0.25"
            )

            .to(
                cards,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.65,
                    stagger: 0.15,
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


        cards.forEach(
            function (card) {

                const image =
                    card.querySelector(
                        ".insight-image img"
                    );


                const arrow =
                    card.querySelector(
                        ".insight-image-arrow"
                    );


                card.addEventListener(
                    "mouseenter",
                    function () {

                        gsap.to(
                            image,
                            {
                                scale: 1.08,
                                duration: 0.8,
                                ease: "power3.out"
                            }
                        );


                        gsap.to(
                            arrow,
                            {
                                scale: 1.05,
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
                            image,
                            {
                                scale: 1,
                                duration: 0.8,
                                ease: "power3.out"
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


        const pulse =
            section.querySelector(
                ".insight-pulse"
            );


        gsap.to(
            pulse,
            {
                scale: 1.5,

                opacity: 0.5,

                duration: 1.1,

                repeat: -1,

                yoyo: true,

                ease: "sine.inOut"
            }
        );


    }
);
