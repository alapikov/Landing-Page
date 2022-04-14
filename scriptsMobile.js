// not ultra-wide screens (16:9 to 17.5:9) optimizations

const screenRatio = (document.documentElement.clientHeight  / document.documentElement.clientWidth).toFixed(3);

console.log('screenRatio is: ' + screenRatio);

// (function adaptHeader() {
//     if (screenRatio <= 1.945) {
//         const header = document.querySelector('#header');
//         header.style.height = '46px';
//         const headerLogo = document.querySelector('#headerLogo');
//         headerLogo.style.width = '86px';
//         const headerMenuIcon = document.querySelector('#headerMenuIcon');
//         headerMenuIcon.style.width = '28px';
//         headerMenuIcon.style.marginTop = '9px';
//     }
// } ());

(function adaptS2ContSize() {
	if (screenRatio <= 1.945) {
		const s2FeaturesWindow = document.querySelector('#s2FeaturesWindow');
		s2FeaturesWindow.style.marginBottom = '20px';
		const s2FeatureImg_s = document.querySelectorAll('.s2FeatureImg');
		s2FeatureImg_s.forEach(img => {
			img.style.marginBottom = '-2px';
		});
	}
} ());

(function adaptS3Caption() {
	if (screenRatio <= 1.945) {
		const s3Caption = document.querySelector('#s3Caption');
		s3Caption.style.marginBottom = '20px'; 
	}
} ());

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
	s2ArrowRight.addEventListener('click', incrShiftIndex);
	s2ArrowLeft.addEventListener('click', decrShiftIndex);
    
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
