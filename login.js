document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("loginForm");
    const email = document.getElementById("loginEmail");
    const password = document.getElementById("loginPassword");
    const rememberMe = document.getElementById("rememberMe");
    const passwordToggle = document.getElementById("passwordToggle");
    const submitButton = document.getElementById("loginSubmit");
    const roleButtons = document.querySelectorAll(".role-button");

    if (!form || !email || !password || !submitButton) {
        return;
    }

    const EMAIL_KEY = "finance_advisory_email";
    const ROLE_KEY = "finance_advisory_role";
    const ROLE_ID_KEY = "finance_advisory_role_id";
    const REMEMBER_KEY = "finance_advisory_remember";

    let selectedRole = "user";

    const submitText = submitButton.querySelector("span");
    const submitIcon = submitButton.querySelector("i");

    function setRole(role) {
        selectedRole = role;

        roleButtons.forEach(function (button) {
            button.classList.toggle(
                "active",
                button.dataset.role === role
            );
        });

        updateSubmitButton();
    }

    function updateSubmitButton() {
        if (!submitButton) {
            return;
        }

        submitButton.disabled = false;

        submitButton.classList.remove("is-loading");

        if (submitText) {
            submitText.textContent =
                selectedRole === "admin"
                    ? "Login as Admin"
                    : "Login as User";
        }

        if (submitIcon) {
            submitIcon.className = "fa-solid fa-arrow-right";
            submitIcon.style.transform = "";
        }
    }

    function resetLoginPage() {
        if (
            typeof gsap !== "undefined" &&
            submitIcon
        ) {
            gsap.killTweensOf(submitIcon);
        }

        submitButton.disabled = false;
        submitButton.classList.remove("is-loading");

        if (submitText) {
            submitText.textContent =
                selectedRole === "admin"
                    ? "Login as Admin"
                    : "Login as User";
        }

        if (submitIcon) {
            submitIcon.className = "fa-solid fa-arrow-right";
            submitIcon.style.transform = "";
        }

        password.value = "";
        password.type = "password";

        if (passwordToggle) {
            const icon =
                passwordToggle.querySelector("i");

            if (icon) {
                icon.className = "fa-solid fa-eye";
            }

            passwordToggle.setAttribute(
                "aria-label",
                "Show password"
            );
        }

        form.querySelectorAll(".login-form-group").forEach(
            function (group) {
                group.classList.remove("invalid");
            }
        );

        const emailError =
            document.getElementById("emailError");

        const passwordError =
            document.getElementById("passwordError");

        if (emailError) {
            emailError.textContent =
                "Please enter a valid email address.";
            emailError.style.display = "none";
        }

        if (passwordError) {
            passwordError.textContent =
                "Please enter your password.";
            passwordError.style.display = "none";
        }

        const savedEmail =
            localStorage.getItem(EMAIL_KEY);

        const remember =
            localStorage.getItem(REMEMBER_KEY);

        if (
            remember === "true" &&
            savedEmail
        ) {
            email.value = savedEmail;

            if (rememberMe) {
                rememberMe.checked = true;
            }
        } else {
            email.value = "";

            if (rememberMe) {
                rememberMe.checked = false;
            }
        }

        const savedRole =
            localStorage.getItem(ROLE_KEY);

        if (
            savedRole === "admin" ||
            savedRole === "user"
        ) {
            selectedRole = savedRole;
        } else {
            selectedRole = "user";
        }

        roleButtons.forEach(function (button) {
            button.classList.toggle(
                "active",
                button.dataset.role === selectedRole
            );
        });

        updateSubmitButton();
    }

    const storedRole =
        localStorage.getItem(ROLE_KEY);

    if (
        storedRole === "admin" ||
        storedRole === "user"
    ) {
        selectedRole = storedRole;
    }

    roleButtons.forEach(function (button) {
        button.addEventListener(
            "click",
            function () {
                setRole(button.dataset.role);
            }
        );
    });

    if (passwordToggle) {
        passwordToggle.addEventListener(
            "click",
            function () {

                if (
                    password.type ===
                    "password"
                ) {
                    password.type = "text";

                    const icon =
                        passwordToggle.querySelector("i");

                    if (icon) {
                        icon.className =
                            "fa-solid fa-eye-slash";
                    }

                    passwordToggle.setAttribute(
                        "aria-label",
                        "Hide password"
                    );

                } else {

                    password.type = "password";

                    const icon =
                        passwordToggle.querySelector("i");

                    if (icon) {
                        icon.className =
                            "fa-solid fa-eye";
                    }

                    passwordToggle.setAttribute(
                        "aria-label",
                        "Show password"
                    );
                }
            }
        );
    }

    function clearError(field) {
        const group =
            field.closest(".login-form-group");

        if (group) {
            group.classList.remove("invalid");

            const error =
                group.querySelector(".login-error");

            if (error) {
                error.style.display = "none";
            }
        }
    }

    function showError(field, message) {
        const group =
            field.closest(".login-form-group");

        if (group) {
            group.classList.add("invalid");

            const error =
                group.querySelector(".login-error");

            if (error) {
                error.textContent = message;
                error.style.display = "block";
            }
        }
    }

    email.addEventListener(
        "input",
        function () {
            clearError(email);
        }
    );

    password.addEventListener(
        "input",
        function () {
            clearError(password);
        }
    );

    form.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            let valid = true;

            const emailValue =
                email.value.trim();

            const passwordValue =
                password.value;

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (
                !emailValue ||
                !emailPattern.test(emailValue)
            ) {
                showError(
                    email,
                    "Please enter a valid email address."
                );

                valid = false;

            } else {
                clearError(email);
            }

            if (
                !passwordValue ||
                passwordValue.length < 6
            ) {
                showError(
                    password,
                    "Password must contain at least 6 characters."
                );

                valid = false;

            } else {
                clearError(password);
            }

            if (!valid) {

                const firstInvalid =
                    form.querySelector(
                        ".login-form-group.invalid"
                    );

                if (firstInvalid) {
                    firstInvalid.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });
                }

                if (
                    typeof gsap !== "undefined"
                ) {
                    gsap.fromTo(
                        form,
                        {
                            x: -7
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

            let roleId;
            let redirectPage;

            if (
                selectedRole === "admin"
            ) {
                roleId = "ADMIN-001";
                redirectPage = "admin-dashboard.html";
            } else {
                roleId = "USER-001";
                redirectPage = "user-dashboard.html";
            }

            localStorage.setItem(
                EMAIL_KEY,
                emailValue
            );

            localStorage.setItem(
                REMEMBER_KEY,
                rememberMe &&
                rememberMe.checked
                    ? "true"
                    : "false"
            );

            localStorage.setItem(
                ROLE_KEY,
                selectedRole
            );

            localStorage.setItem(
                ROLE_ID_KEY,
                roleId
            );

            localStorage.setItem(
                "isLoggedIn",
                "true"
            );

            localStorage.setItem(
                "userEmail",
                emailValue
            );

            localStorage.setItem(
                "userRole",
                selectedRole === "admin"
                    ? "Admin"
                    : "User"
            );

            submitButton.disabled = true;

            submitButton.classList.add(
                "is-loading"
            );

            if (submitText) {
                submitText.textContent =
                    "Signing In...";
            }

            if (submitIcon) {
                submitIcon.className =
                    "fa-solid fa-spinner";
            }

            if (
                typeof gsap !== "undefined"
            ) {
                gsap.to(
                    submitIcon,
                    {
                        rotation: 360,
                        duration: 0.8,
                        repeat: -1,
                        ease: "linear"
                    }
                );
            }

            setTimeout(
                function () {
                    window.location.href =
                        redirectPage;
                },
                800
            );
        }
    );

    window.addEventListener(
        "pageshow",
        function () {
            resetLoginPage();
        }
    );

    document.addEventListener(
        "visibilitychange",
        function () {

            if (
                document.visibilityState ===
                "visible"
            ) {
                setTimeout(
                    function () {
                        resetLoginPage();
                    },
                    50
                );
            }
        }
    );

    resetLoginPage();

});