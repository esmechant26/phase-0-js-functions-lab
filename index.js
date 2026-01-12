




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };


function calculateTax(amount){
    return amount*.1
}
function convertToUpperCase(text){
    return text.toUpperCase();
}
function findMaximum(num1, num2){
    if (num1 > num2){
        return num1
    }
    else{
        return num2
    }
}
function isPalindrome(word){
    if (word === word.split('').reverse().join('')){
        return true
    }
    else{
        return false
    }
}
function calculateDiscountedPrice(originalPrice, discountPercentage){
    if(discountPercentage < 0){
        console.error("Invalid discount percentage. Please enter a value between 0 and 100.");
        return;
    }

    let discountAmount = originalPrice*(discountPercentage/100)
    return originalPrice - discountAmount;
}
