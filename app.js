const body = document.body;
const heading = document.querySelector(".heading");
const icons = document.querySelectorAll(".icon");
const getTheme = localStorage.getItem("theme");
const lightIcon = icons[0];
const darkIcon = icons[1];

if (getTheme) {
 if (getTheme === "light") {
  applyLightTheme();
 } else if (getTheme === "dark") {
  applyDarkTheme();
 }
} else {
 console.log("No Data found in localStorage");
}

function applyLightTheme() {
 //  for exception
 if (body.classList.contains("light")) {
  const error = "Already in light theme";
  console.log(error);
  lightIcon.classList.add("hide");
  darkIcon.classList.remove("hide");
  return;
 }

 //  or else apply light theme
 lightIcon.classList.add("hide");
 darkIcon.classList.remove("hide");
 body.classList.replace("dark", "light");
 localStorage.setItem("theme", "light");
 heading.innerHTML = "Light Theme is Applied :)";
}

function applyDarkTheme() {
 // for exception
 if (body.classList.contains("dark")) {
  let error = "already in dark theme";
  console.log(error);
  lightIcon.classList.remove("hide");
  darkIcon.classList.add("hide");
  return;
 }

 //  or else applies dark mode
 lightIcon.classList.remove("hide");
 darkIcon.classList.add("hide");
 body.classList.replace("light", "dark");
 localStorage.setItem("theme", "dark");
 heading.innerHTML = "Dark Mode is Applied :)";
}

lightIcon.addEventListener("click", applyLightTheme);

darkIcon.addEventListener("click", applyDarkTheme);
