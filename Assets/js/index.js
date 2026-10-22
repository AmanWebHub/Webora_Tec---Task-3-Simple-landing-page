document.querySelectorAll(".navbar").forEach((navbar) => {
    const toggle = navbar.querySelector(".navbar-toggle");
    const links = navbar.querySelector(".navbar-links");

    if (!toggle || !links) return;

    function setMenuOpen(isOpen) {
        links.classList.toggle("is-open", isOpen);
        toggle.classList.toggle("is-open", isOpen);

        toggle.setAttribute("aria-expanded", String(isOpen));
        toggle.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );
    }

    toggle.addEventListener("click", () => {
        const isOpen =
            toggle.getAttribute("aria-expanded") === "true";

        setMenuOpen(!isOpen);
    });

    links.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            setMenuOpen(false);
        });
    });

    // Close the menu when switching back to desktop width.
    const desktopQuery = window.matchMedia("(min-width: 769px)");

    desktopQuery.addEventListener("change", (event) => {
        if (event.matches) {
            setMenuOpen(false);
        }
    });
});
