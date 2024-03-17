const buttons = {
    google: document.getElementById('search-google'),
    bing: document.getElementById('search-bing'),
    duckduckgo: document.getElementById('search-duckduckgo'),
    baidu: document.getElementById('search-baidu')
};

const engines = {
    google: 'https://www.google.com/search?q=',
    bing: 'https://www.bing.com/search?q=',
    duckduckgo: 'https://duckduckgo.com/?q=',
    baidu: 'https://www.baidu.com/s?wd='
};

Object.keys(buttons).forEach(key => {
    buttons[key].addEventListener('click', function () {
        var query = document.getElementById('search-bar').value;
        if (query) {
            window.open(engines[key] + query);
        }
    });
});

document.getElementById("toggleTheme").onclick = function () {
    document.body.classList.toggle('dark-theme');
};