console.log("Website loaded successfully!");

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        console.log("Navigation clicked");
    });
});