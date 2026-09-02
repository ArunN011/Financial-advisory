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



    const servicesSection =
        document.querySelector(".business-services");


    if (servicesSection) {

        const serviceCards =
            servicesSection.querySelectorAll(
                ".service-card"
            );

        const serviceEyebrow =
            servicesSection.querySelector(
                ".services-eyebrow"
            );

        const serviceHeading =
            servicesSection.querySelector(
                ".services-heading h2"
            );

        const serviceNumbers =
            servicesSection.querySelectorAll(
                ".service-number"
            );

        const serviceArrows =
            servicesSection.querySelectorAll(
                ".service-arrow"
            );


        gsap.set(
            [
                serviceEyebrow,
                serviceHeading,
                ...serviceCards
            ].filter(Boolean),
            {
                opacity: 1,
                clearProps: "transform"
            }
        );



        if (typeof ScrollTrigger !== "undefined") {

            const servicesTimeline =
                gsap.timeline({

                    scrollTrigger: {

                        trigger: servicesSection,

                        start: "top 75%",

                        end: "bottom 20%",

                        toggleActions:
                            "play none none reverse"

                    }

                });



            if (serviceEyebrow) {

                gsap.set(
                    serviceEyebrow,
                    {
                        opacity: 0,
                        y: 25
                    }
                );


                servicesTimeline.to(
                    serviceEyebrow,
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        ease: "power3.out"
                    }
                );

            }



            if (serviceHeading) {

                gsap.set(
                    serviceHeading,
                    {
                        opacity: 0,
                        y: 45
                    }
                );


                servicesTimeline.to(
                    serviceHeading,
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: "power3.out"
                    },
                    "-=0.3"
                );

            }



            if (serviceCards.length) {

                gsap.set(
                    serviceCards,
                    {
                        opacity: 0,
                        y: 60
                    }
                );


                servicesTimeline.to(
                    serviceCards,
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.7,
                        stagger: 0.15,
                        ease: "power3.out"
                    },
                    "-=0.35"
                );

            }



            if (serviceNumbers.length) {

                gsap.fromTo(
                    serviceNumbers,
                    {
                        opacity: 0,
                        x: -15
                    },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.5,
                        stagger: 0.15,
                        ease: "power2.out",

                        scrollTrigger: {

                            trigger: servicesSection,

                            start: "top 75%",

                            toggleActions:
                                "play none none reverse"

                        }

                    }
                );

            }


          

            if (serviceArrows.length) {

                gsap.fromTo(
                    serviceArrows,
                    {
                        opacity: 0,
                        x: -20
                    },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.5,
                        stagger: 0.15,
                        ease: "power3.out",

                        scrollTrigger: {

                            trigger: servicesSection,

                            start: "top 72%",

                            toggleActions:
                                "play none none reverse"

                        }

                    }
                );

            }

        } else {

    

            console.warn(
                "ScrollTrigger is not loaded. Showing services without scroll animation."
            );

            gsap.set(
                [
                    serviceEyebrow,
                    serviceHeading,
                    ...serviceCards,
                    ...serviceNumbers,
                    ...serviceArrows
                ].filter(Boolean),
                {
                    opacity: 1,
                    y: 0,
                    x: 0,
                    clearProps: "transform"
                }
            );

        }

    }



    const serviceCards =
        document.querySelectorAll(".service-card");


    serviceCards.forEach(function (card) {

        const arrow =
            card.querySelector(".service-arrow span");


        card.addEventListener(
            "mouseenter",
            function () {

                if (arrow) {

                    gsap.to(
                        arrow,
                        {
                            x: 12,
                            duration: 0.35,
                            ease: "power2.out"
                        }
                    );

                }

            }
        );


        card.addEventListener(
            "mouseleave",
            function () {

                if (arrow) {

                    gsap.to(
                        arrow,
                        {
                            x: 0,
                            duration: 0.35,
                            ease: "power2.out"
                        }
                    );

                }

            }
        );

    });



    if (typeof ScrollTrigger !== "undefined") {

        setTimeout(function () {

            ScrollTrigger.refresh();

        }, 300);

    }

});


