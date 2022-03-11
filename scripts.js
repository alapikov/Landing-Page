pageIsLoaded = window.onload

// not ultra-wide screens (16:9 to 17.5:9) optimizations

const screenRatio = (document.documentElement.clientHeight  / document.documentElement.clientWidth).toFixed(3);

(function adaptHeader() {
    if (screenRatio <= 1.945) {
        const header = document.querySelector('#header');
        header.style.height = '66px';
        const headerLogo = document.querySelector('#headerLogo');
        headerLogo.style.width = '110px';
        const headerMenuIcon = document.querySelector('#headerMenuIcon');
        headerMenuIcon.style.width = '36px';
        headerMenuIcon.style.marginTop = '7px';
    }
} ());

(function adaptS2ContSize() {
    if (screenRatio <= 1.944) {
        const s2FeaturesWindow = document.querySelector('#s2FeaturesWindow');
        s2FeaturesWindow.style.marginBottom = '35px;' 
    }
} ());

// animations on scroll / on pageload

pageIsLoaded = setTimeout(function s1Animate() {
    const cloud = document.querySelector('#cloud');
    cloud.style.cssText += 'animation-name: s1Cloud;animation-duration: 1.8s;animation-timing-function: cubic-bezier(0.38, 0, 0.33, 1);animation-iteration-count: 1; animation-fill-mode: forwards;';

    const solutions = document.querySelector('#solutions');
    solutions.style.cssText += 'animation-name: s1Solutions;animation-duration: 1.8s;animation-timing-function: cubic-bezier(0.38, 0, 0.33, 1);animation-iteration-count: 1; animation-fill-mode: forwards;';

    const foreveryone = document.querySelector('#foreveryone');
    foreveryone.style.cssText += 'animation-name: opacity0to1;animation-duration: 1.8s;animation-timing-function: cubic-bezier(0.88, 0, 0.33, 1);animation-iteration-count: 1; animation-fill-mode: forwards;';

}, 200);

// pageIsLoaded = setTimeout(function s1ArrowAnimate() {
//     const s1Arrow = document.querySelector('#s1Arrow');
//     s1Arrow.style.cssText += 'animation-name: opacity0to1;animation-duration: 1.8s;animation-timing-function: cubic-bezier(0.88, 0, 0.33, 1);animation-iteration-count: 1; animation-fill-mode: forwards;';
// }, 600);

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

(function s3CaptionAnimate() {
    const havealook = document.querySelector('#havealook');
    const inside = document.querySelector('#inside');
    const animationOn = 'animation-name: opacity0to1;animation-duration: 1s;animation-timing-function: cubic-bezier(0.59, 0, 0.43, 1);animation-iteration-count: 1; animation-fill-mode: forwards;';
    function checkAndAnimate() {
        const scroll = window.scrollY;
        if (scroll >= 1460) {
            havealook.style.cssText += animationOn;
            setTimeout(() => {inside.style.cssText += animationOn}, 500)
            clearInterval(s3Caption);
        }
    }
    const s3CaptionTimer = setInterval(checkAndAnimate, 300); 
} ());


// other animations


const s2FeaturesCont = document.querySelector('#s2FeaturesCont');
const s2ArrowLeft = document.querySelector('#s2ArrowLeft');
const s2ArrowRight = document.querySelector('#s2ArrowRight');
let shiftIndex = 0;

function incrShiftIndex() {
    if (shiftIndex < 4) {
        shiftContainer('shiftRight');
        shiftIndex++;
    }
}

function decrShiftIndex() {
    if (shiftIndex > 0) {
        shiftContainer('shiftLeft');
        shiftIndex--;
    }
    
}
s2ArrowRight.addEventListener("click", incrShiftIndex);
s2ArrowLeft.addEventListener("click", decrShiftIndex);

function shiftContainer(shiftProp) {
    if (shiftProp === 'shiftRight') {
        switch (shiftIndex) {
            case 4:
                break;
            case 0:
                S2FEATURESCONT.style.transform = 'translateX(-20.8%)';
                break;
            case 1:
                s2FeaturesCont.style.transform = 'translateX(-41.6%)';
                break;
            case 2:
                s2FeaturesCont.style.transform = 'translateX(-62.4%)';
                break;
            case 3:
                s2FeaturesCont.style.transform = 'translateX(-83.2%)';
                break;
        }
    }
    if (shiftProp === 'shiftLeft') {
        switch (shiftIndex) {
            case 0:
                break;
            case 4:
                s2FeaturesCont.style.transform = 'translateX(-62.4%)';
                break;
            case 3:
                s2FeaturesCont.style.transform = 'translateX(-41.6%)';
                break;
            case 2:
                s2FeaturesCont.style.transform = 'translateX(-20.8%)';
                break;
            case 1:
                s2FeaturesCont.style.transform = 'translateX(0%)';
                break;
        }
    }
}


    
