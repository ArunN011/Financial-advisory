

document.addEventListener(
    "DOMContentLoaded",
    function () {


   

        const sidebar =
            document.getElementById(
                "financialSidebar"
            );


        const menuToggle =
            document.getElementById(
                "financialMenuToggle"
            );


        const overlay =
            document.getElementById(
                "financialOverlay"
            );


        const logoutButton =
            document.getElementById(
                "financialLogout"
            );



        if (
            !sidebar ||
            !menuToggle ||
            !overlay
        ) {

            console.error(
                "Financial dashboard navigation elements were not found."
            );

            return;

        }


   

        const savedEmail =
            localStorage.getItem(
                "finance_advisory_email"
            );


        const savedRole =
            localStorage.getItem(
                "finance_advisory_role"
            );


        const savedRoleId =
            localStorage.getItem(
                "finance_advisory_role_id"
            );


       

        let displayName = "Client";


        if (savedEmail) {

            const emailName =
                savedEmail
                    .split("@")[0]
                    .replace(/[._-]+/g, " ")
                    .trim();


            if (emailName) {

                displayName =
                    emailName
                        .split(" ")
                        .map(
                            function (word) {

                                return (
                                    word
                                        .charAt(0)
                                        .toUpperCase() +
                                    word.slice(1)
                                );

                            }
                        )
                        .join(" ");

            }

        }


        const topbarUserName =
            document.getElementById(
                "topbarUserName"
            );


        const sidebarUserName =
            document.getElementById(
                "sidebarUserName"
            );


        const sidebarUserEmail =
            document.getElementById(
                "sidebarUserEmail"
            );


        if (topbarUserName) {

            topbarUserName.textContent =
                displayName;

        }


        if (sidebarUserName) {

            sidebarUserName.textContent =
                displayName;

        }


        if (sidebarUserEmail) {

            sidebarUserEmail.textContent =
                savedEmail ||
                "Financial Client";

        }



        let menuOpen = false;

        let savedScrollY = 0;



        function lockPageScroll() {

            savedScrollY =
                window.scrollY ||
                window.pageYOffset ||
                0;


            document.documentElement.classList.add(
                "financial-scroll-lock"
            );


            document.body.classList.add(
                "financial-scroll-lock"
            );



            document.body.style.position =
                "fixed";


            document.body.style.top =
                `-${savedScrollY}px`;


            document.body.style.left =
                "0";


            document.body.style.right =
                "0";


            document.body.style.width =
                "100%";


            document.body.style.overflow =
                "hidden";

        }



        function unlockPageScroll() {

            document.documentElement.classList.remove(
                "financial-scroll-lock"
            );


            document.body.classList.remove(
                "financial-scroll-lock"
            );


            document.body.style.position =
                "";


            document.body.style.top =
                "";


            document.body.style.left =
                "";


            document.body.style.right =
                "";


            document.body.style.width =
                "";


            document.body.style.overflow =
                "";



            window.scrollTo(
                0,
                savedScrollY
            );

        }


        function openMenu() {

            if (menuOpen) {
                return;
            }


            menuOpen = true;


            sidebar.classList.add(
                "menu-open"
            );


            menuToggle.classList.add(
                "active"
            );


            menuToggle.setAttribute(
                "aria-expanded",
                "true"
            );


            menuToggle.setAttribute(
                "aria-label",
                "Close dashboard menu"
            );


            overlay.classList.add(
                "active"
            );


            lockPageScroll();

        }



        function closeMenu() {

            if (!menuOpen) {


                unlockPageScroll();

                sidebar.classList.remove(
                    "menu-open"
                );

                overlay.classList.remove(
                    "active"
                );

                menuToggle.classList.remove(
                    "active"
                );

                return;

            }


            menuOpen = false;


            sidebar.classList.remove(
                "menu-open"
            );


            menuToggle.classList.remove(
                "active"
            );


            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );


            menuToggle.setAttribute(
                "aria-label",
                "Open dashboard menu"
            );


            overlay.classList.remove(
                "active"
            );


            unlockPageScroll();

        }


        menuToggle.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                event.stopPropagation();


                if (menuOpen) {

                    closeMenu();

                } else {

                    openMenu();

                }

            }
        );



        overlay.addEventListener(
            "click",
            function () {

                closeMenu();

            }
        );



        const navLinks =
            document.querySelectorAll(
                ".financial-nav-link"
            );


        navLinks.forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        closeMenu();

                    }
                );

            }
        );



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
                    window.innerWidth > 767 &&
                    menuOpen
                ) {

                    closeMenu();

                }

            }
        );



        window.addEventListener(
            "pageshow",
            function () {

               

                menuOpen = false;


                sidebar.classList.remove(
                    "menu-open"
                );


                menuToggle.classList.remove(
                    "active"
                );


                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );


                menuToggle.setAttribute(
                    "aria-label",
                    "Open dashboard menu"
                );


                overlay.classList.remove(
                    "active"
                );


                unlockPageScroll();

            }
        );


        if (logoutButton) {

            logoutButton.addEventListener(
                "click",
                function () {

                    localStorage.removeItem(
                        "finance_advisory_role"
                    );


                    localStorage.removeItem(
                        "finance_advisory_role_id"
                    );


                    localStorage.removeItem(
                        "finance_advisory_email"
                    );


                    localStorage.removeItem(
                        "finance_advisory_remember"
                    );


                    closeMenu();


                    window.location.href =
                        "login.html";

                }
            );

        }



        function preventBackgroundScroll(
            event
        ) {

            if (!menuOpen) {
                return;
            }


          

            if (
                sidebar.contains(
                    event.target
                )
            ) {

                return;

            }


            event.preventDefault();

        }


        document.addEventListener(
            "touchmove",
            preventBackgroundScroll,
            {
                passive: false
            }
        );


        document.addEventListener(
            "wheel",
            preventBackgroundScroll,
            {
                passive: false
            }
        );



        if (
            typeof gsap ===
            "undefined"
        ) {

            return;

        }


    

        const pageHeader =
            document.querySelector(
                ".financial-page-header"
            );


        const scoreCard =
            document.querySelector(
                ".financial-score-card"
            );


        const summaryCards =
            document.querySelectorAll(
                ".financial-summary-card"
            );


        const panels =
            document.querySelectorAll(
                ".financial-panel"
            );


        const security =
            document.querySelector(
                ".financial-security"
            );


        if (pageHeader) {

            gsap.set(
                pageHeader,
                {
                    opacity: 0,
                    y: 25
                }
            );

        }


        if (scoreCard) {

            gsap.set(
                scoreCard,
                {
                    opacity: 0,
                    x: -40
                }
            );

        }


        if (summaryCards.length) {

            gsap.set(
                summaryCards,
                {
                    opacity: 0,
                    y: 30
                }
            );

        }


        if (panels.length) {

            gsap.set(
                panels,
                {
                    opacity: 0,
                    y: 30
                }
            );

        }


        if (security) {

            gsap.set(
                security,
                {
                    opacity: 0,
                    y: 20
                }
            );

        }


        const timeline =
            gsap.timeline();


        if (pageHeader) {

            timeline.to(
                pageHeader,
                {
                    opacity: 1,

                    y: 0,

                    duration: 0.55,

                    ease:
                        "power3.out"
                }
            );

        }


        if (scoreCard) {

            timeline.to(
                scoreCard,
                {
                    opacity: 1,

                    x: 0,

                    duration: 0.65,

                    ease:
                        "power3.out"
                },
                "-=0.25"
            );

        }


        if (summaryCards.length) {

            timeline.to(
                summaryCards,
                {
                    opacity: 1,

                    y: 0,

                    duration: 0.5,

                    stagger: 0.08,

                    ease:
                        "power3.out"
                },
                "-=0.4"
            );

        }


        if (panels.length) {

            timeline.to(
                panels,
                {
                    opacity: 1,

                    y: 0,

                    duration: 0.5,

                    stagger: 0.08,

                    ease:
                        "power3.out"
                },
                "-=0.25"
            );

        }


        if (security) {

            timeline.to(
                security,
                {
                    opacity: 1,

                    y: 0,

                    duration: 0.4,

                    ease:
                        "power3.out"
                },
                "-=0.15"
            );

        }

        const scoreProgress =
            document.querySelector(
                ".score-progress span"
            );


        if (scoreProgress) {

            const target =
                scoreProgress.dataset.width;


            gsap.set(
                scoreProgress,
                {
                    width: 0
                }
            );


            gsap.to(
                scoreProgress,
                {
                    width: target,

                    duration: 1.2,

                    delay: 0.8,

                    ease:
                        "power3.out"
                }
            );

        }



        const miniProgress =
            document.querySelector(
                ".mini-progress span"
            );


        if (miniProgress) {

            const target =
                miniProgress.dataset.width;


            gsap.set(
                miniProgress,
                {
                    width: 0
                }
            );


            gsap.to(
                miniProgress,
                {
                    width: target,

                    duration: 1,

                    delay: 0.9,

                    ease:
                        "power3.out"
                }
            );

        }



        const goalBars =
            document.querySelectorAll(
                ".goal-bar span"
            );


        goalBars.forEach(
            function (bar, index) {

                const target =
                    bar.dataset.width;


                gsap.set(
                    bar,
                    {
                        width: 0
                    }
                );


                gsap.to(
                    bar,
                    {
                        width: target,

                        duration: 1,

                        delay:
                            0.8 +
                            index * 0.08,

                        ease:
                            "power3.out"
                    }
                );

            }
        );



        const scoreIcon =
            document.querySelector(
                ".score-icon"
            );


        if (scoreIcon) {

            gsap.to(
                scoreIcon,
                {
                    y: -4,

                    duration: 2,

                    repeat: -1,

                    yoyo: true,

                    ease:
                        "sine.inOut"
                }
            );

        }

        const summaryIcons =
            document.querySelectorAll(
                ".summary-card-icon"
            );


        summaryIcons.forEach(
            function (icon, index) {

                gsap.to(
                    icon,
                    {
                        y: -3,

                        duration:
                            2 +
                            index * 0.15,

                        repeat: -1,

                        yoyo: true,

                        ease:
                            "sine.inOut"
                    }
                );

            }
        );



        summaryCards.forEach(
            function (card) {

                const icon =
                    card.querySelector(
                        ".summary-card-icon"
                    );


                if (!icon) {
                    return;
                }


                card.addEventListener(
                    "mouseenter",
                    function () {

                        gsap.to(
                            icon,
                            {
                                scale: 1.08,

                                rotation: -7,

                                duration: 0.25,

                                ease:
                                    "power2.out"
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

                                duration: 0.25,

                                ease:
                                    "power2.out"
                            }
                        );

                    }
                );

            }
        );


        const donut =
            document.querySelector(
                ".allocation-donut"
            );


        if (donut) {

            gsap.from(
                donut,
                {
                    rotation: -90,

                    opacity: 0,

                    scale: 0.8,

                    duration: 0.9,

                    delay: 0.5,

                    ease:
                        "power3.out"
                }
            );

        }

        const advisorIcon =
            document.querySelector(
                ".advisor-quote-icon"
            );


        if (advisorIcon) {

            gsap.to(
                advisorIcon,
                {
                    y: -5,

                    duration: 2.1,

                    repeat: -1,

                    yoyo: true,

                    ease:
                        "sine.inOut"
                }
            );

        }

    }
);