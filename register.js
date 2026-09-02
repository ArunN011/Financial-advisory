

document.addEventListener(
    "DOMContentLoaded",
    function () {



        const form =
            document.getElementById(
                "registerForm"
            );


        const name =
            document.getElementById(
                "registerName"
            );


        const email =
            document.getElementById(
                "registerEmail"
            );


        const phone =
            document.getElementById(
                "registerPhone"
            );


        const service =
            document.getElementById(
                "registerService"
            );


        const password =
            document.getElementById(
                "registerPassword"
            );


        const confirmPassword =
            document.getElementById(
                "registerConfirmPassword"
            );


        const experience =
            document.getElementById(
                "registerExperience"
            );


        const goal =
            document.getElementById(
                "registerGoal"
            );


        const terms =
            document.getElementById(
                "registerTerms"
            );


        const submitButton =
            document.getElementById(
                "registerSubmit"
            );


        const passwordToggle =
            document.getElementById(
                "registerPasswordToggle"
            );


        const confirmToggle =
            document.getElementById(
                "registerConfirmToggle"
            );


        const roleButtons =
            document.querySelectorAll(
                ".register-role"
            );


        if (!form) {
            return;
        }


     

        let selectedRole = "user";


        roleButtons.forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        roleButtons.forEach(
                            function (item) {

                                item.classList.remove(
                                    "active"
                                );

                            }
                        );


                        button.classList.add(
                            "active"
                        );


                        selectedRole =
                            button.dataset.role;

                    }
                );

            }
        );



        function setupPasswordToggle(
            button,
            input
        ) {

            if (!button || !input) {
                return;
            }


            button.addEventListener(
                "click",
                function () {

                    const showPassword =
                        input.type ===
                        "password";


                    input.type =
                        showPassword
                            ? "text"
                            : "password";


                    const icon =
                        button.querySelector(
                            "i"
                        );


                    if (icon) {

                        icon.className =
                            showPassword
                                ? "fa-solid fa-eye-slash"
                                : "fa-solid fa-eye";

                    }


                    button.setAttribute(
                        "aria-label",
                        showPassword
                            ? "Hide password"
                            : "Show password"
                    );

                }
            );

        }


        setupPasswordToggle(
            passwordToggle,
            password
        );


        setupPasswordToggle(
            confirmToggle,
            confirmPassword
        );



        function clearError(
            field
        ) {

            const group =
                field.closest(
                    ".register-form-group"
                );


            if (group) {

                group.classList.remove(
                    "invalid"
                );

            }

        }


        function showError(
            field,
            message
        ) {

            const group =
                field.closest(
                    ".register-form-group"
                );


            if (!group) {
                return;
            }


            group.classList.add(
                "invalid"
            );


            const error =
                group.querySelector(
                    ".register-error"
                );


            if (error) {

                error.textContent =
                    message;

            }

        }



        [
            name,
            email,
            phone,
            service,
            password,
            confirmPassword,
            experience,
            goal
        ].forEach(
            function (field) {

                field.addEventListener(
                    "input",
                    function () {

                        clearError(field);

                    }
                );


                field.addEventListener(
                    "change",
                    function () {

                        clearError(field);

                    }
                );

            }
        );


        terms.addEventListener(
            "change",
            function () {

                const group =
                    document.querySelector(
                        ".register-terms-group"
                    );


                if (terms.checked) {

                    group.classList.remove(
                        "invalid"
                    );

                }

            }
        );



        const strengthBar =
            document.querySelector(
                ".register-password-strength"
            );


        function updatePasswordStrength() {

            if (!strengthBar) {
                return;
            }


            const value =
                password.value;


            strengthBar.classList.remove(
                "weak",
                "medium",
                "strong"
            );


            if (!value) {
                return;
            }


            let score = 0;


            if (value.length >= 8) {
                score++;
            }


            if (/[A-Z]/.test(value)) {
                score++;
            }


            if (/[a-z]/.test(value)) {
                score++;
            }


            if (/[0-9]/.test(value)) {
                score++;
            }


            if (
                /[^A-Za-z0-9]/.test(value)
            ) {
                score++;
            }


            if (score <= 2) {

                strengthBar.classList.add(
                    "weak"
                );

            } else if (score <= 3) {

                strengthBar.classList.add(
                    "medium"
                );

            } else {

                strengthBar.classList.add(
                    "strong"
                );

            }

        }


        password.addEventListener(
            "input",
            updatePasswordStrength
        );


        form.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                let valid = true;



                if (
                    name.value.trim().length < 2
                ) {

                    showError(
                        name,
                        "Please enter your full name."
                    );

                    valid = false;

                } else {

                    clearError(name);

                }


                

                const emailPattern =
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


                if (
                    !emailPattern.test(
                        email.value.trim()
                    )
                ) {

                    showError(
                        email,
                        "Please enter a valid email address."
                    );

                    valid = false;

                } else {

                    clearError(email);

                }


                                const phoneDigits =
                    phone.value.replace(
                        /\D/g,
                        ""
                    );


                if (
                    phoneDigits.length < 10
                ) {

                    showError(
                        phone,
                        "Please enter a valid phone number."
                    );

                    valid = false;

                } else {

                    clearError(phone);

                }



                if (!service.value) {

                    showError(
                        service,
                        "Please select your financial interest."
                    );

                    valid = false;

                } else {

                    clearError(service);

                }


                const strongPassword =
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;


                if (
                    !strongPassword.test(
                        password.value
                    )
                ) {

                    showError(
                        password,
                        "Password must contain at least 8 characters, uppercase, lowercase and a number."
                    );

                    valid = false;

                } else {

                    clearError(password);

                }


                if (
                    confirmPassword.value === "" ||
                    confirmPassword.value !==
                    password.value
                ) {

                    showError(
                        confirmPassword,
                        "Passwords do not match."
                    );

                    valid = false;

                } else {

                    clearError(
                        confirmPassword
                    );

                }


                if (!experience.value) {

                    showError(
                        experience,
                        "Please select your experience."
                    );

                    valid = false;

                } else {

                    clearError(experience);

                }



                if (!goal.value) {

                    showError(
                        goal,
                        "Please select your financial goal."
                    );

                    valid = false;

                } else {

                    clearError(goal);

                }



                const termsGroup =
                    document.querySelector(
                        ".register-terms-group"
                    );


                const termsError =
                    document.querySelector(
                        ".register-terms-error"
                    );


                if (!terms.checked) {

                    termsGroup.classList.add(
                        "invalid"
                    );

                    termsError.style.display =
                        "block";

                    valid = false;

                } else {

                    termsGroup.classList.remove(
                        "invalid"
                    );

                    termsError.style.display =
                        "none";

                }



                if (!valid) {

                    const firstInvalid =
                        form.querySelector(
                            ".register-form-group.invalid"
                        );


                    if (firstInvalid) {

                        firstInvalid.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });

                    }


                    if (
                        typeof gsap !==
                        "undefined"
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

                                ease:
                                    "power1.inOut"
                            }
                        );

                    }


                    return;

                }



                submitButton.disabled =
                    true;


                const submitText =
                    submitButton.querySelector(
                        "span"
                    );


                const submitIcon =
                    submitButton.querySelector(
                        "i"
                    );


                submitText.textContent =
                    "CREATING ACCOUNT...";


                submitIcon.className =
                    "fa-solid fa-spinner";



                if (
                    typeof gsap !==
                    "undefined"
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

                        if (
                            typeof gsap !==
                            "undefined"
                        ) {

                            gsap.killTweensOf(
                                submitIcon
                            );

                        }



                        form.reset();

                        selectedRole = "user";

                        roleButtons.forEach(
                            function (button) {

                                button.classList.toggle(
                                    "active",
                                    button.dataset.role ===
                                    "user"
                                );

                            }
                        );


                       
                        window.location.href =
                            "login.html";

                    },
                    800
                );

            }
        );

        if (
            typeof gsap ===
            "undefined"
        ) {
            return;
        }


        const page =
            document.querySelector(
                ".finance-register-page"
            );


        const card =
            document.querySelector(
                ".finance-register-card"
            );


        const backHome =
            document.querySelector(
                ".register-back-home"
            );


        const brand =
            document.querySelector(
                ".register-brand"
            );


        const header =
            document.querySelector(
                ".register-header"
            );


        const roleSection =
            document.querySelector(
                ".register-role-section"
            );


        const formGroups =
            document.querySelectorAll(
                ".register-form-group"
            );


        const terms1 =
            document.querySelector(
                ".register-terms"
            );


        const submit =
            document.querySelector(
                ".register-submit"
            );


        const login =
            document.querySelector(
                ".register-login-link"
            );


        const security =
            document.querySelector(
                ".register-security"
            );


        gsap.set(
            backHome,
            {
                opacity: 0,
                x: -20
            }
        );


        gsap.set(
            card,
            {
                opacity: 0,
                y: 45,
                scale: 0.98
            }
        );


        gsap.set(
            brand,
            {
                opacity: 0,
                y: 20
            }
        );


        gsap.set(
            header,
            {
                opacity: 0,
                y: 20
            }
        );


        gsap.set(
            roleSection,
            {
                opacity: 0,
                y: 20
            }
        );


        gsap.set(
            formGroups,
            {
                opacity: 0,
                y: 18
            }
        );


        gsap.set(
            terms1,
            {
                opacity: 0,
                y: 15
            }
        );


        gsap.set(
            submit,
            {
                opacity: 0,
                y: 18
            }
        );


        gsap.set(
            login,
            {
                opacity: 0,
                y: 15
            }
        );


        gsap.set(
            security,
            {
                opacity: 0,
                y: 15
            }
        );


        const timeline =
            gsap.timeline();


        timeline

            .to(
                backHome,
                {
                    opacity: 1,
                    x: 0,

                    duration: 0.45,

                    ease: "power3.out"
                }
            )


            .to(
                card,
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,

                    duration: 0.8,

                    ease: "power3.out"
                },
                "-=0.15"
            )


            .to(
                brand,
                {
                    opacity: 1,
                    y: 0,

                    duration: 0.4,

                    ease: "power3.out"
                },
                "-=0.35"
            )


            .to(
                header,
                {
                    opacity: 1,
                    y: 0,

                    duration: 0.5,

                    ease: "power3.out"
                },
                "-=0.2"
            )


            .to(
                roleSection,
                {
                    opacity: 1,
                    y: 0,

                    duration: 0.45,

                    ease: "power3.out"
                },
                "-=0.15"
            )


            .to(
                formGroups,
                {
                    opacity: 1,
                    y: 0,

                    duration: 0.4,

                    stagger: 0.07,

                    ease: "power3.out"
                },
                "-=0.15"
            )


            .to(
                terms1,
                {
                    opacity: 1,
                    y: 0,

                    duration: 0.35,

                    ease: "power3.out"
                },
                "-=0.1"
            )


            .to(
                submit,
                {
                    opacity: 1,
                    y: 0,

                    duration: 0.4,

                    ease: "power3.out"
                },
                "-=0.1"
            )


            .to(
                login,
                {
                    opacity: 1,
                    y: 0,

                    duration: 0.35,

                    ease: "power3.out"
                },
                "-=0.1"
            )


            .to(
                security,
                {
                    opacity: 1,
                    y: 0,

                    duration: 0.35,

                    ease: "power3.out"
                },
                "-=0.1"
            );



        const circleOne =
            document.querySelector(
                ".register-bg-circle-one"
            );


        const circleTwo =
            document.querySelector(
                ".register-bg-circle-two"
            );


        if (circleOne) {

            gsap.to(
                circleOne,
                {
                    x: 20,
                    y: 20,

                    duration: 6,

                    repeat: -1,

                    yoyo: true,

                    ease: "sine.inOut"
                }
            );

        }


        if (circleTwo) {

            gsap.to(
                circleTwo,
                {
                    x: -20,
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