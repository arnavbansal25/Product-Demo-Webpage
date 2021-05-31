function changeimg(img) {
    document.getElementById('display-img').src = img.src;
    document.getElementById('display-img').index = img.index;
}

function nextImage(n) {
    var curr = document.getElementById('display-img');
    var imgarr = document.getElementsByClassName("thumb");

    for (i = 0; i < imgarr.length; i++) {
        if (imgarr[i].src == curr.src) {
            t = (i+n+imgarr.length) % (imgarr.length);
            curr.src = imgarr[t].src;
            break;
        }
    }
}