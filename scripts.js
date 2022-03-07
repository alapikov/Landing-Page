pageIsLoaded = window.onload;

pageIsLoaded = setTimeout(function s1Animate() {
    const cloud = document.querySelector('#cloud');
    cloud.style.cssText += 'animation-name: s1Cloud;animation-duration: 1.8s;animation-timing-function: cubic-bezier(0.38, 0, 0.33, 1);animation-iteration-count: 1; animation-fill-mode: forwards;';

    const solutions = document.querySelector('#solutions');
    solutions.style.cssText += 'animation-name: s1Solutions;animation-duration: 1.8s;animation-timing-function: cubic-bezier(0.38, 0, 0.33, 1);animation-iteration-count: 1; animation-fill-mode: forwards;';

    const foreveryone = document.querySelector('#foreveryone');
    foreveryone.style.cssText += 'animation-name: s1Foreveryone;animation-duration: 1.8s;animation-timing-function: cubic-bezier(0.88, 0, 0.33, 1);animation-iteration-count: 1; animation-fill-mode: forwards;'
}, 200);