const ACTIVE = "#000000FF";
const INACTIVE = "#A0A0A0B7";

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
  btnAbout.style.color = ACTIVE;
  btnEducation.style.color = INACTIVE;
  btnExperience.style.color = INACTIVE;
  btnSkills.style.color = INACTIVE;
  btnInterests.style.color = INACTIVE;
}

function openEducation() {
  contentAbout.style.transform = "translateX(100%)";
  contentEducation.style.transform = "translateX(0)";
  contentExperience.style.transform = "translateX(100%)";
  contentSkills.style.transform = "translateX(100%)";
  contentInterests.style.transform = "translateX(100%)";
  btnAbout.style.color = INACTIVE;
  btnEducation.style.color = ACTIVE;
  btnExperience.style.color = INACTIVE;
  btnSkills.style.color = INACTIVE;
  btnInterests.style.color = INACTIVE;
}

function openExperience() {
  contentAbout.style.transform = "translateX(100%)";
  contentEducation.style.transform = "translateX(100%)";
  contentExperience.style.transform = "translateX(0)";
  contentSkills.style.transform = "translateX(100%)";
  contentInterests.style.transform = "translateX(100%)";
  btnAbout.style.color = INACTIVE;
  btnEducation.style.color = INACTIVE;
  btnExperience.style.color = ACTIVE;
  btnSkills.style.color = INACTIVE;
  btnInterests.style.color = INACTIVE;
}

function openSkills() {
  contentAbout.style.transform = "translateX(100%)";
  contentEducation.style.transform = "translateX(100%)";
  contentExperience.style.transform = "translateX(100%)";
  contentSkills.style.transform = "translateX(0)";
  contentInterests.style.transform = "translateX(100%)";
  btnAbout.style.color = INACTIVE;
  btnEducation.style.color = INACTIVE;
  btnExperience.style.color = INACTIVE;
  btnSkills.style.color = ACTIVE;
  btnInterests.style.color = INACTIVE;
}

function openInterests() {
  contentAbout.style.transform = "translateX(100%)";
  contentEducation.style.transform = "translateX(100%)";
  contentExperience.style.transform = "translateX(100%)";
  contentSkills.style.transform = "translateX(100%)";
  contentInterests.style.transform = "translateX(0)";
  btnAbout.style.color = INACTIVE;
  btnEducation.style.color = INACTIVE;
  btnExperience.style.color = INACTIVE;
  btnSkills.style.color = INACTIVE;
  btnInterests.style.color = ACTIVE;
}