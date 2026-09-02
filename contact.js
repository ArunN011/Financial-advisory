

document.addEventListener(
    "DOMContentLoaded",
    function () {

        if (typeof gsap === "undefined") {
            return;
        }


        const hero =
            document.querySelector(
                ".contact-page-hero"
            );


        if (!hero) {
            return;
        }


        const breadcrumb =
            hero.querySelector(
                ".contact-breadcrumb"
            );


        const title =
            hero.querySelector(
                ".contact-hero-title"
            );


        const line =
            hero.querySelector(
                ".contact-hero-line"
            );


        const description =
            hero.querySelector(
                ".contact-hero-description"
            );


        const button =
            hero.querySelector(
                ".contact-hero-btn"
            );


        const image =
            hero.querySelector(
                ".contact-hero-image"
            );


        const floating =
            hero.querySelector(
                ".contact-floating-card"
            );


        const corner =
            hero.querySelector(
                ".contact-hero-corner"
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
            floating,
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


     

        const tl = gsap.timeline();


        tl.to(
            image,
            {
                opacity: 1,

                scale: 1.04,

                duration: 1.3,

                ease: "power3.out"
            }
        );


        tl.to(
            breadcrumb,
            {
                opacity: 1,

                y: 0,

                duration: 0.45,

                ease: "power3.out"
            },
            "-=0.85"
        );


        tl.to(
            title,
            {
                opacity: 1,

                y: 0,

                duration: 0.8,

                ease: "power3.out"
            },
            "-=0.25"
        );


        tl.to(
            line,
            {
                scaleX: 1,

                duration: 0.5,

                ease: "power3.out"
            },
            "-=0.35"
        );


        tl.to(
            description,
            {
                opacity: 1,

                y: 0,

                duration: 0.55,

                ease: "power3.out"
            },
            "-=0.2"
        );


        tl.to(
            button,
            {
                opacity: 1,

                y: 0,

                duration: 0.5,

                ease: "power3.out"
            },
            "-=0.2"
        );


        tl.to(
            floating,
            {
                opacity: 1,

                y: 0,

                duration: 0.55,

                ease: "power3.out"
            },
            "-=0.15"
        );


        tl.to(
            corner,
            {
                opacity: 1,

                scale: 1,

                duration: 0.45,

                ease: "power3.out"
            },
            "-=0.2"
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
            floating,
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
/* =========================================================
   FINANCE CONTACT FORM
   VALIDATION + GSAP
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        const form =
            document.getElementById(
                "financeContactForm"
            );


        if (!form) {
            return;
        }


        const submitButton =
            document.getElementById(
                "financeSubmit"
            );


        /* =================================================
           ELEMENTS
        ================================================= */

        const fullName =
            document.getElementById(
                "fullName"
            );


        const email =
            document.getElementById(
                "email"
            );


        const phone =
            document.getElementById(
                "phone"
            );


        const service =
            document.getElementById(
                "service"
            );


        const investmentRange =
            document.getElementById(
                "investmentRange"
            );


        const contactMethod =
            document.getElementById(
                "contactMethod"
            );


        const message =
            document.getElementById(
                "message"
            );


        const consent =
            document.getElementById(
                "consent"
            );


        /* =================================================
           VALIDATION HELPERS
        ================================================= */

        function setInvalid(
            element
        ) {

            const group =
                element.closest(
                    ".form-group"
                );


            if (group) {

                group.classList.add(
                    "invalid"
                );

            }

        }


        function setValid(
            element
        ) {

            const group =
                element.closest(
                    ".form-group"
                );


            if (group) {

                group.classList.remove(
                    "invalid"
                );

            }

        }


        /* =================================================
           REMOVE ERROR ON INPUT
        ================================================= */

        [
            fullName,
            email,
            phone,
            service,
            investmentRange,
            contactMethod,
            message
        ].forEach(
            function (field) {

                field.addEventListener(
                    "input",
                    function () {

                        setValid(field);

                    }
                );


                field.addEventListener(
                    "change",
                    function () {

                        setValid(field);

                    }
                );

            }
        );


        /* =================================================
           CONSENT ERROR
        ================================================= */

        consent.addEventListener(
            "change",
            function () {

                const error =
                    form.querySelector(
                        ".consent-error"
                    );


                if (consent.checked) {

                    error.style.display =
                        "none";

                } else {

                    error.style.display =
                        "block";

                }

            }
        );


        /* =================================================
           FORM SUBMIT
        ================================================= */

        form.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                let valid = true;


                /* -----------------------------------------
                   NAME
                ----------------------------------------- */

                if (
                    fullName.value.trim()
                    === ""
                ) {

                    setInvalid(fullName);

                    valid = false;

                } else {

                    setValid(fullName);

                }


                /* -----------------------------------------
                   EMAIL
                ----------------------------------------- */

                const emailPattern =
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


                if (
                    email.value.trim() === "" ||
                    !emailPattern.test(
                        email.value.trim()
                    )
                ) {

                    setInvalid(email);

                    valid = false;

                } else {

                    setValid(email);

                }


                /* -----------------------------------------
                   PHONE
                ----------------------------------------- */

                const phoneDigits =
                    phone.value.replace(
                        /\D/g,
                        ""
                    );


                if (
                    phoneDigits.length < 10
                ) {

                    setInvalid(phone);

                    valid = false;

                } else {

                    setValid(phone);

                }


                /* -----------------------------------------
                   SERVICE
                ----------------------------------------- */

                if (
                    service.value === ""
                ) {

                    setInvalid(service);

                    valid = false;

                } else {

                    setValid(service);

                }


                /* -----------------------------------------
                   INVESTMENT RANGE
                ----------------------------------------- */

                if (
                    investmentRange.value === ""
                ) {

                    setInvalid(
                        investmentRange
                    );

                    valid = false;

                } else {

                    setValid(
                        investmentRange
                    );

                }


                /* -----------------------------------------
                   CONTACT METHOD
                ----------------------------------------- */

                if (
                    contactMethod.value === ""
                ) {

                    setInvalid(
                        contactMethod
                    );

                    valid = false;

                } else {

                    setValid(
                        contactMethod
                    );

                }


                /* -----------------------------------------
                   MESSAGE
                ----------------------------------------- */

                if (
                    message.value.trim()
                    === ""
                ) {

                    setInvalid(message);

                    valid = false;

                } else {

                    setValid(message);

                }


                /* -----------------------------------------
                   CONSENT
                ----------------------------------------- */

                const consentError =
                    form.querySelector(
                        ".consent-error"
                    );


                if (!consent.checked) {

                    consentError.style.display =
                        "block";

                    valid = false;

                } else {

                    consentError.style.display =
                        "none";

                }


                /* =========================================
                   INVALID
                ========================================= */

                if (!valid) {

                    /* Scroll to first invalid */

                    const firstInvalid =
                        form.querySelector(
                            ".form-group.invalid"
                        );


                    if (firstInvalid) {

                        firstInvalid.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });

                    }


                    /* Shake form */

                    if (
                        typeof gsap !==
                        "undefined"
                    ) {

                        gsap.fromTo(
                            form,
                            {
                                x: -8
                            },
                            {
                                x: 0,

                                duration: 0.08,

                                repeat: 5,

                                yoyo: true,

                                ease: "power1.inOut"
                            }
                        );

                    }


                    return;

                }


                /* =========================================
                   SUCCESS
                ========================================== */

                submitButton.disabled =
                    true;


                const buttonText =
                    submitButton.querySelector(
                        "span"
                    );


                const buttonIcon =
                    submitButton.querySelector(
                        "i"
                    );


                buttonText.textContent =
                    "SUBMITTING...";


                /* -----------------------------------------
                   GSAP SUCCESS ANIMATION
                ----------------------------------------- */

                if (
                    typeof gsap !==
                    "undefined"
                ) {

                    gsap.to(
                        submitButton,
                        {
                            scale: 0.98,

                            duration: 0.15,

                            ease: "power2.out",

                            yoyo: true,

                            repeat: 1,

                            onComplete:
                                function () {

                                    gsap.to(
                                        buttonIcon,
                                        {
                                            x: 8,

                                            duration: 0.3,

                                            ease: "power2.out"
                                        }
                                    );

                                }
                        }
                    );

                }


                /* =========================================
                   RESET FORM
                ========================================== */

                setTimeout(
                    function () {

                        form.reset();


                        /* Remove validation state */

                        form.querySelectorAll(
                            ".form-group"
                        ).forEach(
                            function (group) {

                                group.classList.remove(
                                    "invalid"
                                );

                            }
                        );


                        consentError.style.display =
                            "none";


                        /* =================================
                           NAVIGATE
                        ================================= */

                        window.location.href =
                            "error.html";


                    },
                    700
                );

            }
        );


        /* =================================================
           GSAP SECTION ANIMATION
        ================================================= */

        if (
            typeof gsap === "undefined"
        ) {
            return;
        }


        const section =
            document.querySelector(
                ".finance-contact-form"
            );


        if (!section) {
            return;
        }


        const eyebrow =
            section.querySelector(
                ".contact-form-eyebrow"
            );


        const title =
            section.querySelector(
                ".contact-form-heading h2"
            );


        const line =
            section.querySelector(
                ".contact-form-line"
            );


        const intro =
            section.querySelector(
                ".contact-form-intro"
            );


        const info =
            section.querySelector(
                ".contact-form-info"
            );


        const wrapper =
            section.querySelector(
                ".contact-form-wrapper"
            );


        /* =================================================
           INITIAL STATE
        ================================================= */

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
            info,
            {
                opacity: 0,
                x: -50
            }
        );


        gsap.set(
            wrapper,
            {
                opacity: 0,
                x: 50
            }
        );


        /* =================================================
           SCROLL TRIGGER
        ================================================= */

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
                    info,
                    {
                        opacity: 1,
                        x: 0,

                        duration: 0.75,

                        ease: "power3.out"
                    },
                    "-=0.1"
                )


                .to(
                    wrapper,
                    {
                        opacity: 1,
                        x: 0,

                        duration: 0.75,

                        ease: "power3.out"
                    },
                    "-=0.55"
                );

        } else {

            gsap.to(
                [
                    eyebrow,
                    title,
                    intro,
                    info,
                    wrapper
                ],
                {
                    opacity: 1,

                    x: 0,

                    y: 0,

                    duration: 0.5,

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


        /* =================================================
           INFO ICON ANIMATION
        ================================================= */

        const infoIcon =
            section.querySelector(
                ".contact-form-info-icon"
            );


        if (infoIcon) {

            gsap.to(
                infoIcon,
                {

                    rotation: 7,

                    duration: 2,

                    repeat: -1,

                    yoyo: true,

                    ease: "sine.inOut"

                }
            );

        }

        const decorationOne =
            section.querySelector(
                ".contact-form-decoration-one"
            );


        const decorationTwo =
            section.querySelector(
                ".contact-form-decoration-two"
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

    }
);


document.addEventListener(
    "DOMContentLoaded",
    function () {

        const section =
            document.querySelector(
                ".contact-location"
            );


        if (!section) {
            return;
        }



        if (
            typeof gsap === "undefined"
        ) {
            return;
        }


        const eyebrow =
            section.querySelector(
                ".location-eyebrow"
            );


        const title =
            section.querySelector(
                ".location-heading h2"
            );


        const line =
            section.querySelector(
                ".location-line"
            );


        const intro =
            section.querySelector(
                ".location-intro"
            );


        const map =
            section.querySelector(
                ".location-map-wrapper"
            );


        const details =
            section.querySelector(
                ".location-details"
            );


        const infoItems =
            section.querySelectorAll(
                ".location-info-item"
            );


        const directionButton =
            section.querySelector(
                ".location-direction-btn"
            );


        const decorationOne =
            section.querySelector(
                ".contact-location-decoration-one"
            );


        const decorationTwo =
            section.querySelector(
                ".contact-location-decoration-two"
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
            map,
            {
                opacity: 0,
                x: -50
            }
        );


        gsap.set(
            details,
            {
                opacity: 0,
                x: 50
            }
        );


        gsap.set(
            infoItems,
            {
                opacity: 0,
                x: 20
            }
        );


        gsap.set(
            directionButton,
            {
                opacity: 0,
                y: 20
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
                    map,
                    {
                        opacity: 1,
                        x: 0,

                        duration: 0.75,

                        ease: "power3.out"
                    },
                    "-=0.1"
                )


                .to(
                    details,
                    {
                        opacity: 1,
                        x: 0,

                        duration: 0.75,

                        ease: "power3.out"
                    },
                    "-=0.55"
                )


                .to(
                    infoItems,
                    {
                        opacity: 1,
                        x: 0,

                        duration: 0.45,

                        stagger: 0.1,

                        ease: "power3.out"
                    },
                    "-=0.35"
                )


                .to(
                    directionButton,
                    {
                        opacity: 1,
                        y: 0,

                        duration: 0.45,

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
                    map,
                    details,
                    infoItems,
                    directionButton
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


        const mapLabel =
            section.querySelector(
                ".location-map-label"
            );


        if (mapLabel) {

            gsap.to(
                mapLabel,
                {
                    y: -5,

                    duration: 2.2,

                    repeat: -1,

                    yoyo: true,

                    ease: "sine.inOut"
                }
            );

        }



        const mapIcon =
            section.querySelector(
                ".location-map-icon"
            );


        if (mapIcon) {

            gsap.to(
                mapIcon,
                {
                    scale: 1.08,

                    duration: 1.8,

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
                ".contact-faq-section"
            );


        if (!section) {
            return;
        }


        const items =
            section.querySelectorAll(
                ".contact-faq-item"
            );


        items.forEach(
            function (item) {

                const button =
                    item.querySelector(
                        ".contact-faq-question"
                    );


                const icon =
                    item.querySelector(
                        ".contact-faq-toggle i"
                    );


                if (!button) {
                    return;
                }


                button.addEventListener(
                    "click",
                    function (event) {

                        event.preventDefault();


                        const isOpen =
                            item.classList.contains(
                                "active"
                            );



                        items.forEach(
                            function (otherItem) {

                                otherItem.classList.remove(
                                    "active"
                                );


                                const otherButton =
                                    otherItem.querySelector(
                                        ".contact-faq-question"
                                    );


                                const otherIcon =
                                    otherItem.querySelector(
                                        ".contact-faq-toggle i"
                                    );


                                if (otherButton) {

                                    otherButton.setAttribute(
                                        "aria-expanded",
                                        "false"
                                    );

                                }


                                if (otherIcon) {

                                    otherIcon.className =
                                        "fa-solid fa-plus";

                                }

                            }
                        );


                       

                        if (!isOpen) {

                            item.classList.add(
                                "active"
                            );


                            button.setAttribute(
                                "aria-expanded",
                                "true"
                            );


                            if (icon) {

                                icon.className =
                                    "fa-solid fa-minus";

                            }

                        }

                    }
                );

            }
        );


     

        if (
            typeof gsap ===
            "undefined"
        ) {
            return;
        }


        const eyebrow =
            section.querySelector(
                ".contact-faq-eyebrow"
            );


        const title =
            section.querySelector(
                ".contact-faq-heading h2"
            );


        const line =
            section.querySelector(
                ".contact-faq-line"
            );


        const intro =
            section.querySelector(
                ".contact-faq-intro"
            );


        const side =
            section.querySelector(
                ".contact-faq-side"
            );


        const faqItems =
            section.querySelectorAll(
                ".contact-faq-item"
            );


        const bottom =
            section.querySelector(
                ".contact-faq-bottom"
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
                y: 20
            }
        );


        gsap.set(
            side,
            {
                opacity: 0,
                x: -45
            }
        );


        gsap.set(
            faqItems,
            {
                opacity: 0,
                x: 40
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
            gsap.timeline();


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
                side,
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.7,
                    ease: "power3.out"
                },
                "-=0.1"
            )


            .to(
                faqItems,
                {
                    opacity: 1,
                    x: 0,

                    duration: 0.5,

                    stagger: 0.1,

                    ease: "power3.out"
                },
                "-=0.45"
            )


            .to(
                bottom,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.45,
                    ease: "power3.out"
                },
                "-=0.2"
            );



        const icon =
            section.querySelector(
                ".contact-faq-side-icon"
            );


        if (icon) {

            gsap.to(
                icon,
                {
                    y: -5,

                    duration: 2,

                    repeat: -1,

                    yoyo: true,

                    ease: "sine.inOut"
                }
            );

        }

    }
);