const analyticsSection =
    document.querySelector(".business-analytics");


if (analyticsSection) {

    const analyticsImages =
        analyticsSection.querySelectorAll(
            ".analytics-image"
        );

    const analyticsEyebrow =
        analyticsSection.querySelector(
            ".analytics-eyebrow"
        );

    const analyticsTitle =
        analyticsSection.querySelector(
            ".analytics-title"
        );

    const analyticsDescription =
        analyticsSection.querySelector(
            ".analytics-description"
        );

    const analyticsList =
        analyticsSection.querySelectorAll(
            ".analytics-list li"
        );

    const analyticsButton =
        analyticsSection.querySelector(
            ".analytics-about-btn"
        );



    gsap.set(analyticsImages, {
        opacity: 0,
        y: 60
    });


    gsap.set(analyticsEyebrow, {
        opacity: 0,
        y: 25
    });


    gsap.set(analyticsTitle, {
        opacity: 0,
        y: 45
    });


    gsap.set(analyticsDescription, {
        opacity: 0,
        y: 30
    });


    gsap.set(analyticsList, {
        opacity: 0,
        x: 30
    });


    gsap.set(analyticsButton, {
        opacity: 0,
        y: 25
    });



    const analyticsTimeline = gsap.timeline({

        scrollTrigger: {

            trigger: analyticsSection,

            start: "top 72%",

            toggleActions:
                "play none none reverse"

        }

    });



    analyticsTimeline.to(
        analyticsImages[0],
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out"
        }
    );



    analyticsTimeline.to(
        analyticsImages[1],
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out"
        },
        "-=0.55"
    );



    analyticsTimeline.to(
        analyticsEyebrow,
        {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out"
        },
        "-=0.45"
    );



    analyticsTimeline.to(
        analyticsTitle,
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out"
        },
        "-=0.35"
    );



    analyticsTimeline.to(
        analyticsDescription,
        {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out"
        },
        "-=0.4"
    );


    analyticsTimeline.to(
        analyticsList,
        {
            opacity: 1,
            x: 0,
            duration: 0.5,
            stagger: 0.12,
            ease: "power3.out"
        },
        "-=0.25"
    );


    analyticsTimeline.to(
        analyticsButton,
        {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out"
        },
        "-=0.2"
    );



    const playButton =
        analyticsSection.querySelector(
            ".analytics-play"
        );


    if (playButton) {

        gsap.fromTo(
            playButton,
            {
                scale: 0.7,
                opacity: 0
            },
            {
                scale: 1,
                opacity: 1,
                duration: 0.7,
                delay: 1,
                ease: "back.out(1.7)",

                scrollTrigger: {

                    trigger: analyticsSection,

                    start: "top 72%",

                    toggleActions:
                        "play none none reverse"

                }
            }
        );

    }



    const sliderControls =
        analyticsSection.querySelector(
            ".analytics-slider-controls"
        );


    if (sliderControls) {

        gsap.fromTo(
            sliderControls,
            {
                scale: 0.7,
                opacity: 0
            },
            {
                scale: 1,
                opacity: 1,
                duration: 0.6,
                delay: 1.1,
                ease: "back.out(1.5)",

                scrollTrigger: {

                    trigger: analyticsSection,

                    start: "top 72%",

                    toggleActions:
                        "play none none reverse"

                }
            }
        );

    }

}


const statsSection =
    document.querySelector(".finance-stats");


