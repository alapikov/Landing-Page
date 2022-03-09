pageIsLoaded = window.onload;

(function adaptHeader() {
    const screenRatio = (document.documentElement.clientHeight  / document.documentElement.clientWidth).toFixed(3);
    if (screenRatio <= 1.944) {
        const header = document.querySelector('#header');
        header.style.height = '66px';
        const headerLogo = document.querySelector('#headerLogo');
        headerLogo.style.width = '110px';
        const headerMenuIcon = document.querySelector('#headerMenuIcon');
        headerMenuIcon.style.width = '36px';
        headerMenuIcon.style.marginTop = '7px';
    }
} ());

pageIsLoaded = setTimeout(function s1Animate() {
    const cloud = document.querySelector('#cloud');
    cloud.style.cssText += 'animation-name: s1Cloud;animation-duration: 1.8s;animation-timing-function: cubic-bezier(0.38, 0, 0.33, 1);animation-iteration-count: 1; animation-fill-mode: forwards;';

    const solutions = document.querySelector('#solutions');
    solutions.style.cssText += 'animation-name: s1Solutions;animation-duration: 1.8s;animation-timing-function: cubic-bezier(0.38, 0, 0.33, 1);animation-iteration-count: 1; animation-fill-mode: forwards;';

    const foreveryone = document.querySelector('#foreveryone');
    foreveryone.style.cssText += 'animation-name: opacity0to1;animation-duration: 1.8s;animation-timing-function: cubic-bezier(0.88, 0, 0.33, 1);animation-iteration-count: 1; animation-fill-mode: forwards;';

}, 200);

pageIsLoaded = setTimeout(function s1ArrowAnimate() {
    const s1Arrow = document.querySelector('#s1Arrow');
    s1Arrow.style.cssText += 'animation-name: opacity0to1;animation-duration: 1.8s;animation-timing-function: cubic-bezier(0.88, 0, 0.33, 1);animation-iteration-count: 1; animation-fill-mode: forwards;';
}, 600);

(function s2LogoAnimate() {
    const s2Logo = document.querySelector('#s2Logo');
    const animationOn = 'animation-name: opacity0to1;animation-duration: 2.5s;animation-timing-function: cubic-bezier(0.59, 0, 0.43, 1);animation-iteration-count: 1; animation-fill-mode: forwards;';
    function checkAndAnimate() {
        const scroll = window.scrollY;
        if (scroll >= 315) {
            s2Logo.style.cssText += animationOn;
            clearInterval(s2LogoTimer);
        }
    }
    const s2LogoTimer = setInterval(checkAndAnimate, 300); 
} ());




    
