/**
 * Example 1: Global vs Local Scope
 */
let globalCounter = 0; // Global variable

function incrementGlobalCounter() {
    globalCounter++;
    return globalCounter;
}

function localCounterDemo() {
    let localCounter = 0; // Local variable
    localCounter++;
    return localCounter;
}

/**
 * Example 2: Function with Parameters & Return Value
 * Calculates the area of a rectangle.
 */
function calculateRectangleArea(width, height) {
    return width * height;
}

/**
 * Example 3: Reusable Animation Controller
 * Fades in an element using CSS transitions.
 */
function fadeInElement(elementId, duration = 500) {
    const el = document.getElementById(elementId);
    if (!el) return false;
    el.style.transition = `opacity ${duration}ms`;
    el.style.opacity = 1;
    return true;
}

/**
 * Example 4: Trigger DOM Change
 * Changes the text content of an element.
 */
function updateTextContent(elementId, newText) {
    const el = document.getElementById(elementId);
    if (!el) return false;
    el.textContent = newText;
    return true;
}

/**
 * Example 5: Function Composition
 * Uses other functions to animate and update text.
 */
function animateAndUpdate(elementId, newText, duration) {
    fadeInElement(elementId, duration);
    updateTextContent(elementId, newText);
}

function triggerAnimation(element, className) {
  element.classList.add(className);
  // Remove the class after animation ends so it can be triggered again
  element.addEventListener('animationend', function handler() {
    element.classList.remove(className);
    element.removeEventListener('animationend', handler);
  });
}

document.getElementById('trigger-anim-btn').addEventListener('click', function() {
  const box = document.getElementById('js-animated-box');
  triggerAnimation(box, 'animated');
});