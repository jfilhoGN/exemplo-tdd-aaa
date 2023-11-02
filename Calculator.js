/* PRIMEIRA VERSÃO

class Calculator {
    static function add(a,b){
        return a + b
    }
    static function subtract(a,b){
        return a - b
    }
    static function divide(a,b){
        return a / b
    }
    static function multiply(a,b){
        return a*b
    }
}
*/

class Calculator {
    static add = (a, b) => a + b;
    static subtract = (a, b) => a - b;
    static divide = (a, b) => a / b;
    static multiply = (a, b) => a * b;
}

module.exports = Calculator;