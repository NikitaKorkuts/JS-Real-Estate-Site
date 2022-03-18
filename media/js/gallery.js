let imgs = document.getElementsByClassName('gallery__img');
let gallery_sect = document.getElementById('gallery');

let moreBtn = document.getElementById('more-btn'),
    lessBtn = document.getElementById('less-btn');

function makeLess() {
	for(let i = 9; i < imgs.length; i++) {
		imgs[i].style.display = 'none';
    }

    lessBtn.style.display = 'none';
    moreBtn.style.display = 'block';
}

function makeMore() {
	for(let i = 0; i < imgs.length; i++) {
		imgs[i].style.display = 'block';
    }

    lessBtn.style.display = 'block';
    moreBtn.style.display = 'none';
}

function addGalleryImgs(images) {
    let gallery = document.getElementsByClassName('gallery')[0];

    for(let i = 0; i < images.length; i++) {

        let a = document.createElement('A');
        a.className = 'gallery__img';
        a.href = images[i];
        a.dataset.lightbox = 'roadtrip'

        let img = document.createElement('IMG');
        img.src = images[i];

        gallery.appendChild(a);
        a.appendChild(img);

        defineButton();
    }
}

function removeGalleryImgs() {
    while(imgs[0]) {
        imgs[0].parentNode.removeChild(imgs[0]);
    }

    defineButton();
}

function defineButton() {
    if(imgs.length > 9) {
        makeLess();
    } else {
        lessBtn.style.display = 'none';
        moreBtn.style.display = 'none';
    }
}





