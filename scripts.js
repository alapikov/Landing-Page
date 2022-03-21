pageIsLoaded = window.onload

// not ultra-wide screens (16:9 to 17.5:9) optimizations

const screenRatio = (document.documentElement.clientHeight  / document.documentElement.clientWidth).toFixed(3);

console.log ('screenRatio is: ' + screenRatio);

(function adaptHeader() {
    if (screenRatio <= 1.945) {
        const header = document.querySelector('#header');
        header.style.height = '46px';
        const headerLogo = document.querySelector('#headerLogo');
        headerLogo.style.width = '86px';
        const headerMenuIcon = document.querySelector('#headerMenuIcon');
        headerMenuIcon.style.width = '28px';
        headerMenuIcon.style.marginTop = '9px';
    }
} ());

(function adaptS2ContSize() {
    if (screenRatio <= 1.945) {
        const s2FeaturesWindow = document.querySelector('#s2FeaturesWindow');
        s2FeaturesWindow.style.marginBottom = '20px';
        const s2FeatureImg_s = document.querySelectorAll('.s2FeatureImg');
        s2FeatureImg_s.forEach(img => {
            img.style.marginBottom = '-2px';
        })
    }
} ());

(function adaptS3Caption() {
    if (screenRatio <= 1.945) {
        const s3Caption = document.querySelector('#s3Caption');
        s3Caption.style.marginBottom = '20px'; 
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

(function s2FeaturesAnimate() {
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
                    s2FeaturesCont.style.transform = 'translateX(-20.8%)';
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
} ());

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

(function footerTothetopAnimate() {
    const fB5Tothetop = document.querySelector('#fB5Tothetop');
    fB5Tothetop.addEventListener('click', tothetop);

    function tothetop() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
} ());


    
