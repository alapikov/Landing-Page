pageIsLoaded = window.onload;

(function loadScriptsMobile() {
    if (document.documentElement.clientWidth <= 490) {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'scriptsMobile.js';
        document.head.appendChild(script);
    }
} ());

(function loadScriptsTablet() {
    if (document.documentElement.clientWidth >= 491) {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'scriptsTablet.js';
        document.head.appendChild(script);
    }
} ());

// animations on scroll / on pageload

pageIsLoaded = setTimeout(function s1Animate() {
    const cloud = document.querySelector('#s1Cloud');
    cloud.style.cssText += 'animation-name: s1Cloud;animation-duration: 1.8s;animation-timing-function: cubic-bezier(0.38, 0, 0.33, 1);animation-iteration-count: 1; animation-fill-mode: forwards;';

    const solutions = document.querySelector('#s1Solutions');
    solutions.style.cssText += 'animation-name: s1Solutions;animation-duration: 1.8s;animation-timing-function: cubic-bezier(0.38, 0, 0.33, 1);animation-iteration-count: 1; animation-fill-mode: forwards;';

    const foreveryone = document.querySelector('#s1Foreveryone');
    foreveryone.style.cssText += 'animation-name: opacity0to1;animation-duration: 1.8s;animation-timing-function: cubic-bezier(0.88, 0, 0.33, 1);animation-iteration-count: 1; animation-fill-mode: forwards;';

}, 200);

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
    const s3Havealook = document.querySelector('#s3Havealook');
    const s3Inside = document.querySelector('#s3Inside');
    const animationOn = 'animation-name: opacity0to1;animation-duration: 1s;animation-timing-function: cubic-bezier(0.59, 0, 0.43, 1);animation-iteration-count: 1; animation-fill-mode: forwards;';
    function checkAndAnimate() {
        const scroll = window.scrollY;
        if (scroll >= 1460) {
            s3Havealook.style.cssText += animationOn;
            setTimeout(() => {s3Inside.style.cssText += animationOn}, 500)
            clearInterval(s3Caption);
        }
    }
    const s3CaptionTimer = setInterval(checkAndAnimate, 300); 
} ());

(function s3Caption2Animate() {
    const andgetdeeper = document.querySelector('#andgetdeeper');
    const withvirtualtour = document.querySelector('#withvirtualtour');
    const animationOn = 'animation-name: opacity0to1;animation-duration: 1s;animation-timing-function: cubic-bezier(0.59, 0, 0.43, 1);animation-iteration-count: 1; animation-fill-mode: forwards;';
    function checkAndAnimate() {
        const scroll = window.scrollY;
        if (scroll >= 1920) {
            andgetdeeper.style.cssText += animationOn;
            setTimeout(() => {withvirtualtour.style.cssText += animationOn}, 500)
            clearInterval(s3Caption);
        }
    }
    const s3CaptionTimer = setInterval(checkAndAnimate, 300); 
} ());


// other animations