if (statsSection) {

    const statsEyebrow =
        statsSection.querySelector(
            ".stats-eyebrow"
        );

    const statsHeading =
        statsSection.querySelector(
            ".stats-header h2"
        );

    const statsDescription =
        statsSection.querySelector(
            ".stats-header p"
        );

    const statCards =
        statsSection.querySelectorAll(
            ".stat-card"
        );

    const counters =
        statsSection.querySelectorAll(
            ".counter"
        );



    gsap.set(statsEyebrow, {
        opacity: 0,
        y: 25
    });


    gsap.set(statsHeading, {
        opacity: 0,
        y: 45
    });


    gsap.set(statsDescription, {
        opacity: 0,
        y: 25
    });


    gsap.set(statCards, {
        opacity: 0,
        y: 60
    });



    const statsTimeline =
        gsap.timeline({

            scrollTrigger: {

                trigger: statsSection,

                start: "top 75%",

                toggleActions:
                    "play none none reverse"

            }

        });



    statsTimeline.to(
        statsEyebrow,
        {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out"
        }
    );



    statsTimeline.to(
        statsHeading,
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out"
        },
        "-=0.3"
    );



    statsTimeline.to(
        statsDescription,
        {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out"
        },
        "-=0.4"
    );



    statsTimeline.to(
        statCards,
        {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: "power3.out"
        },
        "-=0.25"
    );



    counters.forEach(function (counter) {

        const target =
            Number(
                counter.getAttribute(
                    "data-target"
                )
            );


        const counterObject = {
            value: 0
        };


        gsap.to(
            counterObject,
            {
                value: target,

                duration: 2,

                delay: 0.4,

                ease: "power2.out",

                scrollTrigger: {

                    trigger: statsSection,

                    start: "top 75%",

                    toggleActions:
                        "play none none reverse"

                },

                onUpdate: function () {

                    counter.textContent =
                        Math.floor(
                            counterObject.value
                        );

                }
            }
        );

    });



    gsap.fromTo(
        ".stat-icon",
        {
            scale: 0,
            rotation: -30
        },
        {
            scale: 1,
            rotation: 0,

            duration: 0.7,

            stagger: 0.15,

            ease: "back.out(1.7)",

            scrollTrigger: {

                trigger: statsSection,

                start: "top 75%",

                toggleActions:
                    "play none none reverse"

            }
        }
    );

}


const financeServices =
    document.querySelector(".finance-services");


if (financeServices) {

    const serviceHeader =
        financeServices.querySelector(
            ".finance-services-header"
        );

    const serviceEyebrow =
        financeServices.querySelector(
            ".finance-services-eyebrow"
        );

    const serviceHeading =
        financeServices.querySelector(
            ".finance-services-header h2"
        );

    const serviceDescription =
        financeServices.querySelector(
            ".finance-services-header p"
        );

    const serviceCards =
        financeServices.querySelectorAll(
            ".finance-service-card"
        );



    gsap.set(serviceEyebrow, {
        opacity: 0,
        y: 25
    });


    gsap.set(serviceHeading, {
        opacity: 0,
        y: 45
    });


    gsap.set(serviceDescription, {
        opacity: 0,
        y: 25
    });


    gsap.set(serviceCards, {
        opacity: 0,
        y: 65
    });


    const financeServicesTimeline =
        gsap.timeline({

            scrollTrigger: {

                trigger: financeServices,

                start: "top 75%",

                toggleActions:
                    "play none none reverse"

            }

        });

    financeServicesTimeline.to(
        serviceEyebrow,
        {
            opacity: 1,
            y: 0,

            duration: 0.6,

            ease: "power3.out"
        }
    );


    financeServicesTimeline.to(
        serviceHeading,
        {
            opacity: 1,
            y: 0,

            duration: 0.8,

            ease: "power3.out"
        },
        "-=0.3"
    );



    financeServicesTimeline.to(
        serviceDescription,
        {
            opacity: 1,
            y: 0,

            duration: 0.6,

            ease: "power3.out"
        },
        "-=0.4"
    );



    financeServicesTimeline.to(
        serviceCards,
        {
            opacity: 1,
            y: 0,

            duration: 0.7,

            stagger: 0.13,

            ease: "power3.out"
        },
        "-=0.2"
    );



    gsap.fromTo(
        ".finance-service-icon",
        {
            scale: 0.6,
            rotation: -15
        },
        {
            scale: 1,
            rotation: 0,

            duration: 0.7,

            stagger: 0.13,

            ease: "back.out(1.7)",

            scrollTrigger: {

                trigger: financeServices,

                start: "top 75%",

                toggleActions:
                    "play none none reverse"

            }
        }
    );

}

