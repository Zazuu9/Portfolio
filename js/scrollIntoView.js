//Scroll Home
let btnHomeTop = document.querySelector("#btnHomeTop");
let btnHomeBot = document.querySelector("#btnHomeBot");

let home = document.querySelector("#Home");

btnHomeTop.addEventListener("click", navigateHome, false);
btnHomeBot.addEventListener("click", navigateHome, false);

function navigateHome() {
    home.scrollIntoView({ behavior: "smooth" });
}

// Scroll Aboutme

let btnAboutmeTop = document.querySelector("#btnAboutmeTop");
let btnAboutmeBot = document.querySelector("#btnAboutmeBot");

let aboutme = document.querySelector("#Home");

btnAboutmeTop.addEventListener("click", navigateAboutMe, false);
btnAboutmeBot.addEventListener("click", navigateAboutMe, false);

function navigateAboutMe() {
    home.scrollIntoView({ behavior: "smooth" });
}

// Scroll Tech_Stack

let btnTechStackTop = document.querySelector("#btnTechStackTop");
let btnTechStackBot = document.querySelector("#btnTechStackBot");

let techStack = document.querySelector("#Tech_Stack");

btnTechStackTop.addEventListener("click", navigateTechStack, false);
btnTechStackBot.addEventListener("click", navigateTechStack, false);

function navigateTechStack() {
    techStack.scrollIntoView({ behavior: "smooth" });
}

// Scroll Projects

let btnProjectsTop = document.querySelector("#btnProjectsTop");
let btnProjectsBot = document.querySelector("#btnProjectsBot");

let projet = document.querySelector("#Projects");

btnProjectsTop.addEventListener("click", navigateProjets, false);
btnProjectsBot.addEventListener("click", navigateProjets, false);

function navigateProjets() {
    projet.scrollIntoView({ behavior: "smooth" });
}

// Scroll Contact

let btnContactTop = document.querySelector("#btnContactTop");
let btnContactBot = document.querySelector("#btnContactBot");

let contact = document.querySelector("#Contact");

btnContactTop.addEventListener("click", navigateContact, false);
btnContactBot.addEventListener("click", navigateContact, false);

function navigateContact() {
    contact.scrollIntoView({ behavior: "smooth" });
}
