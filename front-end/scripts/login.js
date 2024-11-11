document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    fetch(action === "login" ? "login.php" : "register.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById("message").innerText = data;
    })
    .catch(error => {
        console.error("Error:", error);
        document.getElementById("message").innerText = "An error occurred.";
    });
});