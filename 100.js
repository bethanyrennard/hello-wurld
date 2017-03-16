var img;

function preload() {
  img = loadImage("100.jpg", "100-b.jpg");
}

function light(sw) {
    var pic;
    if (sw == 0) {
        pic = "100-a.jpg"
    } else {
        pic = "101-a.jpg"
    }
    document.getElementById('myImage').src = pic;
}
