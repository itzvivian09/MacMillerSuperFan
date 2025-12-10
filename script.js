// ERIC: this function was moved from the image to the 'flip-card' div that the image is inside of
// ERIC: I left a comment in the HTML to show you the old onclick location and the new onclick location!
v = document.getElementById("video");
mac = document.getElementById("MacMiller");

function changeBalloon() {
  v.src = "https://www.youtube.com/embed/i2mnNsFJlfM?autoplay=1";
  document.getElementById("balloonerism-card").classList.add("flipped");
}
function changeFaces() {
  v.src = "https://www.youtube.com/embed/NOXKSsxxs30?autoplay=1";
  document.getElementById("faces-card").classList.add("flipped");
}
function changeDevine() {
  v.src = "https://www.youtube.com/embed/0fcsGS1dEro?start=345&autoplay=1";
  document.getElementById("devine-card").classList.add("flipped");
}
function changeGoodam() {
  v.src = "https://www.youtube.com/embed/nqZhH5011b0?autoplay=1";
  document.getElementById("goodam-card").classList.add("flipped");
}
function changeKids() {
  v.src =
    "https://www.youtube.com/embed/7mhtAI6JspA?controls=0&start=9&autoplay=1";
  document.getElementById("kids-card").classList.add("flipped");
}
function changeSwimming() {
  v.src =
    "https://www.youtube.com/embed/1pc7GQRUMyQ?controls=0&start=174&autoplay=1";
  document.getElementById("swimming-card").classList.add("flipped");
}
function changeLife() {
  v.src =
    "https://www.youtube.com/embed/xhnA-h80um0?controls=0&start=41&autoplay=1";
  document.getElementById("life-card").classList.add("flipped");
}
function changeYouforia() {
  v.src = "https://www.youtube.com/embed/iQ_S6SpUN5Q?start=22&autoplay=1 ";
  document.getElementById("youforia-card").classList.add("flipped");
}

function resetAll() {
  document.getElementById("textBox").style.display = "none";

  mac.src = "images/Reset mac.gif";
  mac.style.display = "block";
  v.src =
    "https://www.youtube.com/embed/y5Eeq5pLAKg?si=eo7AIfoSFU71bHwR&controls=0&autoplay=1";

  document.getElementById("balloonerism-card").classList.remove("flipped");
  document.getElementById("faces-card").classList.remove("flipped");
  document.getElementById("devine-card").classList.remove("flipped");
  document.getElementById("goodam-card").classList.remove("flipped");
  document.getElementById("kids-card").classList.remove("flipped");
  document.getElementById("swimming-card").classList.remove("flipped");
  document.getElementById("life-card").classList.remove("flipped");
  document.getElementById("youforia-card").classList.remove("flipped");
  document.getElementById("click").play();
}
