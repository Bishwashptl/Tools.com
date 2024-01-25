const body = document.querySelector("body");
const btnGetStarted = document.querySelector(".portrait_btn");
const headingToolsOffer = document.getElementById("heading_tool");
const searchBtn = document.querySelectorAll(".item_5");
const navContainer = document.getElementById("nav_container");
const searchBar = document.getElementById("search_bar");
const textSearchBtn = document.getElementById("btn_cancel");
const btnMenu = document.getElementById("img_menu");
const verticalNavBar = document.getElementById("vertical_nav_bar");
const main = document.querySelector("main");
const header = document.querySelector("header");
const footer = document.querySelector("footer");

//universal variables
let isThisSmallSize = false;

body.onscroll = () => {verticalNavBar.style.display = "none"};

btnMenu.addEventListener("click", openVerticalNavBar);


window.addEventListener("resize",() => {
    if(window.innerWidth <= 850){
        isThisSmallSize = true;
    
    }else{
    }
})

let isHidden = true;
function openVerticalNavBar() {
    //display or hide the vertical nav bar when clicked on menu btn
    if(isHidden){
        verticalNavBar.style.display = "block";
        isHidden = false;
    }else{
        verticalNavBar.style.display = "none";
        isHidden = true;
    }
}

btnGetStarted.addEventListener("click", () => {
    headingToolsOffer.scrollIntoView({ behavior: 'smooth' });
})

searchBtn[0].addEventListener("click", showSearchBar);
searchBtn[1].addEventListener("click", showSearchBar);

function showSearchBar() {
    if(isThisSmallSize){
        verticalNavBar.style.display = "none";// hide the vertical nav bar
        btnMenu.style.display = "none";// hide the menu icon
        searchBar.style.display = "flex";// show the search bar
    }else{

        console.log("It's working.");
        navContainer.style.opacity = "0%";
        navContainer.style.display = "none";
        searchBar.style.display = "flex";
    }
}

textSearchBtn.addEventListener("click", () => {
    searchBar.style.display = "none";
    navContainer.style.display = "flex";
    navContainer.style.opacity = "100%";
})