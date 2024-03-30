var themesel;

if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", 0);
    themesel = localStorage.getItem("theme");
} else {
    themesel = localStorage.getItem("theme");
}

function toggleTheme() {
    var body = document.body;
    var themeButton = document.querySelector(".themebtn img");
    var settingsButton = document.querySelector(".settingsbtn img");
    var weatherIcon = document.getElementById("weathericon");
    if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        themeButton.src = "static/light.svg";
        settingsButton.src = "static/settings.svg";
        weatherIcon.src = "static/location.svg";
        setTheme(1);
    } else {
        body.classList.add("dark");
        themeButton.src = "static/dark.svg";
        settingsButton.src = "static/settings_dark.svg";
        weatherIcon.src = "static/location_dark.svg";
        setTheme(0);
    }
}

function setTheme(opt) {
    var body = document.body;
    var themeButton = document.querySelector(".themebtn img");
    var settingsButton = document.querySelector(".settingsbtn img");
    var weatherIcon = document.getElementById("weathericon");
    localStorage.setItem("theme", opt);
    if (opt == 0) {
        body.classList.add("dark");
        themeButton.src = "static/dark.svg";
        settingsButton.src = "static/settings_dark.svg";
        weatherIcon.src = "static/location_dark.svg";
    } else if (opt == 1) {
        body.classList.remove("dark");
        themeButton.src = "static/light.svg";
        settingsButton.src = "static/settings.svg";
        weatherIcon.src = "static/location.svg";
    }
}

setTheme(localStorage.getItem("theme"));
