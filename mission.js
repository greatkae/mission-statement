document.addEventListener("DOMContentLoaded", function () {
    const themeSelector = document.getElementById("theme-selector");


    function setTheme(theme) {
        if (theme === "dark") {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }

    setTheme(themeSelector.value);


    themeSelector.addEventListener("change", function () {
        setTheme(this.value);
    });
});