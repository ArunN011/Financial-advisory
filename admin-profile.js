document.addEventListener("DOMContentLoaded", function () {

    const sidebar =
        document.getElementById("adminProfileSidebar");

    const menuToggle =
        document.getElementById("adminProfileMenuToggle");

    const overlay =
        document.getElementById("adminProfileOverlay");

    const logoutButton =
        document.getElementById("adminProfileLogout");


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

    let remember =
        localStorage.getItem(REMEMBER_KEY);


    if (!savedEmail) {
        savedEmail =
            localStorage.getItem("userEmail");
    }

    if (!savedRole) {
        savedRole =
            localStorage.getItem("userRole");
    }

    if (!remember) {
        remember =
            localStorage.getItem("rememberMe");
    }

    if (!savedRoleId) {
        savedRoleId =
            localStorage.getItem("roleId");
    }


    savedRole =
        savedRole || "admin";

    savedRoleId =
        savedRoleId ||
        (
            savedRole.toLowerCase() === "admin"
                ? "ADMIN-001"
                : "USER-001"
        );


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


    const adminRole =
        savedRole.toLowerCase() === "admin"
            ? "Admin"
            : "User";


    const accountRole =
        savedRole.toLowerCase() === "admin"
            ? "Administrator"
            : "Client User";


    const topbarAdminName =
        document.getElementById("topbarAdminName");

    const sidebarAdminName =
        document.getElementById("sidebarAdminName");

    const profileAdminName =
        document.getElementById("profileAdminName");

    const profileAdminEmail =
        document.getElementById("profileAdminEmail");

    const profileAdminRole =
        document.getElementById("profileAdminRole");

    const profileAdminRoleId =
        document.getElementById("profileAdminRoleId");

    const profileFullName =
        document.getElementById("profileFullName");

    const profileEmail =
        document.getElementById("profileEmail");

    const profileAccountRole =
        document.getElementById("profileAccountRole");

    const profileRoleId =
        document.getElementById("profileRoleId");

    const profileRememberStatus =
        document.getElementById("profileRememberStatus");


    if (topbarAdminName) {
        topbarAdminName.textContent =
            adminName;
    }


    if (sidebarAdminName) {
        sidebarAdminName.textContent =
            adminName;
    }


    if (profileAdminName) {
        profileAdminName.textContent =
            adminName;
    }


    if (profileAdminEmail) {
        profileAdminEmail.textContent =
            savedEmail ||
            "Email not available";
    }


    if (profileAdminRole) {
        profileAdminRole.textContent =
            adminRole;
    }


    if (profileAdminRoleId) {
        profileAdminRoleId.textContent =
            savedRoleId;
    }


    if (profileFullName) {
        profileFullName.textContent =
            adminName;
    }


    if (profileEmail) {
        profileEmail.textContent =
            savedEmail ||
            "Email not available";
    }


    if (profileAccountRole) {
        profileAccountRole.textContent =
            accountRole;
    }


    if (profileRoleId) {
        profileRoleId.textContent =
            savedRoleId;
    }


    if (profileRememberStatus) {
        profileRememberStatus.textContent =
            remember === "true"
                ? "Enabled"
                : "Disabled";
    }


    let menuOpen = false;

    let savedScrollY = 0;


    function lockScroll() {

        savedScrollY =
            window.scrollY ||
            window.pageYOffset ||
            0;


        document.documentElement.classList.add(
            "admin-profile-scroll-lock"
        );

        document.body.classList.add(
            "admin-profile-scroll-lock"
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
            "admin-profile-scroll-lock"
        );

        document.body.classList.remove(
            "admin-profile-scroll-lock"
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


        lockScroll();

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
        ".admin-profile-nav-link"
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


            menuToggle.setAttribute(
                "aria-expanded",
                "false"
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
                    "rememberMe"
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
            ".admin-profile-page-header"
        );

    const hero =
        document.querySelector(
            ".admin-profile-hero"
        );

    const panels =
        document.querySelectorAll(
            ".admin-profile-panel"
        );

    const security =
        document.querySelector(
            ".admin-profile-security"
        );

    const bottom =
        document.querySelector(
            ".admin-profile-bottom"
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


    if (security) {

        gsap.set(
            security,
            {
                opacity: 0,
                x: 30
            }
        );

    }


    if (bottom) {

        gsap.set(
            bottom,
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
                duration: 0.65,
                ease: "power3.out"
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
                stagger: 0.08,
                ease: "power3.out"
            },
            "-=0.25"
        );

    }


    if (security) {

        timeline.to(
            security,
            {
                opacity: 1,
                x: 0,
                duration: 0.6,
                ease: "power3.out"
            },
            "-=0.35"
        );

    }


    if (bottom) {

        timeline.to(
            bottom,
            {
                opacity: 1,
                y: 0,
                duration: 0.4,
                ease: "power3.out"
            },
            "-=0.15"
        );

    }


    const largeAvatar =
        document.querySelector(
            ".admin-profile-large-avatar"
        );


    if (largeAvatar) {

        gsap.to(
            largeAvatar,
            {
                y: -5,
                duration: 2.2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            }
        );

    }


    const securityIcon =
        document.querySelector(
            ".admin-profile-security-icon"
        );


    if (securityIcon) {

        gsap.to(
            securityIcon,
            {
                y: -4,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            }
        );

    }


    const infoItems =
        document.querySelectorAll(
            ".admin-profile-info-item"
        );


    infoItems.forEach(
        function (item) {

            const icon =
                item.querySelector(
                    ".admin-profile-info-icon"
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
                            duration: 0.25,
                            ease: "power2.out"
                        }
                    );

                }
            );

        }
    );


    const accessCards =
        document.querySelectorAll(
            ".admin-profile-access-card"
        );


    accessCards.forEach(
        function (card) {

            const icon =
                card.querySelector(
                    ".admin-profile-access-icon"
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
                            rotation: -5,
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

});