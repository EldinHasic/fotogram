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


function renderImages() {
    let MainSectionRef = document.getElementById('MainSection');
    for (let index = 0; index < Images.length; index++) {
        MainSectionRef.innerHTML += getImageHTML(index);
    }
}

function getImageHTML(index) {
    return `<img src="${Images[index]}" class="image">`
}