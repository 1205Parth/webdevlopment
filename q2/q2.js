document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registrationForm");
    const dob = document.getElementById("dob");
    const age = document.getElementById("age");

    // Calculate age based on DOB
    dob.addEventListener("change", () => {
        const dobValue = new Date(dob.value);
        const today = new Date();
        let ageValue = today.getFullYear() - dobValue.getFullYear();
        const m = today.getMonth() - dobValue.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < dobValue.getDate())) {
            ageValue--;
        }
        age.value = ageValue;
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const terms = document.getElementById("terms").checked;
        if (!validateEmail(email)) {
            displayMessage("Invalid email address. Please provide a valid one.");
            return;
        }

        if (password !== confirmPassword) {
            displayMessage("Passwords do not match. Please try again.");
            return;
        }

        if (!terms) {
            displayMessage("You must agree to the terms and conditions to proceed.");
            return;
        }

        displayMessage("Form submitted successfully!", 'success');
        form.submit();
    });


    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
