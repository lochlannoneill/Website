const BRIGHT = "#FFFFFF";
var DARK = "#999999";

var contentAbout = document.getElementById("contentAbout");
var contentEducation = document.getElementById("contentEducation");
var contentExperience = document.getElementById("contentExperience");
var contentSkills = document.getElementById("contentSkills");
var contentInterests = document.getElementById("contentInterests");

var btnAbout = document.getElementById("btnAbout");
var btnEducation = document.getElementById("btnEducation");
var btnExperience = document.getElementById("btnExperience");
var btnSkills = document.getElementById("btnSkills");
var btnInterests = document.getElementById("btnInterests");

function openAbout() {
  contentAbout.style.transform = "translateX(0)";
  contentEducation.style.transform = "translateX(100%)";
  contentExperience.style.transform = "translateX(100%)";
  contentSkills.style.transform = "translateX(100%)";
  contentInterests.style.transform = "translateX(100%)";
  btnAbout.style.color = BRIGHT;
  btnEducation.style.color = DARK;
  btnExperience.style.color = DARK;
  btnSkills.style.color = DARK;
  btnInterests.style.color = DARK;
}

function openEducation() {
  contentAbout.style.transform = "translateX(100%)";
  contentEducation.style.transform = "translateX(0)";
  contentExperience.style.transform = "translateX(100%)";
  contentSkills.style.transform = "translateX(100%)";
  contentInterests.style.transform = "translateX(100%)";
  btnAbout.style.color = DARK;
  btnEducation.style.color = BRIGHT;
  btnExperience.style.color = DARK;
  btnSkills.style.color = DARK;
  btnInterests.style.color = DARK;
}

function openExperience() {
  contentAbout.style.transform = "translateX(100%)";
  contentEducation.style.transform = "translateX(100%)";
  contentExperience.style.transform = "translateX(0)";
  contentSkills.style.transform = "translateX(100%)";
  contentInterests.style.transform = "translateX(100%)";
  btnAbout.style.color = DARK;
  btnEducation.style.color = DARK;
  btnExperience.style.color = BRIGHT;
  btnSkills.style.color = DARK;
  btnInterests.style.color = DARK;
}

function openSkills() {
  contentAbout.style.transform = "translateX(100%)";
  contentEducation.style.transform = "translateX(100%)";
  contentExperience.style.transform = "translateX(100%)";
  contentSkills.style.transform = "translateX(0)";
  contentInterests.style.transform = "translateX(100%)";
  btnAbout.style.color = DARK;
  btnEducation.style.color = DARK;
  btnExperience.style.color = DARK;
  btnSkills.style.color = BRIGHT;
  btnInterests.style.color = DARK;
}

function openInterests() {
  contentAbout.style.transform = "translateX(100%)";
  contentEducation.style.transform = "translateX(100%)";
  contentExperience.style.transform = "translateX(100%)";
  contentSkills.style.transform = "translateX(100%)";
  contentInterests.style.transform = "translateX(0)";
  btnAbout.style.color = DARK;
  btnEducation.style.color = DARK;
  btnExperience.style.color = DARK;
  btnSkills.style.color = DARK;
  btnInterests.style.color = BRIGHT;
}