const testimonialSection =
    document.querySelector(".finance-testimonials");


if (testimonialSection) {

    const track =
        document.getElementById("testimonialTrack");

    const cards =
        testimonialSection.querySelectorAll(
            ".testimonial-card"
        );

    const previousButton =
        document.getElementById(
            "testimonialPrev"
        );

    const nextButton =
        document.getElementById(
            "testimonialNext"
        );

    const currentNumber =
        document.getElementById(
            "testimonialCurrent"
        );

    const progressBar =
        document.getElementById(
            "testimonialProgressBar"
        );


    let currentIndex = 0;

    let autoSlide;


   

    function getCardsPerView() {

        if (window.innerWidth <= 767) {
            return 1;
        }

        if (window.innerWidth <= 1199) {
            return 2;
        }

        return 3;
    }


    function getMaxIndex() {

        const cardsPerView =
            getCardsPerView();

        return Math.max(
            0,
            cards.length - cardsPerView
        );
    }


    

    function getCardWidth() {

        if (!cards.length) {
            return 0;
        }


        const cardWidth =
            cards[0].getBoundingClientRect().width;


        const trackStyle =
            window.getComputedStyle(track);


        const gap =
            parseFloat(trackStyle.gap) || 0;


        return cardWidth + gap;
    }




    function updateSlider(
        animate = true
    ) {

        const cardWidth =
            getCardWidth();


        const maxIndex =
            getMaxIndex();


        if (currentIndex > maxIndex) {
            currentIndex = maxIndex;
        }


        const distance =
            currentIndex * cardWidth;


        if (animate) {

            gsap.to(
                track,
                {
                    x: -distance,

                    duration: 0.8,

                    ease: "power3.inOut"
                }
            );

        } else {

            gsap.set(
                track,
                {
                    x: -distance
                }
            );

        }



        currentNumber.textContent =
            String(currentIndex + 1)
                .padStart(2, "0");



        const totalPositions =
            maxIndex + 1;


        const progress =
            ((currentIndex + 1) /
            totalPositions) * 100;


        gsap.to(
            progressBar,
            {
                width: `${progress}%`,

                duration: 0.5,

                ease: "power2.out"
            }
        );

    }




    function nextSlide() {

        const maxIndex =
            getMaxIndex();


        if (currentIndex >= maxIndex) {

            currentIndex = 0;

        } else {

            currentIndex++;

        }


        updateSlider();


        restartAutoSlide();

    }


   

    function previousSlide() {

        const maxIndex =
            getMaxIndex();


        if (currentIndex <= 0) {

            currentIndex = maxIndex;

        } else {

            currentIndex--;

        }


        updateSlider();


        restartAutoSlide();

    }



    if (nextButton) {

        nextButton.addEventListener(
            "click",
            nextSlide
        );

    }


    if (previousButton) {

        previousButton.addEventListener(
            "click",
            previousSlide
        );

    }


    function startAutoSlide() {

        autoSlide =
            setInterval(
                function () {

                    nextSlide();

                },
                5000
            );

    }


    function restartAutoSlide() {

        clearInterval(autoSlide);

        startAutoSlide();

    }


   

    testimonialSection.addEventListener(
        "mouseenter",
        function () {

            clearInterval(autoSlide);

        }
    );


    testimonialSection.addEventListener(
        "mouseleave",
        function () {

            startAutoSlide();

        }
    );




    let touchStartX = 0;

    let touchEndX = 0;


    track.addEventListener(
        "touchstart",
        function (event) {

            touchStartX =
                event.touches[0].clientX;

            clearInterval(autoSlide);

        },
        {
            passive: true
        }
    );


    track.addEventListener(
        "touchend",
        function (event) {

            touchEndX =
                event.changedTouches[0].clientX;


            const difference =
                touchStartX - touchEndX;


            if (Math.abs(difference) > 50) {

                if (difference > 0) {

                    nextSlide();

                } else {

                    previousSlide();

                }

            } else {

                startAutoSlide();

            }

        },
        {
            passive: true
        }
    );



    gsap.set(
        ".testimonial-eyebrow",
        {
            opacity: 0,
            y: 25
        }
    );


    gsap.set(
        ".testimonial-heading h2",
        {
            opacity: 0,
            y: 45
        }
    );


    gsap.set(
        ".testimonial-intro",
        {
            opacity: 0,
            y: 25
        }
    );


    gsap.set(
        ".testimonial-card",
        {
            opacity: 0,
            y: 60
        }
    );


    const testimonialTimeline =
        gsap.timeline({

            scrollTrigger: {

                trigger: testimonialSection,

                start: "top 75%",

                toggleActions:
                    "play none none reverse"

            }

        });


    testimonialTimeline

        .to(
            ".testimonial-eyebrow",
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power3.out"
            }
        )

        .to(
            ".testimonial-heading h2",
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out"
            },
            "-=0.3"
        )

        .to(
            ".testimonial-intro",
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power3.out"
            },
            "-=0.45"
        )

        .to(
            ".testimonial-card",
            {
                opacity: 1,
                y: 0,
                duration: 0.7,
                stagger: 0.12,
                ease: "power3.out"
            },
            "-=0.25"
        );




    window.addEventListener(
        "resize",
        function () {

            updateSlider(false);

        }
    );



    setTimeout(
        function () {

            updateSlider(false);

            startAutoSlide();

        },
        100
    );

}


