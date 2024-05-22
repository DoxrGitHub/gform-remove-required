// ==UserScript==
// @name         Delete "required"
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Removes elements with specific classes or aria-label attributes
// @author       doxr
// @match        https://docs.google.com/forms/d/e/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';
    function removeElementsByClassesOrAriaLabel() {
        var allElements = document.getElementsByTagName('*');
        var elementsToRemove = [];
        for (var i = 0; i < allElements.length; i++) {
            var element = allElements[i];
            if (element.classList.contains('nUvMO') && element.classList.contains('FUQCPb')) {
                elementsToRemove.push(element);
            }
            else if (element.getAttribute('aria-label') === 'Required question') {
                elementsToRemove.push(element);
            }
            else if (element.classList.contains('zAVwcb') || element.classList.contains('md0UAd')) {
                elementsToRemove.push(element);
            }
        }
        for (var j = 0; j < elementsToRemove.length; j++) {
            elementsToRemove[j].parentNode.removeChild(elementsToRemove[j]);
        }
    }
    setTimeout(removeElementsByClassesOrAriaLabel, 3000); // Execute after 3 seconds cus forms is annoying asf
})();
