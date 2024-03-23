const buttons = {
    google: document.getElementById("search-google"),
    bing: document.getElementById("search-bing"),
    duckduckgo: document.getElementById("search-duckduckgo"),
    baidu: document.getElementById("search-baidu"),
};

const engines = {
    google: "https://www.google.com/search?q=",
    bing: "https://www.bing.com/search?q=",
    duckduckgo: "https://duckduckgo.com/?q=",
    baidu: "https://www.baidu.com/s?wd=",
};

Object.keys(buttons).forEach((key) => {
    buttons[key].addEventListener("click", function () {
        var query = document.getElementById("search-bar").value;
        if (query) {
            window.open(engines[key] + query);
        }
    });
});

document.getElementById("toggleTheme").onclick = function () {
    var body = document.body;
    if (body.classList.contains("dark-theme")) {
        body.classList.remove("dark-theme");
        body.classList.add("light-theme");
    } else {
        body.classList.remove("light-theme");
        body.classList.add("dark-theme");
    }
};

fetch("https://v1.hitokoto.cn")
    .then((response) => response.json())
    .then((data) => {
        const hitokoto = document.querySelector("#hitokoto_text");
        hitokoto.innerText = data.hitokoto;
    })
    .catch(console.error);
