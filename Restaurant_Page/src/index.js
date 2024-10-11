import "./styles.css"
import homeSection from "./homeSection.js"
import menuSection from "./menuSection.js"
import aboutSection from "./aboutSection.js"


(()=>{
    const content = document.querySelector("#content");

const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector("#about");

const clearContent = () => content.innerHTML = '';
homeBtn.addEventListener('click', homeSection);
menuBtn.addEventListener('click', menuSection);
aboutBtn.addEventListener('click', aboutSection);
    homeSection();
})();
