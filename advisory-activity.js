document.addEventListener("DOMContentLoaded", function () {

    const sidebar =
        document.getElementById("activitySidebar");

    const menuToggle =
        document.getElementById("activityMenuToggle");

    const overlay =
        document.getElementById("activityOverlay");

    const logoutButton =
        document.getElementById("activityLogout");


    if (!sidebar || !menuToggle || !overlay) {
        return;
    }


    const EMAIL_KEY =
        "finance_advisory_email";

    const ROLE_KEY =
        "finance_advisory_role";

    const ROLE_ID_KEY =
        "finance_advisory_role_id";

    const REMEMBER_KEY =
        "finance_advisory_remember";


    let savedEmail =
        localStorage.getItem(EMAIL_KEY);

    let savedRole =
        localStorage.getItem(ROLE_KEY);

    let savedRoleId =
        localStorage.getItem(ROLE_ID_KEY);


    if (!savedEmail) {
        savedEmail =
            localStorage.getItem("userEmail");
    }


    if (!savedRole) {
        savedRole =
            localStorage.getItem("userRole");
    }


    if (!savedRoleId) {
        savedRoleId =
            localStorage.getItem("roleId");
    }


    savedRole =
        savedRole || "admin";


    savedRoleId =
        savedRoleId || "ADMIN-001";


    let adminName =
        "Admin";


    if (savedEmail) {

        const emailName =
            savedEmail
                .split("@")[0]
                .replace(/[._-]+/g, " ")
                .trim();


        if (emailName) {

            adminName =
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


    const topbarAdminName =
        document.getElementById("topbarAdminName");

    const sidebarAdminName =
        document.getElementById("sidebarAdminName");


    if (topbarAdminName) {
        topbarAdminName.textContent =
            adminName;
    }


    if (sidebarAdminName) {
        sidebarAdminName.textContent =
            adminName;
    }


    const activityDate =
        document.getElementById("activityDate");


    if (activityDate) {

        activityDate.textContent =
            new Date().toLocaleDateString(
                "en-IN",
                {
                    month: "long",
                    day: "2-digit",
                    year: "numeric"
                }
            );

    }


    let menuOpen = false;

    let savedScrollY = 0;


    function lockScroll() {

        savedScrollY =
            window.scrollY ||
            window.pageYOffset ||
            0;


        document.documentElement.classList.add(
            "activity-scroll-lock"
        );


        document.body.classList.add(
            "activity-scroll-lock"
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


    function unlockScroll() {

        document.documentElement.classList.remove(
            "activity-scroll-lock"
        );


        document.body.classList.remove(
            "activity-scroll-lock"
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


        lockScroll();


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

    }


    function closeMenu() {

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


        unlockScroll();

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
        closeMenu
    );


    document.querySelectorAll(
        ".activity-nav-link"
    ).forEach(
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

            overlay.classList.remove(
                "active"
            );

            unlockScroll();

        }
    );


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


    if (logoutButton) {

        logoutButton.addEventListener(
            "click",
            function () {

                localStorage.removeItem(
                    EMAIL_KEY
                );

                localStorage.removeItem(
                    ROLE_KEY
                );

                localStorage.removeItem(
                    ROLE_ID_KEY
                );

                localStorage.removeItem(
                    REMEMBER_KEY
                );

                localStorage.removeItem(
                    "userEmail"
                );

                localStorage.removeItem(
                    "userRole"
                );

                localStorage.removeItem(
                    "roleId"
                );

                localStorage.removeItem(
                    "isLoggedIn"
                );


                closeMenu();


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
            ".activity-page-header"
        );

    const hero =
        document.querySelector(
            ".activity-hero"
        );

    const statCards =
        document.querySelectorAll(
            ".activity-stat-card"
        );

    const panels =
        document.querySelectorAll(
            ".activity-panel"
        );

    const security =
        document.querySelector(
            ".activity-security"
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
                y: 25
            }
        );

    }


    if (panels.length) {

        gsap.set(
            panels,
            {
                opacity: 0,
                y: 25
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
                ease: "power3.out"
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
                ease: "power3.out"
            },
            "-=0.2"
        );

    }


    if (statCards.length) {

        timeline.to(
            statCards,
            {
                opacity: 1,
                y: 0,
                duration: 0.45,
                stagger: 0.07,
                ease: "power3.out"
            },
            "-=0.3"
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
                ease: "power3.out"
            },
            "-=0.2"
        );

    }


    if (security) {

        timeline.to(
            security,
            {
                opacity: 1,
                y: 0,
                duration: 0.4,
                ease: "power3.out"
            },
            "-=0.1"
        );

    }


    const heroIcon =
        document.querySelector(
            ".activity-hero-icon"
        );


    if (heroIcon) {

        gsap.to(
            heroIcon,
            {
                y: -6,
                duration: 2.2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            }
        );

    }


    const orbitTwo =
        document.querySelector(
            ".orbit-two"
        );


    if (orbitTwo) {

        gsap.to(
            orbitTwo,
            {
                rotation: 360,
                duration: 18,
                repeat: -1,
                ease: "none"
            }
        );

    }


    statCards.forEach(
        function (card, index) {

            const icon =
                card.querySelector(
                    ".activity-stat-icon"
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
                    ease: "sine.inOut"
                }
            );


            card.addEventListener(
                "mouseenter",
                function () {

                    gsap.to(
                        icon,
                        {
                            scale: 1.08,
                            rotation: -7,
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
                        icon,
                        {
                            scale: 1,
                            rotation: 0,
                            duration: 0.25,
                            ease: "power2.out"
                        }
                    );

                }
            );

        }
    );


    const chartLine =
        document.querySelector(
            ".activity-chart-line"
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
                    ease: "power3.out"
                }
            );

        } catch (error) {

            console.warn(
                "Activity chart animation failed.",
                error
            );

        }

    }


    const performanceRing =
        document.querySelector(
            ".performance-ring"
        );


    if (performanceRing) {

        gsap.from(
            performanceRing,
            {
                rotation: -90,
                scale: 0.8,
                opacity: 0,
                duration: 0.8,
                delay: 0.7,
                ease: "power3.out"
            }
        );

    }


    const activityIcons =
        document.querySelectorAll(
            ".activity-list-icon"
        );


    activityIcons.forEach(
        function (icon, index) {

            gsap.to(
                icon,
                {
                    y: -2,
                    duration:
                        2 +
                        index * 0.08,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                }
            );

        }
    );


    const taskIcons =
        document.querySelectorAll(
            ".task-icon"
        );


    taskIcons.forEach(
        function (icon, index) {

            gsap.to(
                icon,
                {
                    y: -2,
                    duration:
                        2.1 +
                        index * 0.1,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                }
            );

        }
    );


});