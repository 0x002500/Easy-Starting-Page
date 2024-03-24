var nowSearch = 0;
function switchEngine(engine) {
    var searchInput = document.querySelector('.search');
    var googleBtn = document.getElementById('googleBtn');
    var bingBtn = document.getElementById('bingBtn');
    var baiduBtn = document.getElementById('baiduBtn');
    googleBtn.classList.remove('active');
    bingBtn.classList.remove('active');
    baiduBtn.classList.remove('active');
    
    switch (engine) {
        case 'Google':
            searchInput.placeholder = 'Search Google....';
            googleBtn.classList.add('active');
            nowSearch = 0;
            break;
        case 'Bing':
            searchInput.placeholder = 'Search Bing....';
            bingBtn.classList.add('active');
            nowSearch = 1;
            break;
        case 'Baidu':
            searchInput.placeholder = 'Search Baidu....';
            baiduBtn.classList.add('active');
            nowSearch = 2;
            break;
        default:
            searchInput.placeholder = 'Search....';
            break;
    }
}
function search(){
    var query = document.getElementById('query');
    switch(nowSearch){
        case 0:
            if (query) {
                window.open("https://www.google.com/search?q=" + query.value);
            }
            break;
        case 1:
            if (query) {
                window.open("https://www.bing.com/search?q=" + query.value);
            }
            break;
        case 2:
            console.log(2);
            if (query) {
                window.open("https://www.baidu.com/s?wd=" + query.value);
            }
            break;
        default:
            console.error('NoSuchOpt')
    }
}
function handleKeyDown(event) {
    if (event.key === 'Enter') {
      search();
    }
  }
function toggleTheme() {
    var body = document.body;
    var themeButton = document.querySelector(".themebtn img");
    var settingsButton = document.querySelector(".settingsbtn img");
    var weatherIcon = document.getElementById("weathericon");
    if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        themeButton.src = "static/light.svg";
        settingsButton.src="static/settings.svg";
        weatherIcon.src="static/location.svg";
    } else {
        body.classList.add("dark");
        themeButton.src = "static/dark.svg";
        settingsButton.src="static/settings_dark.svg"
        weatherIcon.src="static/location_dark.svg";
    }
}
function settings() {
    const dialog = document.getElementById('settings');
    if (dialog) {
        dialog.showModal();
    }
}