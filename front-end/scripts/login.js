document.getElementById("loginForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("http://localhost/AI-Movie-Recommender/server/api/login.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });

        console.log("Response status:", response.status);

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();

        if (data.status === "http://localhost/AI-Movie-Recommender/front-end/index.html") {
            alert("Login Successful");
          window.location.href = "home.html";
        } else {
            alert(data.status);
        }
    } catch (error) {
        console.error("Login error:", error);
        alert("An error occurred while trying to log in. Please try again.");
    }
});
