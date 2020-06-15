// ==UserScript==
// @name         Nike autobuy script on refresh
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  automatic select your desired shoesize and add it to the cart.
// @author       respawnnow
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @match        https://www.nike.com/*
// @exclude      https://www.nike.com/nl/nl/cart/
// @grant        GM_addStyle
// ==/UserScript==

setTimeout(autoBuy, 1500);
setTimeout(secondOption, 1550);

var myShoeSize = "EU 43";
var secondSize = "EU 42";
var allShoeSizes = document.querySelectorAll("button[data-qa=size-dropdown]");
var addToCart = document.querySelectorAll("button[data-qa=add-to-cart]")[0];
var goToCart = document.getElementsByClassName("hover-color-black text-color-grey bg-transparent prl3-sm pt2-sm pb2-sm m0-sm fs12-sm d-sm-b jewel-cart-container")[0];
var i;


function autoBuy(){
    for(i = 0; i < allShoeSizes.length; i++){
        if(allShoeSizes[i].textContent == myShoeSize && allShoeSizes[i].disabled == false)
        {
            allShoeSizes[i].click();
            addToCart.scrollIntoView();
            addToCart.click();
            goToCart.scrollIntoView();
            goToCart.click();
        }
        else if(allShoeSizes[i].textContent == myShoeSize && allShoeSizes[i].disabled == true)
        {
            secondOption();
        }
    };
}

function secondOption(){
    for(i = 0; i < allShoeSizes.length; i++){
        if(allShoeSizes[i].textContent == secondSize && allShoeSizes[i].disabled == false)
        {
            allShoeSizes[i].click();
            addToCart.scrollIntoView();
            addToCart.click();
            goToCart.scrollIntoView();
            goToCart.click();
        }
        else if(allShoeSizes[i].textContent == secondSize && allShoeSizes[i].disabled == true)
        {
            alert("No size available");
        }
    };
}
