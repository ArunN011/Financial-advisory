

document.addEventListener(
    "DOMContentLoaded",
    function () {



        const sidebar =
            document.getElementById(
                "adminSidebar"
            );


        const menuToggle =
            document.getElementById(
                "adminMenuToggle"
            );


        const overlay =
            document.getElementById(
                "adminOverlay"
            );


        const logoutButton =
            document.getElementById(
                "adminLogout"
            );


        const clientSearch =
            document.getElementById(
                "adminClientSearch"
            );


        const clientStatus =
            document.getElementById(
                "adminClientStatus"
            );


        const clientRows =
            document.querySelectorAll(
                "#adminClientTableBody tr"
            );


        const noResults =
            document.getElementById(
                "adminNoResults"
            );


        if (
            !sidebar ||
            !menuToggle ||
            !overlay
        ) {

            console.error(
                "Admin dashboard navigation elements not found."
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



        let adminEmail =
            savedEmail ||
            localStorage.getItem(
                "userEmail"
            );


        let adminRole =
            savedRole ||
            localStorage.getItem(
                "userRole"
            );


        let adminRoleId =
            savedRoleId;


        adminRole =
            adminRole || "admin";


        adminRoleId =
            adminRoleId ||
            "ADMIN-001";



        let adminName = "Admin";


        if (adminEmail) {

            const emailName =
                adminEmail
                    .split("@")[0]
                    .replace(
                        /[._-]+/g,
                        " "
                    )
                    .trim();


            if (emailName) {

                adminName =
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



        const topbarAdminName =
            document.getElementById(
                "topbarAdminName"
            );


        const sidebarAdminName =
            document.getElementById(
                "sidebarAdminName"
            );


        const adminWelcomeName =
            document.getElementById(
                "adminWelcomeName"
            );


        if (topbarAdminName) {

            topbarAdminName.textContent =
                adminName;

        }


        if (sidebarAdminName) {

            sidebarAdminName.textContent =
                adminName;

        }


        if (adminWelcomeName) {

            adminWelcomeName.textContent =
                adminName;

        }


        const adminDate =
            document.getElementById(
                "adminDate"
            );


        if (adminDate) {

            const today =
                new Date();


            adminDate.textContent =
                today.toLocaleDateString(
                    "en-IN",
                    {
                        month: "long",
                        day: "2-digit",
                        year: "numeric"
                    }
                );

        }
       const EMAIL_KEY = "finance_advisory_email";

const savedEmail1 =
    localStorage.getItem(EMAIL_KEY);

const adminWelcomeName1 =
    document.getElementById("adminWelcomeName");

if (adminWelcomeName1) {
    adminWelcomeName1.textContent =
        savedEmail || "Admin";
}



        let menuOpen = false;

        let savedScrollY = 0;


        
        function lockPageScroll() {

            savedScrollY =
                window.scrollY ||
                window.pageYOffset ||
                0;


            document.documentElement.classList.add(
                "admin-scroll-lock"
            );


            document.body.classList.add(
                "admin-scroll-lock"
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
                "admin-scroll-lock"
            );


            document.body.classList.remove(
                "admin-scroll-lock"
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
                ".admin-nav-link"
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



        function filterClients() {

            const search =
                clientSearch
                    ? clientSearch.value
                        .trim()
                        .toLowerCase()
                    : "";


            const status =
                clientStatus
                    ? clientStatus.value
                    : "all";


            let visibleCount = 0;


            clientRows.forEach(
                function (row) {

                    const text =
                        row.textContent
                            .toLowerCase();


                    const rowStatus =
                        row.dataset.status;


                    const matchesSearch =
                        !search ||
                        text.includes(
                            search
                        );


                    const matchesStatus =
                        status === "all" ||
                        rowStatus ===
                        status;


                    if (
                        matchesSearch &&
                        matchesStatus
                    ) {

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


        if (clientSearch) {

            clientSearch.addEventListener(
                "input",
                filterClients
            );

        }


        if (clientStatus) {

            clientStatus.addEventListener(
                "change",
                filterClients
            );

        }



        if (logoutButton) {

            logoutButton.addEventListener(
                "click",
                function () {

                    localStorage.removeItem(
                        "finance_advisory_email"
                    );


                    localStorage.removeItem(
                        "finance_advisory_role"
                    );


                    localStorage.removeItem(
                        "finance_advisory_role_id"
                    );


                    localStorage.removeItem(
                        "finance_advisory_remember"
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
                ".admin-page-header"
            );


        const hero =
            document.querySelector(
                ".admin-hero"
            );


        const statCards =
            document.querySelectorAll(
                ".admin-stat-card"
            );


        const panels =
            document.querySelectorAll(
                ".admin-panel"
            );


        const security =
            document.querySelector(
                ".admin-security-strip"
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


        const heroIcon =
            document.querySelector(
                ".admin-hero-center"
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


      

        const ringTwo =
            document.querySelector(
                ".admin-ring-two"
            );


        if (ringTwo) {

            gsap.to(
                ringTwo,
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
                        ".admin-stat-icon"
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
                        ".admin-stat-icon"
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
                ".admin-chart-line"
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
                    "Admin chart animation failed.",
                    error
                );

            }

        }


        const scoreRing =
            document.querySelector(
                ".admin-score-ring"
            );


        if (scoreRing) {

            gsap.from(
                scoreRing,
                {
                    rotation: -90,

                    scale: 0.8,

                    opacity: 0,

                    duration: 0.8,

                    delay: 0.7,

                    ease:
                        "power3.out"
                }
            );

        }



        const tableRows =
            document.querySelectorAll(
                ".admin-client-table tbody tr"
            );


        if (tableRows.length) {

            gsap.set(
                tableRows,
                {
                    opacity: 0,
                    y: 12
                }
            );


            gsap.to(
                tableRows,
                {
                    opacity: 1,
                    y: 0,

                    duration: 0.35,

                    stagger: 0.07,

                    delay: 0.8,

                    ease:
                        "power2.out"
                }
            );

        }



        const activityIcons =
            document.querySelectorAll(
                ".admin-activity-icon"
            );


        activityIcons.forEach(
            function (icon) {

                gsap.to(
                    icon,
                    {
                        y: -2,

                        duration: 2,

                        repeat: -1,

                        yoyo: true,

                        ease:
                            "sine.inOut"
                    }
                );

            }
        );


    }
);