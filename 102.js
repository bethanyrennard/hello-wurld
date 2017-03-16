var img;

function preload() {
  img = loadImage("102.jpg", "102-b.jpg");
}

function light(sw) {
    var pic;
    if (sw == 0) {
        pic = "102.jpg"
    } else {
        pic = "102-b.jpg"
    }
    document.getElementById('myImage').src = pic;
}
