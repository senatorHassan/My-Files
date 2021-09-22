/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/

const sections = document.querySelectorAll("section"); // all sections whatever it was thier numbers
const myUl = document.getElementById("navbar__list"); // the unordered list

/**
 * End Global Variables
 * Start Helper Functions
 *
*/


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
// looping for sections
sections.forEach((item) => {
  //getting sections number by data-nav attribute
  const myDataNav = item.getAttribute("data-nav");
  //getting to every section by its id attribute
  const myId = item.getAttribute("id");
  // creating new lists inside the existing ul
  const  navyLi = document.createElement("li");
  // adding classlist to the lists
  navyLi.classList.add("navbar__menu");
  // adding inner text to the lists "anchor elements" with the value of data-nav and id of sections
  navyLi.innerHTML = `<a class= "menu__link" data-section-id= '${myId}'>${myDataNav}</a>`;
  //appending "navyLi" child to myUl "unordered list"
  myUl.appendChild(navyLi);
});

//smooth scroll

function doSomething(tick) { // tick parameter which  prints the clicks on the sections

  const section = document.getElementById(tick);
  //scrollTo  using options.
  window.scrollTo({
    top: section.offsetTop, // positioning
    behavior: 'smooth', // the scrolling behaving smoothly
  });
}

const links = document.querySelectorAll(".menu__link"); // "a" element class
// looping for links
links.forEach((item) =>{

  const sectionId = item.getAttribute("data-section-id"); // the attribute we made and stored in dataset
  item.addEventListener("click",(event) => {
    event.preventDefault();  //event to prevent the default href
    doSomething(sectionId);
  });
});


// add active class to current section
                                                  // this is the tricky part
document.addEventListener("scroll", () => {
  sections.forEach((item) => {
    const positioning = item.getBoundingClientRect().top; // advanced method returns the size of an element and its position relative to the viewport "MDN".
    if (positioning>= 0 && positioning<= 400) {  // dimensions in this condition are recommended by tutor Mahmoud Magdy Hegazy
      item.classList.add('your-active-class');  //  the added calss allows animation
    } else {
      item.classList.remove('your-active-class');
    }
  });
});
// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active















//
