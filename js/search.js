var nowSearch = 0;

function switchEngine(engine) {
  var searchInput = document.getElementById("query");
  var googleBtn = document.getElementById("googleBtn");
  var bingBtn = document.getElementById("bingBtn");
  var baiduBtn = document.getElementById("baiduBtn");
  googleBtn.classList.remove("active");
  bingBtn.classList.remove("active");
  baiduBtn.classList.remove("active");

  switch (engine) {
    case "Google":
      searchInput.placeholder = "Search Google....";
      googleBtn.classList.add("active");
      nowSearch = 0;
      break;
    case "Bing":
      searchInput.placeholder = "Search Bing....";
      bingBtn.classList.add("active");
      nowSearch = 1;
      break;
    case "Baidu":
      searchInput.placeholder = "Search Baidu....";
      baiduBtn.classList.add("active");
      nowSearch = 2;
      break;
  }
}

function search() {
  var query = document.getElementById("query");
  switch (nowSearch) {
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
      console.error("NoSuchOpt");
  }
}

function handleKeyDown(event) {
  if (event.key === "Enter") {
    search();
  }
}
