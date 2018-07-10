document.getElementById('slider-right').onclick = sliderRight;
document.getElementById('slider-left').onclick = sliderLeft;

var maxNumImg = 6; 

var imgArray = new Array();

var sizeBox = 37.3; /*Размер картиник вместе с margin*/

imgArray[0] = document.getElementById('img1') 
imgArray[1] = document.getElementById('img2') 
imgArray[2] = document.getElementById('img3') 
imgArray[3] = document.getElementById('img4') 
imgArray[4] = document.getElementById('img5') 
imgArray[5] = document.getElementById('img6') 

imgArray[0].style.left = 0;
imgArray[1].style.left = sizeBox + "vw";
imgArray[2].style.left = 2*sizeBox + "vw";
imgArray[3].style.left = 3*sizeBox + "vw";
imgArray[4].style.left = 4*sizeBox + "vw";
imgArray[5].style.left = 5*sizeBox + "vw";

var numImg = 2;

var left = 0;

imgArray[numImg - 1].style.opacity = 1;

window.onresize = doALoadOfStuff;

function doALoadOfStuff() {
	/*imgArray[0].style.width = 25 + "vw";
	imgArray[1].style.width = 25 + "vw";
	imgArray[2].style.width = 25 + "vw";
	imgArray[3].style.width = 25 + "vw";
	imgArray[4].style.width = 25 + "vw";
	imgArray[5].style.width = 25 + "vw";*/
    /*При изменении окна*/
	/*document.getElementById('slider').style.height = document.getElementById('img1').clientHeight; */
}

function sliderRight(){  
    numImg++;

	if(numImg > maxNumImg){
		numImg = 1;
	}

    if(numImg - 1 > 0){
   		imgArray[numImg - 2].style.opacity = 0.5;
	}else{
		imgArray[maxNumImg - 1].style.opacity = 0.5;
	}

	imgArray[numImg - 1].style.opacity = 1;

	left = left - sizeBox;

	for(var i = 0; i < maxNumImg; i++){
		imgArray[i].style.left = left + i*sizeBox + "vw"; /*сдивг соотвеств img*/
		console.log(imgArray[i].style.left);
		console.log(i);
	}

    /*if(left < - (polosa.clientWidth - 2*(img.width + 226))) {
            left = img.width + 226; 
    }*/
}

function sliderLeft(){  
	numImg--;

    if(numImg < 1){
		numImg = maxNumImg;
	}

    if(numImg < maxNumImg){
    	imgArray[numImg].style.opacity = 0.5;
	}else{
		imgArray[0].style.opacity = 0.5;
	}

	imgArray[numImg - 1].style.opacity = 1;

   	/*if(left > img.width + 226) {
            left = -(polosa.clientWidth - 2*(img.width + 226));
    }*/

	left = left + sizeBox;

	for(var i = 0; i < maxNumImg; i++){
		imgArray[i].style.left = left + i*sizeBox + "vw";
		console.log(imgArray[i].style.left);
		console.log(i);
	}
}
