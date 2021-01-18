// code du slider 

var slide = new Array("assets/images/kdbWallpaper.jpg", "assets/images/rmWallpaper.jpg", "assets/images/njrWallpaper.jpg");
var numero = 0;

function changerSlide(direction) {
    numero += direction;
    if (numero < 0) {
        numero = slide.length -1;
    }

    if (numero > slide.length-1) {
        numero = 0;
    }
    document.getElementById("heroSlideImg").src = slide[numero];
}

