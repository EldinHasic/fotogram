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
    'img/mountain2.jpg',
    'img/snowy-tree.jpg',
    'img/vortex.jpg'
];

let currentIndex = 0;
const DIALOGREF = document.getElementById('myDialog');
const HEADERDIALOGREF = document.getElementById('HeaderDialog');

//Template Function Main Section//
function renderImages() {
    let MainSectionRef = document.getElementById('SectionMain');
    for (let index = 0; index < Images.length; index++) {
        MainSectionRef.innerHTML += getImageHTML(index);
    }
}

//Add Images Dynamic Function//
function getImageHTML(index) {
    return `<img onclick="openDialog(${index})" tabindex="0" role="button" onkeydown="if(event.key==='Enter') openDialog(${index})" src="${Images[index]}" alt="fotogram-image${index + 1}" class="image">`
}

//Open Dialog Function//
function openDialog(index) {
    currentIndex = index;
    setDialogImage();
    setImageTitle();
    DIALOGREF.showModal();
}

//Set Image in Dialog Dynamic Function//
function setDialogImage() {
    const IMG = document.getElementById("currentImage");
    IMG.src = Images[currentIndex];

    let pRef = document.getElementById("currentImageNumber");
    pRef.innerHTML = `${currentIndex + 1}/${Images.length}`
}

//Set Dialog Image Title Dynamic Function//
function setImageTitle() {
    const IMAGEPATH = Images[currentIndex];
    const FILENAME = IMAGEPATH.split("/").pop();
    const TITLE = FILENAME.split(".")[0]; /* transforms string into array and returns the designated array index */
    const HEADERDIALOGREF = document.getElementById('ImageTitle');
    HEADERDIALOGREF.innerText = TITLE;
}

//Bubbling Protection Function//
function BubblingProtec(event) {
    event.stopPropagation();
}

//Close Dialog Function//
function closeDialog() {
    DIALOGREF.close();
}

//Switch to next Image Function//
function showNextImage() {
    currentIndex = (currentIndex + 1) % Images.length;
    currentImage.src = Images[currentIndex];
    setDialogImage();
    setImageTitle();
}

//Switch to previous Image Function// 
function showPreviousImage() {
    currentIndex = (currentIndex - 1 + Images.length) % Images.length;
    currentImage.src = Images[currentIndex];
    setDialogImage();
    setImageTitle();
}