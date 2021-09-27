var progress = document.getElementById('progressBar');
var sectionOne = document.getElementById('firstSection');
var sectionTwo = document.getElementById('secSection');
var container = document.getElementById ('container');
var imagesLayerOne = document.getElementById('imagesLayerOne');
var imagesLayerTwo = document.getElementById('imagesLayerTwo');
var imagesLayerThree = document.getElementById('imagesLayerThree');
var imagesLayerFour = document.getElementById('imagesLayerFour');
var imagesLayerFive = document.getElementById('imagesLayerFive');
var imagesLayerSix = document.getElementById('imagesLayerSix');
var sky = document.getElementById('sky');
var mount = document.getElementById('mount');
var rightHill = document.getElementById('right-hill');
var leftHill = document.getElementById('left-hill');
var land = document.getElementById('land');
var person = document.getElementById('person');

var containerPosition = {w:800, h:200};
var sectionOnePos = {w: 800, h:100};
var sectionTwoPos = {w:800, h:100};
var imagesLayerOnePosition = {x:0, y:0, w:1000, h:100};  //later figure out why need to make position x = 0, y = 0, and 0 wrt what?
var imagesLayerTwoPosition = {x:0, y:0, w:1000, h:100};
var imagesLayerThreePosition = {x:0, y:0, w:1000, h:100};
var imagesLayerFourPosition = {x:0, y:0, w:1000, h:100};
var imagesLayerFivePosition = {x:0, y:0, w:1000, h:100};
var imagesLayerSixPosition = {x:0, y:0, w:1000, h:100};

var skyPos = {x:0, y:0, w:1000, h:100};
var mountPos = {x:0, y:0, w:1000, h:100};
var rightHillPos = {x:0, y:0, w:1000, h:100};
var leftHillPos = {x:0, y:0, w:1000, h:100};
var landPos = {x:0, y:0, w:1000, h:100};
var personPos = {x:0, y:0, w:1000, h:100};


window.onbeforeunload = function () {
    window.scrollTo (0,0);
}

window.addEventListener("scroll", tghScroll);
window.addEventListener("mousemove", cursorGerak);

function tghScroll () {
    console.log("inner height:", window.innerHeight);
    console.log("scrollY:", window.scrollY);
    console.log("container scroll height :", container.scrollHeight);
    console.log("sectionTwo offset TOP:", sectionTwo.offsetTop);

    var width = window.scrollY / (container.scrollHeight - window.innerHeight) * 100 ;

    progress.style.width = width + '%';
    // progress.innerHTML = width + '%';
}
 
function cursorGerak (evt) {
    console.log(evt);
    var mouse = {x:evt.pageX - container.offsetLeft, y:evt.pageY - container.offsetTop}; // try to see if can go by section instead of container
    imagesLayerOnePosition.x = -(mouse.x*0.01) + (containerPosition.w /2 - imagesLayerOnePosition.w/2);
    imagesLayerOne.style.left = imagesLayerOnePosition.x + 'px';

    imagesLayerTwoPosition.x = -(mouse.x*0.02) + (containerPosition.w /2 - imagesLayerTwoPosition.w/2);
    imagesLayerTwo.style.left = imagesLayerTwoPosition.x + 'px';

    imagesLayerThreePosition.x = -(mouse.x*0.03) + (containerPosition.w /2 - imagesLayerThreePosition.w/2);
    imagesLayerThree.style.left = imagesLayerThreePosition.x + 'px';

    imagesLayerFourPosition.x = -(mouse.x*0.04) + (containerPosition.w /2 - imagesLayerFourPosition.w/2);
    imagesLayerFour.style.left = imagesLayerFourPosition.x + 'px';

    imagesLayerFivePosition.x = -(mouse.x*0.04) + (containerPosition.w /2 - imagesLayerFivePosition.w/2);
    imagesLayerFive.style.left = imagesLayerFivePosition.x + 'px'

    imagesLayerSixPosition.x = -(mouse.x*0.06) + (containerPosition.w /2 - imagesLayerSixPosition.w/2);
    imagesLayerSix.style.left = imagesLayerSixPosition.x + 'px';


    personPos.x = (-mouse.x*0.05) + (sectionTwoPos.w/2 - personPos.w/2);
    person.style.left = personPos.x + 'px';

    landPos.x = (-mouse.x*0.04) + (sectionTwoPos.w/2 -landPos.w/2);
    land.style.left = landPos.x + 'px';

    rightHillPos.x = (mouse.x*0.03) + (sectionTwoPos.w/2 - rightHillPos.w/2);
    rightHill.style.left = rightHillPos.x + 'px';

    leftHillPos.x = (-mouse.x*0.03) + (sectionTwoPos.w/2 - leftHillPos.w/2);
    leftHill.style.left = leftHillPos.x + 'px';

    mountPos.x = (-mouse.x*0.02) + (sectionTwoPos.w/2 - mountPos.w/2);
    mount.style.left = mountPos.x + 'px';

    skyPos.x = (-mouse.x* 0.01) + (sectionTwoPos.w/2 -skyPos.w/2);
    sky.style.left = skyPos.x + 'px';

}