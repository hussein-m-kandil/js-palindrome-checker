#!/usr/bin/env node
// The line above just for compiling the file to be standalone executable

// Initiating the file
function palindrome(str) {

    // Place holder for the string after filtration process
    let strFilterd = "";

    // Place holer for reversed version of the filterd string
    let strFilterdReversed = "";

    // Get string input's length
    let strLen = str.length;

    // Regex for alphabet letter testing
    const REGEX = /[a-z0-9]/i;

    // loop for each letter to filter the string
    for (let i = 0; i < strLen; i++) {
        if (REGEX.test(str[i])) {
            strFilterd += str[i].toLowerCase();
            let tmpStr = strFilterdReversed;
            strFilterdReversed = str[i].toLowerCase();
            strFilterdReversed += tmpStr;
        }
    }

    // Palindrome checking
    if (strFilterd == strFilterdReversed && strFilterd != "") {
        return true;
    } else {
        return false;
    }
}

// Tests
// console.log(palindrome("eye"), `should be true`);
// console.log(palindrome("_eye"), `should be true`);
// console.log(palindrome("race car"), `should be true`);
// console.log(palindrome("not a palindrome"), `should be false`);
// console.log(palindrome("My age is 0, 0 si ega ym."), `should be true`);
// console.log(palindrome("0_0 (: /-\ :) 0-0"), `should be true`);
// console.log(palindrome("five|\_/|four"), `should be flase`);
// console.log(palindrome("1 eye for of 1 eye."), `should be flase`);

addEventListener("submit", function(e) {
    e.preventDefault();

    // Get the submitter button
    let submitBtn = e.submitter;
    submitBtn.textContent = "Checking...";
    submitBtn.disabled = true;

    let word = this.document.getElementById(submitBtn.value).value;

    // Clean the result just in case it is not clear
    let result = this.document.getElementById("result");
    result.textContent = "";

    // Set some time of delay
    this.setTimeout(function() {
        if (palindrome(word)) {
            result.setAttribute("class", "mx-auto mt-3 fs-1 fw-light text-success text-center");
            result.textContent = "True";
        } else {
            result.setAttribute("class", "mx-auto mt-3 fs-1 fw-light text-danger text-center");
            result.textContent = "False";
        }
        submitBtn.textContent = "Is Palindrome?";
        submitBtn.disabled = false;
    }, 1000);
});


