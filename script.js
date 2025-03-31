document.addEventListener("DOMContentLoaded", function() {
    const forgiveButton = document.querySelector(".forgive-button");
    const thankYouMessage = document.querySelector(".thank-you");

    forgiveButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent link from redirecting
        forgiveButton.style.display = "none"; // Hide button
        thankYouMessage.classList.remove("hidden"); // Show message
    });
});
