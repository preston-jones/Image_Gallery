let travelGallery = ['img/travel/1.jpg', 'img/travel/2.jpg', 'img/travel/3.jpg', 'img/travel/4.jpg', 'img/travel/5.jpg', 'img/travel/6.jpg', 'img/travel/7.jpg', 'img/travel/8.jpg', 'img/travel/9.jpg', 'img/travel/10.jpg', 'img/travel/11.jpg', 'img/travel/12.jpg', 'img/travel/13.jpg', 'img/travel/14.jpg', 'img/travel/15.jpg', 'img/travel/16.jpg', 'img/travel/17.jpg', 'img/travel/18.jpg', 'img/travel/19.jpg', 'img/travel/20.jpg'];
let foodGallery = ['img/food/1.jpg', 'img/food/2.jpg', 'img/food/3.jpg', 'img/food/4.jpg', 'img/food/5.jpg', 'img/food/6.jpg', 'img/food/7.jpg', 'img/food/8.jpg', 'img/food/9.jpg', 'img/food/10.jpg'];
let portraitGallery = ['img/portrait/1.jpg', 'img/portrait/2.jpg', 'img/portrait/3.jpg', 'img/portrait/4.jpg', 'img/portrait/5.jpg', 'img/portrait/6.jpg', 'img/portrait/7.jpg', 'img/portrait/8.jpg', 'img/portrait/9.jpg', 'img/portrait/10.jpg'];
let currentArray;
let loadedGallery;

function loadGallery(gallery) {
    checkArray(gallery);
    document.getElementById('gallery-container').innerHTML = '';
    for (let i = 0; i < gallery.length; i++) {
        document.getElementById('gallery-container').innerHTML += generateGallery(gallery,i);
    }
}

function generateGallery(gallery,index) {
    let thumbnail = `${gallery[index]}`;
    return `
    <div class="thumbnail-card" onclick="generateImageContainer('${currentArray}',${index})">
        <div class="thumbnail-overlay"></div>
        <img class="thumbnail" src="${thumbnail}">
    </div>
    `;
}

function generateImageContainer(currentArray,index) {
    document.getElementById('gallery-container').innerHTML += `
    <div class="full-image-container d-none" id="full-image-container">
    </div>
    `;
    loadImage(currentArray,index)
    document.getElementById('full-image-container').classList.remove('d-none');
}

function loadImage(currentArray,index) {
    checkImage(currentArray);
    document.getElementById('full-image-container').innerHTML = '';
    document.getElementById('full-image-container').innerHTML += `
    <div class="close" onclick="closeImage()"><img class="close-icon" src="icons/close.svg"></div>
    <img class="full-image" src="${loadedGallery[index]}">
    <div class="arrow" id="arrow-right" onclick="nextImage('${currentArray}',${index})"></div>
    <div class="arrow" id="arrow-left" onclick="prevImage('${currentArray}',${index})"></div>
    `;
}

function closeImage() {
    document.getElementById('full-image-container').classList.add('d-none');
    showOverflow();
}

function overflowHidden() {
    document.getElementById('body').classList.add('overflow-hidden');
}

function showOverflow() {
    document.getElementById('body').classList.remove('overflow-hidden');
}

function nextImage(currentArray, index) {
    if (index < loadedGallery.length - 1) {
        loadImage(currentArray,index+1);
    }

    else {
        loadImage(currentArray,0);
    }
}

function prevImage(currentArray, index) {
    if (index > 0) {
        loadImage(currentArray,index-1);
    }

    else {
        let prevImage = loadedGallery.length;
        loadImage(currentArray, prevImage-1);
    }
}

function checkArray(array){
    /* if more Galleries, use for() Loop for each Gallerie */
    if (array[0].includes('travel')) {
        currentArray = 'travelGallery';
    } else if (array[0].includes('food')) {
        currentArray = 'foodGallery';
    }else{
        currentArray = 'portraitGallery'
    }
}

function checkImage(currentArray){
    while (currentArray ==  'travelGallery')
        return loadedGallery = travelGallery;
    while (currentArray ==  'foodGallery')
        return loadedGallery = foodGallery;
    while (currentArray ==  'portraitGallery')
        return loadedGallery = portraitGallery;
    }
