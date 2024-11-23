// changing background-color on scroll 

window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
        document.getElementById("nav").style.zIndex = '10000';
        // document.getElementById("nav-item").style.color = 'black';
        navbar.classList.remove('transparent');

    } else {
        navbar.classList.add('transparent');

        navbar.classList.remove('scrolled');
    }
}
);

// making  navbar chnge from container to container-fluid 
window.addEventListener('scroll', function () {
    var container = document.getElementById("navbar-container");
    if (window.scrollY > 100) {
        container.classList.remove("container", "ms-5", "me-5");
        container.classList.add("container-fluid");
    } else {
        container.classList.remove("container-fluid");
        container.classList.add("container", "ms-5", "me-5");
    }
 }
);




//counters 

function startCounting(elementId, start = 1, end = 1000, interval = 1000) {
    let current = start;

    const counterElement = document.getElementById(elementId);

    const intervalId = setInterval(() => {
        counterElement.textContent = current + " ";
        if (current >= end) {
            clearInterval(intervalId);
        } else {
            current++;
        }
    }, interval);
}

// Call the function for the four counters
startCounting('counter1', 1, 232, 50);
startCounting('counter2', 1, 521, 50);
startCounting('counter3', 1, 1453, 50);
startCounting('counter4', 1, 32, 50);


// back to top btn 

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}