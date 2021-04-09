// A back to top button... to bring the user back to the top 

// Get the button
myButton = document.getElementById("backToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}

// When the user clicks the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, Opera
}