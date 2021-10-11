import "./pages/lesson-material";

let navigationOpen = false;
const navigation = document.getElementsByClassName("navigation")[0];;

document.getElementsByClassName("navigation__close")[0].addEventListener("click", navigationToggle);
document.getElementsByClassName("header__hamburger-button")[0].addEventListener("click", navigationToggle);

function navigationToggle (event) {
    event.preventDefault();
    if (navigationOpen) navigation.style.transform = "translateX(-100%)";
    else navigation.style.transform = "translateX(0%)";
    navigationOpen = !navigationOpen;
}