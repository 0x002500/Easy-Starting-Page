window.onload = function () {
  const code = localStorage.getItem("code");
  const show = document.getElementById("show");
  show.innerHTML = code;
};

const updateCode = document.getElementById("updateCode");
updateCode.addEventListener("submit", function (event) {
  event.preventDefault();
  const code = document.getElementById("code");
  localStorage.removeItem("code");
  localStorage.setItem("code", code.value.trim());
  alert("Alredy set, reload the page to view.");
});

function setSettings(option) {
  const dialog = document.querySelector(".settings");
  if (dialog) {
    if (option) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }
}

function settings() {
  const dialog = document.getElementById("settings");
  if (dialog) {
    dialog.showModal();
  }
}
