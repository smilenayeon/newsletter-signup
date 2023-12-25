"use strict";
const subscribeButton = document.getElementById("subscribe-button");
const dismissButton = document.getElementById("dissmiss-button");
const desktopSuccess = document.getElementById('desktop-success');
const signUpPage = document.getElementById('sign-up-page');
const emailError = document.getElementById('email-error');
const emailInput = document.getElementById('email');
subscribeButton.addEventListener("click", subscribeHandler);
dismissButton.addEventListener("click", dissmissHandler);
function subscribeHandler(event) {
    event.preventDefault(); // Prevent the default form submission
    // Check if the email input is not empty and contains a valid email
    if (emailInput.value && emailInput.checkValidity()) {
        // Show the desktop-success element
        desktopSuccess.style.display = 'flex';
        signUpPage.style.display = "none";
        emailInput.value = "";
    }
    else {
        //show error message and change the color of the text and background
        emailInput.style.color = 'tomato';
        emailInput.style.backgroundColor = 'pink';
        emailInput.style.border = "solid hsl(4, 51%, 54%)";
        emailError.style.display = "block";
    }
}
function dissmissHandler(event) {
    event.preventDefault();
    desktopSuccess.style.display = 'none';
    signUpPage.style.display = "flex";
    emailInput.style.color = ''; // Reset text color to default
    emailInput.style.backgroundColor = ''; // Reset background color to default
    emailInput.style.border = ''; //Reset border color to default
    emailError.style.display = "none"; // not show the error message
}
//change the img src when the screen size gets smaller than 376px
document.addEventListener('DOMContentLoaded', function () {
    const img = document.getElementById("signup-image");
    function updateImage() {
        if (window.innerWidth <= 375) {
            img.src = "assets/images/illustration-sign-up-mobile.svg";
        }
        else {
            img.src = "assets/images/illustration-sign-up-desktop.svg";
        }
    }
    // Add event listener for window resize
    window.addEventListener('resize', updateImage);
    // Call updateImage on initial load
    updateImage();
});
