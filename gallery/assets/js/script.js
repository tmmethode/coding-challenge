document.addEventListener("DOMContentLoaded", () => {
    // Select all overlay elements
    const overlays = document.querySelectorAll(".overlay");

    overlays.forEach((overlay) => {
        overlay.addEventListener("mouseenter", () => {
            // Show the "Know More" link and move the info box up
            const knowMore = overlay.querySelector(".know-more");
            const infoBox = overlay.querySelector(".info");
            knowMore.style.display = "block";
            infoBox.style.marginTop = "-180px";
        });

        overlay.addEventListener("mouseleave", () => {
            // Hide the "Know More" link and reset the info box position
            const knowMore = overlay.querySelector(".know-more");
            const infoBox = overlay.querySelector(".info");
            knowMore.style.display = "none";
            infoBox.style.marginTop = "-160px";
        });

        // Add click event for the "Know More" link
        const knowMoreLink = overlay.querySelector(".know-more");
        knowMoreLink.addEventListener("click", (event) => {
            event.preventDefault();
            alert("More information about " + overlay.querySelector(".headtext").innerText);
        });
    });
});
