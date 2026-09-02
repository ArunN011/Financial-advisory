

document.addEventListener(
    "DOMContentLoaded",
    function () {



        const sidebar =
            document.getElementById(
                "profileSidebar"
            );

        const menuToggle =
            document.getElementById(
                "profileMenuToggle"
            );

        const overlay =
            document.getElementById(
                "profileOverlay"
            );

        const logoutButton =
            document.getElementById(
                "profileLogout"
            );


        if (
            !sidebar ||
            !menuToggle ||
            !overlay
        ) {

            console.error(
                "Profile navigation elements not found."
            );

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
            localStorage.getItem(
                EMAIL_KEY
            );

        let savedRole =
            localStorage.getItem(
                ROLE_KEY
            );

        let savedRoleId =
            localStorage.getItem(
                ROLE_ID_KEY
            );

        let remember =
            localStorage.getItem(
                REMEMBER_KEY
            );


        

        if (!savedEmail) {

            savedEmail =
                localStorage.getItem(
                    "userEmail"
                );

        }


        if (!savedRole) {

            savedRole =
                localStorage.getItem(
                    "userRole"
                );

        }


        if (!remember) {

            remember =
                localStorage.getItem(
                    "finance_advisory_remember"
                );

        }


        savedRole =
            savedRole || "user";


        savedRoleId =
            savedRoleId ||
            (
                savedRole.toLowerCase() ===
                "admin"
                    ? "ADMIN-001"
                    : "USER-001"
            );



        let displayName =
            "Client";


        if (savedEmail) {

            const emailName =
                savedEmail
                    .split("@")[0]
                    .replace(
                        /[._-]+/g,
                        " "
                    )
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



        const isAdmin =
            savedRole.toLowerCase() ===
            "admin";


        const roleText =
            isAdmin
                ? "Admin Account"
                : "User Account";


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

        const profileDisplayName =
            document.getElementById(
                "profileDisplayName"
            );

        const profileDisplayEmail =
            document.getElementById(
                "profileDisplayEmail"
            );

        const profileFullName =
            document.getElementById(
                "profileFullName"
            );

        const profileEmail =
            document.getElementById(
                "profileEmail"
            );

        const profileRoleText =
            document.getElementById(
                "profileRoleText"
            );

        const profileRoleId =
            document.getElementById(
                "profileRoleId"
            );

        const profileInformationRoleId =
            document.getElementById(
                "profileInformationRoleId"
            );

        const profileAccountType =
            document.getElementById(
                "profileAccountType"
            );

        const profileRememberStatus =
            document.getElementById(
                "profileRememberStatus"
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


        if (profileDisplayName) {

            profileDisplayName.textContent =
                displayName;

        }


        if (profileDisplayEmail) {

            profileDisplayEmail.textContent =
                savedEmail ||
                "Email not available";

        }


        if (profileFullName) {

            profileFullName.textContent =
                displayName;

        }


        if (profileEmail) {

            profileEmail.textContent =
                savedEmail ||
                "Email not available";

        }


        if (profileRoleText) {

            profileRoleText.textContent =
                roleText;

        }


        if (profileRoleId) {

            profileRoleId.textContent =
                savedRoleId;

        }


        if (profileInformationRoleId) {

            profileInformationRoleId.textContent =
                savedRoleId;

        }


        if (profileAccountType) {

            profileAccountType.textContent =
                roleText;

        }


        if (profileRememberStatus) {

            profileRememberStatus.textContent =
                remember === "true"
                    ? "Enabled"
                    : "Disabled";

        }


        let menuOpen = false;

        let savedScrollY = 0;


        

        function lockPageScroll() {

            savedScrollY =
                window.scrollY ||
                window.pageYOffset ||
                0;


            document.documentElement.classList.add(
                "profile-scroll-lock"
            );

            document.body.classList.add(
                "profile-scroll-lock"
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
                "profile-scroll-lock"
            );

            document.body.classList.remove(
                "profile-scroll-lock"
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
                ".profile-nav-link"
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
                        "isLoggedIn"
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
            typeof gsap === "undefined"
        ) {

            return;

        }


     

        const pageHeader =
            document.querySelector(
                ".profile-page-header"
            );

        const hero =
            document.querySelector(
                ".profile-hero-card"
            );

        const panels =
            document.querySelectorAll(
                ".profile-panel"
            );

        const securityPanel =
            document.querySelector(
                ".profile-security-panel"
            );

        const bottomStrip =
            document.querySelector(
                ".profile-bottom-strip"
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


        if (securityPanel) {

            gsap.set(
                securityPanel,
                {
                    opacity: 0,
                    x: 35
                }
            );

        }


        if (bottomStrip) {

            gsap.set(
                bottomStrip,
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

                    duration: 0.65,

                    ease:
                        "power3.out"
                },
                "-=0.2"
            );

        }


        if (panels.length) {

            timeline.to(
                panels,
                {
                    opacity: 1,

                    y: 0,

                    duration: 0.5,

                    stagger: 0.09,

                    ease:
                        "power3.out"
                },
                "-=0.25"
            );

        }


        if (securityPanel) {

            timeline.to(
                securityPanel,
                {
                    opacity: 1,

                    x: 0,

                    duration: 0.6,

                    ease:
                        "power3.out"
                },
                "-=0.4"
            );

        }


        if (bottomStrip) {

            timeline.to(
                bottomStrip,
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



        const avatar =
            document.querySelector(
                ".profile-large-avatar"
            );


        if (avatar) {

            gsap.to(
                avatar,
                {
                    y: -5,

                    duration: 2.2,

                    repeat: -1,

                    yoyo: true,

                    ease:
                        "sine.inOut"
                }
            );

        }


        

        const securityIcon =
            document.querySelector(
                ".profile-security-icon"
            );


        if (securityIcon) {

            gsap.to(
                securityIcon,
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



        const informationItems =
            document.querySelectorAll(
                ".profile-information-item"
            );


        informationItems.forEach(
            function (item) {

                const icon =
                    item.querySelector(
                        ".profile-information-icon"
                    );


                if (!icon) {
                    return;
                }


                item.addEventListener(
                    "mouseenter",
                    function () {

                        gsap.to(
                            icon,
                            {
                                scale: 1.08,

                                rotation: -5,

                                duration: 0.25,

                                ease:
                                    "power2.out"
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

                                duration: 0.25,

                                ease:
                                    "power2.out"
                            }
                        );

                    }
                );

            }
        );


    }
);