// script.js

document.addEventListener("DOMContentLoaded", () => {
  const weatherUpdate = document.getElementById("weather-update");
  
  // Simulate dynamic weather updates
  setInterval(() => {
    const weatherData = [
      "☀️ Sunny, 28°C",
      "🌧️ Rain, 24°C",
      "⛈️ Thunderstorm, 22°C"
    ];
    weatherUpdate.textContent = weatherData[Math.floor(Math.random() * weatherData.length)];
  }, 5000);
});

// Function to handle login
function handleLogin() {
  // Get the username and password values from the input fields
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Simple validation check (replace this with your actual authentication logic)
  if (username === "admin" && password === "admin123") {
      alert("Login successful! Redirecting to dashboard...");
      window.location.href = "index.html"; // Redirect to the dashboard
  } else {
      alert("Invalid username or password. Please try again.");
  }
}



