const BRIGHT = "#FFFFFF"
var DARK = "#999999"

var content1 = document.getElementById("content1");
var content2 = document.getElementById("content2");
var content3 = document.getElementById("content3");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");

function openAbout() {
    content1.style.transform = "translateX(0)";
    content2.style.transform = "translateX(100%)";
    content3.style.transform = "translateX(100%)";
    btn1.style.color = BRIGHT;
    btn2.style.color = DARK;
    btn3.style.color = DARK;
}

function openCSS() {
    content1.style.transform = "translateX(100%)";
    content2.style.transform = "translateX(0)";
    content3.style.transform = "translateX(100%)";
    btn1.style.color = DARK;
    btn2.style.color = BRIGHT;
    btn3.style.color = DARK;
}

function openJavaScript() {
    content1.style.transform = "translateX(100%)";
    content2.style.transform = "translateX(100%)";
    content3.style.transform = "translateX(0)";
    btn1.style.color = DARK;
    btn2.style.color = DARK;
    btn3.style.color = BRIGHT;
}