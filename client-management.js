document.addEventListener("DOMContentLoaded", function () {

    const sidebar =
        document.getElementById("clientSidebar");

    const menuToggle =
        document.getElementById("clientMenuToggle");

    const overlay =
        document.getElementById("clientOverlay");

    const logoutButton =
        document.getElementById("clientLogout");

    const searchInput =
        document.getElementById("clientSearch");

    const planFilter =
        document.getElementById("clientPlanFilter");

    const statusFilter =
        document.getElementById("clientStatusFilter");

    const clientRows =
        document.querySelectorAll("#clientTableBody tr");

    const noResults =
        document.getElementById("clientNoResults");


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


    savedRole =
        savedRole || "admin";

    savedRoleId =
        savedRoleId || "ADMIN-001";


    let adminName = "Admin";


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


    const clientDate =
        document.getElementById("clientDate");


    if (clientDate) {

        const today =
            new Date();


        clientDate.textContent =
            today.toLocaleDateString(
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
            "client-scroll-lock"
        );

        document.body.classList.add(
            "client-scroll-lock"
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
            "client-scroll-lock"
        );

        document.body.classList.remove(
            "client-scroll-lock"
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
        function () {

            closeMenu();

        }
    );


    document.querySelectorAll(
        ".client-nav-link"
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


    function filterClients() {

        const search =
            searchInput
                ? searchInput.value
                    .trim()
                    .toLowerCase()
                : "";


        const selectedPlan =
            planFilter
                ? planFilter.value
                : "all";


        const selectedStatus =
            statusFilter
                ? statusFilter.value
                : "all";


        let visibleCount = 0;


        clientRows.forEach(
            function (row) {

                const rowText =
                    row.textContent
                        .toLowerCase();


                const rowPlan =
                    row.dataset.plan;


                const rowStatus =
                    row.dataset.status;


                const matchesSearch =
                    !search ||
                    rowText.includes(search);


                const matchesPlan =
                    selectedPlan === "all" ||
                    rowPlan === selectedPlan;


                const matchesStatus =
                    selectedStatus === "all" ||
                    rowStatus === selectedStatus;


                const visible =
                    matchesSearch &&
                    matchesPlan &&
                    matchesStatus;


                if (visible) {

                    row.style.display =
                        "";

                    visibleCount++;

                } else {

                    row.style.display =
                        "none";

                }

            }
        );


        if (noResults) {

            noResults.style.display =
                visibleCount === 0
                    ? "block"
                    : "none";

        }

    }


    if (searchInput) {

        searchInput.addEventListener(
            "input",
            filterClients
        );

    }


    if (planFilter) {

        planFilter.addEventListener(
            "change",
            filterClients
        );

    }


    if (statusFilter) {

        statusFilter.addEventListener(
            "change",
            filterClients
        );

    }


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


    if (
        typeof gsap ===
        "undefined"
    ) {
        return;
    }


    const pageHeader =
        document.querySelector(
            ".client-page-header"
        );


    const statCards =
        document.querySelectorAll(
            ".client-stat-card"
        );


    const panels =
        document.querySelectorAll(
            ".client-main-panel, .client-panel"
        );


    const security =
        document.querySelector(
            ".client-security"
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
            "-=0.15"
        );

    }


    statCards.forEach(
        function (card, index) {

            const icon =
                card.querySelector(
                    ".client-stat-icon"
                );


            if (!icon) {
                return;
            }


            gsap.to(
                icon,
                {
                    y: -3,
                    duration: 2 + index * 0.12,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                }
            );

        }
    );


    const healthBars =
        document.querySelectorAll(
            ".client-health-bar span"
        );


    healthBars.forEach(
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
                    delay: 0.8 + index * 0.1,
                    ease: "power3.out"
                }
            );

        }
    );


    const tableRows =
        document.querySelectorAll(
            ".client-table tbody tr"
        );


    if (tableRows.length) {

        gsap.set(
            tableRows,
            {
                opacity: 0,
                y: 10
            }
        );


        gsap.to(
            tableRows,
            {
                opacity: 1,
                y: 0,
                duration: 0.35,
                stagger: 0.06,
                delay: 0.8,
                ease: "power2.out"
            }
        );

    }


    const initials =
        document.querySelectorAll(
            ".client-initials"
        );


    initials.forEach(
        function (item) {

            item.addEventListener(
                "mouseenter",
                function () {

                    gsap.to(
                        item,
                        {
                            scale: 1.08,
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
                        item,
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


});