(function s3ImgsAnimate() {
    const s3ImgsCont = document.querySelector('#s3ImgsCont');
    const s3ImgsLeft = document.querySelector('#s3ImgsLeft');
    const s3ImgsRight = document.querySelector('#s3ImgsRight');
    let shiftIndex = 0;
    
    function incrShiftIndex() {
        if (shiftIndex < 14) {
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
    s3ImgsLeft.addEventListener('click', decrShiftIndex);
    s3ImgsRight.addEventListener('click', incrShiftIndex);

    function shiftContainer(shiftProp) {  
        if (shiftProp === 'shiftRight') {
            switch (shiftIndex) {
                case 14:
                    break;
                case 0:
                    s3ImgsCont.style.transform = 'translateX(-6.566%)';
                    break;
                case 1: 
                    s3ImgsCont.style.transform = 'translateX(-13.132%)';
                    break;
                case 2:
                    s3ImgsCont.style.transform = 'translateX(-19.698%)';
                    break;
                case 3: 
                    s3ImgsCont.style.transform = 'translateX(-26.264%)';
                    break;
                case 4:
                    s3ImgsCont.style.transform = 'translateX(-32.83%)';
                    break;
                case 5: 
                    s3ImgsCont.style.transform = 'translateX(-39.396%)';
                    break;
                case 6:
                    s3ImgsCont.style.transform = 'translateX(-45.962%)';
                    break;
                case 7:
                    s3ImgsCont.style.transform = 'translateX(-52.528%)';
                    break;
                case 8:
                    s3ImgsCont.style.transform = 'translateX(-59.094%)';
                    break;
                case 9: 
                    s3ImgsCont.style.transform = 'translateX(-65.66%)';
                    break;
                case 10:
                    s3ImgsCont.style.transform = 'translateX(-72.226%)';
                    break;
                case 11:
                    s3ImgsCont.style.transform = 'translateX(-78.792%)';
                    break; 
                case 12:
                    s3ImgsCont.style.transform = 'translateX(-85.358%)';
                    break;
                case 13:
                    s3ImgsCont.style.transform = 'translateX(-91.924%)';
                    break;       
            }
        }
        if (shiftProp === 'shiftLeft') {
            switch (shiftIndex) {
                case 0:
                    break;
                
                case 1:
                    s3ImgsCont.style.transform = 'translateX(0%)';
                    break; 
                case 2:
                    s3ImgsCont.style.transform = 'translateX(-6.566%)';
                    break;
                case 3:
                    s3ImgsCont.style.transform = 'translateX(-13.132%)';
                    break; 
                case 4:
                    s3ImgsCont.style.transform = 'translateX(-19.698%)';
                    break;
                case 5:
                    s3ImgsCont.style.transform = 'translateX(-26.264%)';
                    break; 
                case 6:
                    s3ImgsCont.style.transform = 'translateX(-32.83%)';
                    break;
                case 7:
                    s3ImgsCont.style.transform = 'translateX(-39.396%)';
                    break;
                case 8:
                    s3ImgsCont.style.transform = 'translateX(-45.962%)';
                    break;
                case 9:
                    s3ImgsCont.style.transform = 'translateX(-52.528%)';
                    break; 
                case 10:
                    s3ImgsCont.style.transform = 'translateX(-59.094%)';
                    break;
                case 11: 
                    s3ImgsCont.style.transform = 'translateX(-65.66%)';
                    break;
                case 12:
                    s3ImgsCont.style.transform = 'translateX(-72.226%)';
                    break;
                case 13:
                    s3ImgsCont.style.transform = 'translateX(-78.792%)';
                    break;
                case 14:
                    s3ImgsCont.style.transform = 'translateX(-85.358%)';
                    break;
            }
        }
    }
} ());

(function s5FeedbackAnimate() {
    const s5feedbackCont = document.querySelector('#s5feedbackCont');
    const s5ArrowRight = document.querySelector('#s5ArrowRight');
    const s5ArrowLeft = document.querySelector('#s5ArrowLeft');
    let shiftIndex = 0;
    
    function incrShiftIndex() {
        if (shiftIndex < 6) {
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
    s5ArrowLeft.addEventListener('click', decrShiftIndex);
    s5ArrowRight.addEventListener('click', incrShiftIndex);

    function shiftContainer(shiftProp) {  
        if (shiftProp === 'shiftRight') {
            switch (shiftIndex) {
                case 6:
                    break;

                case 0:
                    s5feedbackCont.style.transform = 'translateX(-14%)';
                    break;
                case 1: 
                    s5feedbackCont.style.transform = 'translateX(-28%)';
                    break;
                case 2:
                    s5feedbackCont.style.transform = 'translateX(-42%)';
                    break;
                case 3: 
                    s5feedbackCont.style.transform = 'translateX(-56%)';
                    break;
                case 4:
                    s5feedbackCont.style.transform = 'translateX(-70%)';
                    break;
                case 5: 
                    s5feedbackCont.style.transform = 'translateX(-86%)';
                    break;
            }
        }
        if (shiftProp === 'shiftLeft') {
            switch (shiftIndex) {
                case 0:
                    break;
                
                case 1:
                    s5feedbackCont.style.transform = 'translateX(0%)';
                    break; 
                case 2:
                    s5feedbackCont.style.transform = 'translateX(-14%)';
                    break;
                case 3:
                    s5feedbackCont.style.transform = 'translateX(-28%)';
                    break; 
                case 4:
                    s5feedbackCont.style.transform = 'translateX(-42%)';
                    break;
                case 5:
                    s5feedbackCont.style.transform = 'translateX(-56%)';
                    break; 
                case 6:
                    s5feedbackCont.style.transform = 'translateX(-70%)';
                    break;
            }
        }
    }
} ());

(function footerTothetopAnimate() {
    const fB5Tothetop = document.querySelector('#fB5Tothetop');
    fB5Tothetop.addEventListener('click', tothetop);

    function tothetop() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
} ());


    
