

document.addEventListener(
    "DOMContentLoaded",
    function () {



        const sidebar =
            document.getElementById(
                "transactionSidebar"
            );


        const menuToggle =
            document.getElementById(
                "transactionMenuToggle"
            );


        const overlay =
            document.getElementById(
                "transactionOverlay"
            );


        const logoutButton =
            document.getElementById(
                "transactionLogout"
            );


        const searchInput =
            document.getElementById(
                "transactionSearch"
            );


        const categoryFilter =
            document.getElementById(
                "transactionCategory"
            );


        const typeFilter =
            document.getElementById(
                "transactionType"
            );


        const tableRows =
            document.querySelectorAll(
                "#transactionTableBody tr"
            );


        const noResults =
            document.getElementById(
                "transactionNoResults"
            );


   

        if (
            !sidebar ||
            !menuToggle ||
            !overlay
        ) {

            console.error(
                "Transaction dashboard elements were not found."
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

        const topbarName =
            document.getElementById(
                "topbarUserName"
            );


        const sidebarName =
            document.getElementById(
                "sidebarUserName"
            );


        const sidebarEmail =
            document.getElementById(
                "sidebarUserEmail"
            );


        if (topbarName) {

            topbarName.textContent =
                displayName;

        }


        if (sidebarName) {

            sidebarName.textContent =
                displayName;

        }


        if (sidebarEmail) {

            sidebarEmail.textContent =
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
                "transaction-scroll-lock"
            );


            document.body.classList.add(
                "transaction-scroll-lock"
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
                "transaction-scroll-lock"
            );


            document.body.classList.remove(
                "transaction-scroll-lock"
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
                ".transaction-nav-link"
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


        function filterTransactions() {

            const search =
                searchInput
                    ? searchInput.value
                        .trim()
                        .toLowerCase()
                    : "";


            const category =
                categoryFilter
                    ? categoryFilter.value
                    : "all";


            const type =
                typeFilter
                    ? typeFilter.value
                    : "all";


            let visibleCount = 0;


            tableRows.forEach(
                function (row) {

                    const rowText =
                        row.textContent
                            .toLowerCase();


                    const rowCategory =
                        row.dataset.category;


                    const rowType =
                        row.dataset.type;


                    const matchesSearch =
                        !search ||
                        rowText.includes(
                            search
                        );


                    const matchesCategory =
                        category === "all" ||
                        rowCategory ===
                        category;


                    const matchesType =
                        type === "all" ||
                        rowType ===
                        type;


                    const show =
                        matchesSearch &&
                        matchesCategory &&
                        matchesType;


                    if (show) {

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
                filterTransactions
            );

        }



        if (categoryFilter) {

            categoryFilter.addEventListener(
                "change",
                filterTransactions
            );

        }



        if (typeFilter) {

            typeFilter.addEventListener(
                "change",
                filterTransactions
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
                ".transaction-page-header"
            );


        const summaryCards =
            document.querySelectorAll(
                ".transaction-summary-card"
            );


        const panels =
            document.querySelectorAll(
                ".transaction-panel"
            );


        const note =
            document.querySelector(
                ".transaction-note"
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


        if (note) {

            gsap.set(
                note,
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
                "-=0.25"
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


        if (note) {

            timeline.to(
                note,
                {
                    opacity: 1,
                    y: 0,

                    duration: 0.45,

                    ease:
                        "power3.out"
                },
                "-=0.15"
            );

        }


        summaryCards.forEach(
            function (card, index) {

                const icon =
                    card.querySelector(
                        ".transaction-summary-icon"
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


        summaryCards.forEach(
            function (card) {

                const icon =
                    card.querySelector(
                        ".transaction-summary-icon"
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



        const cashflowLine =
            document.querySelector(
                ".cashflow-line"
            );


        const cashflowOutflow =
            document.querySelector(
                ".cashflow-outflow"
            );


        function animateSvgLine(
            line,
            duration,
            delay
        ) {

            if (!line) {
                return;
            }


            try {

                const length =
                    line.getTotalLength();


                line.style.strokeDasharray =
                    length;


                line.style.strokeDashoffset =
                    length;


                gsap.to(
                    line,
                    {
                        strokeDashoffset: 0,

                        duration:
                            duration,

                        delay:
                            delay,

                        ease:
                            "power3.out"
                    }
                );

            } catch (error) {

                console.warn(
                    "SVG animation could not start.",
                    error
                );

            }

        }


        animateSvgLine(
            cashflowLine,
            1.7,
            0.6
        );


        animateSvgLine(
            cashflowOutflow,
            1.4,
            0.8
        );


        const spendingBars =
            document.querySelectorAll(
                ".spending-bar span"
            );


        spendingBars.forEach(
            function (bar, index) {

                const target =
                    bar.style.width;


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

                        duration: 0.8,

                        delay:
                            0.8 +
                            index * 0.08,

                        ease:
                            "power3.out"
                    }
                );

            }
        );



        const savingRate =
            document.querySelector(
                ".transaction-rate span"
            );


        if (savingRate) {

            const target =
                savingRate.style.width;


            gsap.set(
                savingRate,
                {
                    width: 0
                }
            );


            gsap.to(
                savingRate,
                {
                    width: target,

                    duration: 1,

                    delay: 0.8,

                    ease:
                        "power3.out"
                }
            );

        }



        const tableRowsAnimated =
            document.querySelectorAll(
                ".transaction-table tbody tr"
            );


        gsap.set(
            tableRowsAnimated,
            {
                opacity: 0,
                y: 12
            }
        );


        gsap.to(
            tableRowsAnimated,
            {
                opacity: 1,
                y: 0,

                duration: 0.35,

                stagger: 0.06,

                delay: 0.9,

                ease:
                    "power2.out"
            }
        );



        tableRowsAnimated.forEach(
            function (row) {

                const icon =
                    row.querySelector(
                        ".transaction-row-icon"
                    );


                if (!icon) {
                    return;
                }


                row.addEventListener(
                    "mouseenter",
                    function () {

                        gsap.to(
                            icon,
                            {
                                scale: 1.08,

                                duration: 0.25,

                                ease:
                                    "power2.out"
                            }
                        );

                    }
                );


                row.addEventListener(
                    "mouseleave",
                    function () {

                        gsap.to(
                            icon,
                            {
                                scale: 1,

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