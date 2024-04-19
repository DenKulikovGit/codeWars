//DESCRIPTION:
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain
// anything but exactly 4 digits or exactly 6 digits.
//     If the function is passed a valid PIN string, return true, else return false.

//SOLUTION:
const str = '-123'
const str2 = '0123'
const str3 = '000000'

function validatePIN(pin) {
    if (pin.length === 4 || pin.length === 6) {
        return /^\d+$/.test(pin);
    } else {
        return false;
    }
}

console.log(validatePIN(str));
console.log(validatePIN(str2));
console.log(validatePIN(str3));
