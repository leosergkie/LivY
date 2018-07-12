document.getElementById('slider-right').onclick = sliderRight;
document.getElementById('slider-left').onclick = sliderLeft;

var maxNumImg = 6; 

var imgArray = new Array();

var sizeBox = 37.3; /*Размер картинки вместе с margin*/

imgArray[0] = document.getElementById('img1') 
imgArray[1] = document.getElementById('img2') 
imgArray[2] = document.getElementById('img3') 
imgArray[3] = document.getElementById('img4') 
imgArray[4] = document.getElementById('img5') 
imgArray[5] = document.getElementById('img6') 

/*Сдвиг*/
imgArray[0].style.left = 0 + "vw";
imgArray[1].style.left = sizeBox + "vw";
imgArray[2].style.left = 2*sizeBox + "vw";
imgArray[3].style.left = 3*sizeBox + "vw";
imgArray[4].style.left = 4*sizeBox + "vw";
imgArray[5].style.left = 5*sizeBox + "vw";

/*Прозрачность*/
imgArray[0].style.opacity = 0.5;
imgArray[1].style.opacity = 1;
imgArray[2].style.opacity = 0.5;

var numImg = 2;

var offset = 0;

var left = -37;

imgArray[numImg - 1].style.opacity = 1;

window.onresize = doALoadOfStuff;

sliderRight();
sliderLeft();

function doALoadOfStuff() {
	if(document.getElementById('slider').clientWidth <= 920){

	}
    /*При изменении окна*/
}

function sliderRight(){  
	var numRight = 0;

    numImg++;

	if(numImg > maxNumImg){
		numImg = 1;
	}


	for(var i = 0; i < maxNumImg; i++){
		if(parseInt(imgArray[i].style.left, 10) > parseInt(imgArray[numImg - 1].style.left, 10)){
			numRight++;
		}
	}

	if(numRight <= 1){
		firstGoLast();
	}

	console.log(numRight); 

	if(numImg - 1 > 0){
   		imgArray[numImg - 2].style.opacity = 0.5;
	}else{
		imgArray[maxNumImg - 1].style.opacity = 0.5;
	}

	if(numImg - 2 > 0){
   		imgArray[numImg - 3].style.opacity = 0;
	}else{
		if(numImg - 1 > 0){
   			imgArray[maxNumImg - 1].style.opacity = 0;
		}else{
			imgArray[maxNumImg - 2].style.opacity = 0;
		}
	}

	if(numImg < maxNumImg){
		imgArray[numImg].style.opacity = 0.5;
	}else{
		imgArray[0].style.opacity = 0.5;
	}	

	imgArray[numImg - 1].style.opacity = 1;

	for(var i = 0; i < maxNumImg; i++){
		imgArray[i].style.left = (left) + parseInt(imgArray[i].style.left, 10) + "vw"; /*сдивг соотвеств img*/
	}
}

function sliderLeft(){  
	var numLeft = 0;
	numImg--;

    if(numImg < 1){
		numImg = maxNumImg;
	}

	for(var i = 0; i < maxNumImg; i++){
		if(parseInt(imgArray[i].style.left, 10) < parseInt(imgArray[numImg - 1].style.left, 10)){
			numLeft++;
		}
	}

	if(numLeft <= 1){
		lastGoFirst();
	}

	console.log(numLeft);

    if(numImg < maxNumImg){
    	imgArray[numImg].style.opacity = 0.5;
	}else{
		imgArray[0].style.opacity = 0.5;
	}

	if(numImg + 1 < maxNumImg){
   		imgArray[numImg + 1].style.opacity = 0;
	}else{
		if(numImg < maxNumImg){
   			imgArray[0].style.opacity = 0;
		}else{
			imgArray[1].style.opacity = 0;
		}
	}

	if(numImg - 1 > 0){
   		imgArray[numImg - 2].style.opacity = 0.5;
	}else{
		imgArray[maxNumImg - 1].style.opacity = 0.5;
	}

	imgArray[numImg - 1].style.opacity = 1;

	for(var i = 0; i < maxNumImg; i++){
		imgArray[i].style.left = (- left) + parseInt(imgArray[i].style.left, 10) + "vw";
	}
}

function firstGoLast(){
	var imax = 0;
	var imin = 0;

	for(var i = 0; i < maxNumImg; i++){
		if(parseInt(imgArray[imax].style.left, 10) < parseInt(imgArray[i].style.left, 10)){
			imax = i;
		}else{
			if(parseInt(imgArray[imin].style.left, 10) > parseInt(imgArray[i].style.left, 10)){
				imin = i;
			}
		}
	}

	imgArray[imin].style.left = (- left) + parseInt(imgArray[imax].style.left, 10) + "vw";
}

function lastGoFirst(){
	var imax = 0;
	var imin = 0;

	for(var i = 0; i < maxNumImg; i++){
		if(parseInt(imgArray[imax].style.left, 10) < parseInt(imgArray[i].style.left, 10)){
			imax = i;
		}else{
			if(parseInt(imgArray[imin].style.left, 10) > parseInt(imgArray[i].style.left, 10)){
				imin = i;
			}
		}
	}

	imgArray[imax].style.left = (left) + parseInt(imgArray[imin].style.left, 10) + "vw";
}
