/* PRIMEIRA VERSÃO 

function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) { 
        newString += str[i];
    }
    return newString;
}
*/

const reverseString = (string) => string.split('').reverse().join('');

module.exports = reverseString;