const whyFinance =
    document.querySelector(".why-finance");


if (whyFinance) {

    const whyEyebrow =
        whyFinance.querySelector(
            ".why-eyebrow"
        );

    const whyHeading =
        whyFinance.querySelector(
            ".why-content h2"
        );

    const whyDescription =
        whyFinance.querySelector(
            ".why-description"
        );

    const whyButton =
        whyFinance.querySelector(
            ".why-btn"
        );

    const whyFeatures =
        whyFinance.querySelectorAll(
            ".why-feature"
        );

    const whyCircle =
        whyFinance.querySelector(
            ".why-circle"
        );

    const experienceBadge =
        whyFinance.querySelector(
            ".experience-badge"
        );


    gsap.set(
        [
            whyEyebrow,
            whyHeading,
            whyDescription,
            whyButton
        ],
        {
            opacity: 0,
            y: 35
        }
    );


    gsap.set(
        whyFeatures,
        {
            opacity: 0,
            scale: 0.85,
            y: 30
        }
    );


    gsap.set(
        whyCircle,
        {
            opacity: 0,
            scale: 0.7
        }
    );


    gsap.set(
        experienceBadge,
        {
            opacity: 0,
            scale: 0
        }
    );


    const whyTimeline =
        gsap.timeline({

            scrollTrigger: {

                trigger: whyFinance,

                start: "top 72%",

                toggleActions:
                    "play none none reverse"

            }

        });


    whyTimeline

        .to(
            whyEyebrow,
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power3.out"
            }
        )

        .to(
            whyHeading,
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out"
            },
            "-=0.3"
        )

        .to(
            whyDescription,
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power3.out"
            },
            "-=0.4"
        )

        .to(
            whyButton,
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power3.out"
            },
            "-=0.3"
        )

        .to(
            whyCircle,
            {
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: "power3.out"
            },
            "-=0.8"
        )

        .to(
            experienceBadge,
            {
                opacity: 1,
                scale: 1,
                duration: 0.7,
                ease: "back.out(1.7)"
            },
            "-=0.5"
        )

        .to(
            whyFeatures,
            {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.65,
                stagger: 0.15,
                ease: "back.out(1.4)"
            },
            "-=0.35"
        );



    gsap.to(
        experienceBadge,
        {
            y: -10,

            duration: 2.2,

            repeat: -1,

            yoyo: true,

            ease: "sine.inOut"
        }
    );
    gsap.to(
        ".circle-ring-two",
        {
            rotation: 360,

            duration: 25,

            repeat: -1,

            ease: "none"
        }
    );

}


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