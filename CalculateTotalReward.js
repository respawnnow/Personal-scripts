// ==UserScript==
// @name         CalculateTotalReward ICX
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Calculate your total ICX rewards
// @author       respawnnow
// @match        https://tracker.icon.foundation/address/YOURADDRESS
// @grant        none
// ==/UserScript==

function waitForElement(elementId, callBack){
  window.setTimeout(function(){
    var element = document.getElementsByClassName(elementId);
    if(element){
      callBack(elementId, element);
    }else{
      waitForElement(elementId, callBack);
    }
  },5000)
}

function CalculateTotalRewards(){
    var table = document.getElementsByClassName("table-typeC reward")[0];
    var totalReward = 0;
    for(var i = 1; i < table.rows.length; i++){
        var rowText = table.rows[i].cells[4].firstChild.textContent;
        var toFloat = parseFloat(rowText.replace(/,/g, ''));
        totalReward = totalReward + toFloat;
    };
    alert("Your total reward is: " + totalReward);
};

waitForElement("table-typeC reward",function(){
    CalculateTotalRewards();
});