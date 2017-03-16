var img;

function preload() {
  img = loadImage("104.jpg", "104-b.jpg");
}

function light(sw) {
    var pic;
    if (sw == 0) {
        pic = "104.jpg"
    } else {
        pic = "104-b.jpg"
    }
    document.getElementById('myImage').src = pic;
}
