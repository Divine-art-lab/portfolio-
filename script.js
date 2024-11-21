function toggle() {
  var menu = document.getElementById("nav");
  if(menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}
function active() {
  alert('You are back online');
}
function offline() {
  alert('You are currently offline, please trun-on your internet connection or connect to a WiFi');
}