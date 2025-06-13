function validateLogin() {
    const role = document.getElementById("role").value;
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMsg = document.getElementById("errorMsg");

    if (!role || !username || !password) {
        errorMsg.textContent = "Please fill in all fields.";
        return false;
    }

    // Simulated login success (you can later replace with actual backend logic)
    alert(`Logged in as ${role.toUpperCase()}: ${username}`);
    return false; // prevent form submission for demo
}

function validateRegister() {
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const msg = document.getElementById("registerMsg");

    if (!fullName || !email || !username || !password || !confirmPassword) {
        msg.innerHTML = "<span class='text-danger'>Please fill out all fields.</span>";
        return false;
    }

    if (password !== confirmPassword) {
        msg.innerHTML = "<span class='text-danger'>Passwords do not match.</span>";
        return false;
    }

    // Simulate success (can be replaced with backend call)
    msg.innerHTML = "<span class='text-success'>Registration successful! You can now log in.</span>";
    return false; // prevent actual submission for demo
}
