/*var i = 0;
var images = [];
var time = 10000;

images[0] = 'p1.jpg';
images[1] = 'p2.jpg';
images[2] = 'p3.jpg';

function changeIMG(){
	document.slide.src = images[i];
	if(i < images.length - 1){
		i++;
	}
	else {
		i = 0;
	}
	setTimeout("changeIMG()" , time);
}
window.onload = changeIMG;
$('a').on('click', function(e){
	if(this.hash !== ''){
		e.preventDefault();
		const hash = this.hash;
		$('html, body').animate({
			scrollTop: $(hash).offset().top
		},800);
	}
})*/