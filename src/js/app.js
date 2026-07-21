const launchButtons = document.querySelectorAll(
    ".btn-primary, .nav-button"
);

launchButtons.forEach((button) => {

    button.addEventListener("click", () => {

        window.location.href =
            "./src/pages/dashboard.html";

    });

});