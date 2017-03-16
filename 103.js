var img;

function preload() {
  img = loadImage("103.jpg", "103-b.jpg");
}

function light(sw) {
    var pic;
    if (sw == 0) {
        pic = "103.jpg"
    } else {
        pic = "103-b.jpg"
    }
    document.getElementById('myImage').src = pic;
}
