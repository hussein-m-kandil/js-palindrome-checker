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
    if (strFilterd == strFilterdReversed) {
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




