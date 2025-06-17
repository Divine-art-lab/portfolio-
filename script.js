let alertElement = document.querySelector(".notice-internet-con");
window.addEventListener("online", () => {
  alertElement.style.display = "block";
  alertElement.style.backgroundColor = "green";
  alertElement.textContent = "you're back online, Enjoy browsing 😊";
  setTimeout(del, 2000);
});
window.addEventListener("offline", () => {
  alertElement.style.display = "block";
  alertElement.style.backgroundColor = "red";
alertElement.textContent = "you're currently offline, please check your internet connection ";
if (window.online) {
  del();
}
});
function del() {
  alertElement.style.display = "none";
}
function toggleTheme() {
  document.body.classList.toggle('dark-theme');
}

