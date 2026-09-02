

document.addEventListener("DOMContentLoaded", function () {


    const sidebar =
        document.getElementById("dashboardSidebar");

    const menuToggle =
        document.getElementById("dashboardMenuToggle");

    const overlay =
        document.getElementById("dashboardOverlay");

    const logoutButton =
        document.getElementById("dashboardLogout");



    if (!sidebar || !menuToggle || !overlay) {
        console.error("Dashboard menu elements not found.");
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
                    .map(function (word) {

                        return (
                            word.charAt(0).toUpperCase() +
                            word.slice(1)
                        );

                    })
                    .join(" ");

        }

    }


    const dashboardWelcomeName =
        document.getElementById(
            "dashboardWelcomeName"
        );

    const topbarUserName =
        document.getElementById(
            "topbarUserName"
        );

    const sidebarUserName =
        document.getElementById(
            "sidebarUserName"
        );


    if (dashboardWelcomeName) {
        dashboardWelcomeName.textContent =
            displayName;
    }


    if (topbarUserName) {
        topbarUserName.textContent =
            displayName;
    }


    if (sidebarUserName) {
        sidebarUserName.textContent =
            displayName;
    }



    const dateElement =
        document.getElementById(
            "dashboardDate"
        );


    if (dateElement) {

        const today = new Date();

        dateElement.textContent =
            today.toLocaleDateString(
                "en-IN",
                {
                    month: "long",
                    day: "2-digit",
                    year: "numeric"
                }
            );

    }



    if (savedRole === "admin") {


    }


    let menuOpen = false;

    let savedScrollY = 0;



    function lockPageScroll() {

        savedScrollY =
            window.scrollY ||
            window.pageYOffset ||
            0;


      

        document.documentElement.style
            .setProperty(
                "--dashboard-scroll-y",
                `-${savedScrollY}px`
            );



        document.documentElement.classList.add(
            "dashboard-scroll-lock"
        );

        document.body.classList.add(
            "dashboard-scroll-lock"
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
            "dashboard-scroll-lock"
        );

        document.body.classList.remove(
            "dashboard-scroll-lock"
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

        document.documentElement.style
            .removeProperty(
                "--dashboard-scroll-y"
            );

    }


    function openDashboardMenu() {

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



        document.body.classList.add(
            "dashboard-menu-open"
        );

    }


    

    function closeDashboardMenu() {

        if (!menuOpen) {

          

            unlockPageScroll();

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


        

        document.body.classList.remove(
            "dashboard-menu-open"
        );

    }


    menuToggle.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            event.stopPropagation();


            if (menuOpen) {

                closeDashboardMenu();

            } else {

                openDashboardMenu();

            }

        }
    );


    overlay.addEventListener(
        "click",
        function () {

            closeDashboardMenu();

        }
    );


    const sidebarLinks =
        document.querySelectorAll(
            ".dashboard-nav-link"
        );


    sidebarLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                  
                    closeDashboardMenu();

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

                closeDashboardMenu();

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

                closeDashboardMenu();

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


                closeDashboardMenu();


                window.location.href =
                    "login.html";

            }
        );

    }


    if (
        typeof gsap ===
        "undefined"
    ) {

        return;

    }


    const pageHeader =
        document.querySelector(
            ".dashboard-page-header"
        );

    const hero =
        document.querySelector(
            ".dashboard-hero-card"
        );

    const statCards =
        document.querySelectorAll(
            ".dashboard-stat-card"
        );

    const panels =
        document.querySelectorAll(
            ".dashboard-panel"
        );

    const security =
        document.querySelector(
            ".dashboard-security"
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


    if (hero) {

        gsap.set(
            hero,
            {
                opacity: 0,
                y: 35
            }
        );

    }


    if (statCards.length) {

        gsap.set(
            statCards,
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


    if (hero) {

        timeline.to(
            hero,
            {
                opacity: 1,
                y: 0,

                duration: 0.7,

                ease:
                    "power3.out"
            },
            "-=0.25"
        );

    }


    if (statCards.length) {

        timeline.to(
            statCards,
            {
                opacity: 1,
                y: 0,

                duration: 0.5,

                stagger: 0.08,

                ease:
                    "power3.out"
            },
            "-=0.35"
        );

    }


    if (panels.length) {

        timeline.to(
            panels,
            {
                opacity: 1,
                y: 0,

                duration: 0.55,

                stagger: 0.1,

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

                duration: 0.45,

                ease:
                    "power3.out"
            },
            "-=0.2"
        );

    }



    const heroIcon =
        document.querySelector(
            ".hero-center-icon"
        );


    if (heroIcon) {

        gsap.to(
            heroIcon,
            {
                y: -6,

                duration: 2.2,

                repeat: -1,

                yoyo: true,

                ease:
                    "sine.inOut"
            }
        );

    }



    statCards.forEach(
        function (card, index) {

            const icon =
                card.querySelector(
                    ".stat-icon"
                );


            if (!icon) {
                return;
            }


            gsap.to(
                icon,
                {
                    y: -3,

                    duration:
                        2 +
                        index * 0.1,

                    repeat: -1,

                    yoyo: true,

                    ease:
                        "sine.inOut"
                }
            );

        }
    );


    statCards.forEach(
        function (card) {

            const icon =
                card.querySelector(
                    ".stat-icon"
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


    

    const chartLine =
        document.querySelector(
            ".chart-line"
        );


    if (chartLine) {

        try {

            const length =
                chartLine.getTotalLength();


            chartLine.style.strokeDasharray =
                length;


            chartLine.style.strokeDashoffset =
                length;


            gsap.to(
                chartLine,
                {
                    strokeDashoffset: 0,

                    duration: 1.8,

                    delay: 0.7,

                    ease:
                        "power3.out"
                }
            );

        } catch (error) {

            console.warn(
                "Chart animation could not start.",
                error
            );

        }

    }



    const progressBars =
        document.querySelectorAll(
            ".goal-progress span"
        );


    progressBars.forEach(
        function (bar) {

            const targetWidth =
                bar.style.width;


            if (!targetWidth) {
                return;
            }


            gsap.set(
                bar,
                {
                    width: 0
                }
            );


            gsap.to(
                bar,
                {
                    width: targetWidth,

                    duration: 1,

                    delay: 0.8,

                    ease:
                        "power3.out"
                }
            );

        }
    );



    const statProgress =
        document.querySelector(
            ".stat-progress span"
        );


    if (statProgress) {

        const target =
            statProgress.style.width;


        if (target) {

            gsap.set(
                statProgress,
                {
                    width: 0
                }
            );


            gsap.to(
                statProgress,
                {
                    width: target,

                    duration: 1,

                    delay: 0.9,

                    ease:
                        "power3.out"
                }
            );

        }

    }



    function preventBackgroundScroll(event) {

     

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



    let touchStartY = 0;


    document.addEventListener(
        "touchstart",
        function (event) {

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


            if (
                event.touches &&
                event.touches.length
            ) {

                touchStartY =
                    event.touches[0].clientY;

            }

        },
        {
            passive: true
        }
    );


    document.addEventListener(
        "touchmove",
        function (event) {

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

        },
        {
            passive: false
        }
    );


});