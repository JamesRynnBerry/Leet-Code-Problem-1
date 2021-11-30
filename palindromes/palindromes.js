/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    const n = x
    if (n < 0 || n > 2 ** 31-1 ) {
        return false
    } 
    let rev = 0
    
    while (x > 0){
        let digit = x%10
        rev = rev * 10 + digit
        x = parseInt(x/10)
    }
    
    if (n === rev){
        return (true)
    } else {
        return (false)
    }
};


// If the original (x) is = to the flipped (x)