"use strict";
/* 
    Author: Daniel Avalos
    Date: 05/06/2025
    File Name: 
*/

let signUpForm = document.getElementById("signUp");

signUpForm.addEventListener("submit", function(e) {
    let userName = document.getElementById("user").value;
    let userEmail = document.getElementById("email").value;
    let passWord = document.getElementById("pwd").value;
    let feedBack = document.getElementById("feedBack");

    e.preventDefault();

    let regexOne = /[a-z]/;
    let regexTwo = /[A-Z]/;
    let regexThree = /[0-9]/;
    let regexFour = /[\$!?#&/]/;

    if (userName.length < 6) {
        feedBack.textContent = "Username must be at least 6 characters long"
    } else if (passWord.length < 8) {
        feedBack.textContent = "Password must be at least 8 characters long";
    } else if (regexOne.test(passWord) == false) {
        feedBack.textContent = "Password must contain at least 1 lowercase letter";
    } else if (regexTwo.test(passWord) == false) {
        feedBack.textContent = "Password must contain at least 1 uppercase letter";
    } else if (regexThree.test(passWord) == false) {
        feedBack.textContent = "Password must contain at least 1 number/digit"
    } else if (regexFour.test(passWord) == false) {
        feedBack.textContent = "Password must contain at least 1 of the following special characters ($, !, ?, # or &)"
    } else {
        signUpForm.submit();
    }
});