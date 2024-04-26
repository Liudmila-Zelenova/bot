// ==UserScript==
// @name         My Google bot
// @namespace    http://tampermonkey.net/
// @version      1.00
// @description  Bot for google
// @author       Zelenova Liudmila
// @match        https://www.google.com/*
// @grant        none
// ==/UserScript==

let googleInput = document.getElementsByName("q")[0];
let googleBtn = document.getElementsByClassName("gNO89b")[0];
let links = document.links;
let keywords = ["автомобили с пробегом в Москве", "купить машину в москве", "купить авто от хозяина", "продажа авто в москве частные объявления"];
let keyword = keywords[getRandom(0, keywords.length)];
let mouseClick = new MouseEvent("click");

if (googleBtn !== undefined) {
    googleInput.focus();
    googleInput.dispatchEvent(mouseClick);
    googleInput.value = keyword;
    googleBtn.click();

} else if (document.querySelector(".qogDvd") !== null){
    for (let i = 0; i < links.length; i++) {
        if (links[i].href.indexOf("auto.ru") != -1) {
            let link = links[i];
            console.log("Нашел строку " + link);
            link.click();
            break;
        }
    }
}
function getRandom(min,max) {
    return Math.floor(Math.random() * (max - min) + min);
}
