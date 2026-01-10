let Images = [
    'img/bird-rock.jpg',
    'img/bird-tree.jpg',
    'img/cheetah.jpg',
    'img/clouds.png',
    'img/duck.jpg',
    'img/lake.jpg',
    'img/mountain.jpg',
    'img/neo-city.jpg',
    'img/night-sky.jpg',
    'img/snowy-lake-and-mountain.jpg',
    'img/snowy-tree.jpg',
    'img/vortex.jpg'
];

let currentIndex = 0;
const dialogRef = document.getElementById('ImageDialog');

function renderImages() {
    let MainSectionRef = document.getElementById('MainSection');
    for (let index = 0; index < Images.length; index++) {
        MainSectionRef.innerHTML += getImageHTML(index);
    }
}

function getImageHTML(index) {
    return `<img onclick="openDialog(${index})" src="${Images[index]}" class="image">`
}

function openDialog(index) {
    currentIndex = index;
    setDialogImage();
    dialogRef.showModal();
}

function setDialogImage() {
    const img = document.getElementById("currentImage");
    img.src = Images[currentIndex];

    let pRef = document.getElementById("currentImageNumber");
    pRef.innerHTML = `${currentIndex + 1}/${Images.length}`
}

function closeDialog() {
    dialogRef.close();
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % Images.length;
    currentImage.src = Images[currentIndex];
    setDialogImage();
}

function showPreviousImage() {
    currentIndex = (currentIndex - 1 + Images.length) % Images.length;
    currentImage.src = Images[currentIndex];
    setDialogImage();
}