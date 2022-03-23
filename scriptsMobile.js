// not ultra-wide screens (16:9 to 17.5:9) optimizations

const screenRatio = (document.documentElement.clientHeight  / document.documentElement.clientWidth).toFixed(3);

console.log('screenRatio is: ' + screenRatio);

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
