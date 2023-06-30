
// ========================================
// typing animation
// ========================================
$(document).ready(function(){
    //typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Programmer", "Singer-Rapper", "Soft+Web+Game~Dev", "Designer", "Artist", "Teacher", "& ManyMore"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });  
    });
    var typed = new Typed(".typing3", {
        strings: ["C","C++","OBJ-C","Java","Kotlin","Scala","Python","Ruby","C#","C--","R","Lua","Go","Swift","Ardunio","Dart","Solidity","HTML","XML","CSS","JavaScript","TypeScript","VBScript","Haskell","Matlab","Pl/Sql","SQL","CQL","NoSQL","GraphQL","PHP"],
        typeSpeed:50,
        backSpeed: 20,
        loop: true
    });
    var typed = new Typed(".typing2", {
        strings: ["Programmer", "Singer-Rapper", "Soft+Web+Game~Dev", "Designer", "Artist", "Teacher", "& ManyMore"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
      });
// ========================================
// creating a portfolio tabbed component
// ========================================

const port_btn = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const img_div = document.querySelectorAll(".img-ovelay");

port_btn.addEventListener("click", (e) => {
    // console.log(e.target);

    // we will get which child element was clicked
    const p_btn_clicked = e.target;
    console.log(p_btn_clicked);

     if (!p_btn_clicked.classList.contains("p-btn")) return;
    // always remove the classList first then add the class
    p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));
    // img_div.forEach((curElem) =>
    //   curElem.classList.remove("portfolio-image-active")
    // );

    p_btn_clicked.classList.add("p-btn-active");

    // to find the p-img class number of the images using the btn data attribute number

    const btn_num = p_btn_clicked.dataset.btnNum;
     //console.log(btn_num);

    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
    // console.log(img_active);

    img_div.forEach((curElem) =>
        curElem.classList.add("p-image-not-active")
    );

    img_active.forEach((curElem) =>
        curElem.classList.remove(`p-image-not-active`)
    );
 });
 // ========================================
 //  animated counter number
 // ========================================

const workSection = document.querySelector(".section-work-data");

const workSectionObserve = (entries) => {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    console.log(entries);


    const counterNum = document.querySelectorAll(".counter-numbers");
    // console.log(counterNum);
    const speed = 200;

    counterNum.forEach((curNumber) => {
        const updateNumber = () => {
            const targetNumber = parseInt(curNumber.dataset.number);
            // console.log(targetNumber);
            const initialNumber = parseInt(curNumber.innerText);
            // console.log(initialNumber);
            const incrementNumber = Math.trunc(targetNumber / speed);
            // i am adding the value to the main number
            // console.log(incrementNumber);

            if (initialNumber < targetNumber) {
                curNumber.innerText = `${initialNumber + incrementNumber}+`;
                setTimeout(updateNumber, 10);
            } else {
                curNumber.innerText = `${targetNumber}+`;
            }

        };
        updateNumber();
    });
   
};

const workSecObserver = new IntersectionObserver(workSectionObserve, {
    root: null,
    threshold: 0,
});

workSecObserver.observe(workSection);

// ========================================
//  welcome animation
// ========================================
//<script>
console.clear();

var doc = document;
var flower = doc.querySelector('.flower');
var range = doc.querySelector('.range');

var petalPartMarkup = '<div class="box"> \
                <div class="shape"></div> \
            </div>';

var maxParts = 20;
var maxPetalsDef = 6;
var maxPetals = maxPetalsDef;

var partsFontStepDef = 25 / maxParts;
var partsFontStep = partsFontStepDef;
var huetStep = 150 / maxParts;

createFlower ();

function createFlower () {

    var angle = 360 / maxPetals;

for (var i = 0; i < maxPetals; i++) {
    var petal = createPetal(); 
    var currAngle = angle * i + 'deg';
    var transform = 'transform: rotateY(' + currAngle + ') rotateX(-30deg) translateZ(9vmin)';
    
    petal.setAttribute( 'style',transform);
    
    flower.appendChild( petal );
}
}

function createPetal () {

var box = createBox ( null, 0);

var petal = doc.createElement('div');
petal.classList.add('petal');

for (var i = 1; i <= maxParts; i++) {
    newBox = createBox ( box, i );        
    box = newBox;
} 

petal.appendChild( box );

return petal;
}

function createBox ( box, pos ) {

var fontSize = partsFontStep * ( maxParts - pos ) + 'vmin';
var half = maxParts / 2;

var bright = '50';

if ( pos < half + 1 ) {
    fontSize = partsFontStep * pos + 'vmin';
}
else {
    bright = 10 + 40 / half * ( maxParts - pos );
}

var color = 'hsl(' + huetStep * pos + ', 100%, ' + bright + '%)';

// 1. Add shape
var newShape = doc.createElement('div');
newShape.classList.add( 'shape' );

// 2. Create wrapper .box
var newBox = doc.createElement('div');
newBox.classList.add('box');  

var boxStyle = [
    'color: ' + color,
    'font-size: ' + fontSize
].join(';');
newBox.setAttribute('style', boxStyle);

// 3. Add old box to new box
if ( box ) {
    newBox.appendChild( box );
}

// 4. Add shape to new box
newBox.appendChild( newShape );


return newBox;
}

function out ( content ) {
console.log( content );
}
//</script>

// ========================================
// Responsive navigation
// ========================================
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
    // alert("hi");
    nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());


// ========================================
// sticky navigation
// ========================================
const sectionHero = document.querySelector(".welcome");

const observer = new IntersectionObserver(
    (entries) => {
        const ent = entries[0];
        console.log(ent);
        !ent.isIntersecting ?
            document.body.classList.add("sticky") :
            document.body.classList.remove("sticky");
    }, {
        // viewport
        root: null,
        threshold: 0,
        rootMargin: "-100px",
    }
);
// when the hero section end part reached then we need to show the sticky navigation
observer.observe(sectionHero);


// ========================================
//  scroll to top
// ========================================

const footerElm = document.querySelector(".section-footer");

const scrollElement = document.createElement("div");
scrollElement.classList.add("scrollTop-style");

// I am adding the button element inside the div element
scrollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

// add to the bottom of the page
footerElm.after(scrollElement);

// deleting the dom element
const scrollTop = () => {
    sectionHero.scrollIntoView({ behavior: "smooth" });
};

document.querySelector(".scroll-top").addEventListener("click", scrollTop);

// get the data attributes
sectionHero=document.querySelector(".section-hero");

// ========================================
//  smooth scrolling
// ========================================

const portfolioSection = document.querySelector(".section-portfolio");
const contactSection = document.querySelector(".section-contact");

document.querySelector(".portfolio-link").addEventListener("click", (e) => {
    e.preventDefault();
    portfolioSection.scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".hireme-btn").addEventListener("click", (e) => {
    e.preventDefault();
    contactSection.scrollIntoView({ behavior: "smooth" });
});

// ========================================
//  lazy loading section
// ========================================
// const imgRef = document.querySelector("img[data-src]");
// console.log(imgRef);

// const lazyImg = (entries) => {
//     const [entry] = entries;
//     if (!entry.isIntersecting) return;
//     entry.target.src = imgRef.dataset.src;
// };

// const imgObserver = new IntersectionObserver(lazyImg, {
//     root: null,
//     threshold: 0,
//     // rootMargin: "100px",
// });

// imgObserver.observe(imgRef);



