document.addEventListener("DOMContentLoaded", function () {
    const themeSelector = document.getElementById("theme-selector");


    function setTheme(theme) {
        if (theme === "dark") {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }

    setTheme(themeSelector.value);


    themeSelector.addEventListener("change", function () {
        setTheme(this.value);
    });
});