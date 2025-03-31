document.getElementById("forgive-btn").addEventListener("click", function() {
    document.getElementById("message").classList.remove("hidden");
    launchPoppers();
});

function launchPoppers() {
    const container = document.getElementById("poppers-container");
    container.innerHTML = "";

    for (let i = 0; i < 20; i++) {
        let popper = document.createElement("div");
        popper.classList.add("popper");
        popper.style.left = `${Math.random() * 100}%`;
        container.appendChild(popper);

        setTimeout(() => popper.remove(), 2000);
    }
}

