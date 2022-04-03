/**
 * 
 * @param {Number} a first argument
 * @param {Number} b second argument
 * @returns {Number} return sum of 2 arguments
 */
function sum(a, b) {
    return a + b;
}

/**
 * 
 * @param {Number} a first argument
 * @param {Number} b second argument
 * @returns {Number}  Return diffrence between arguments subtracts a smaller value from a larger value
 */
function sub(a, b) {
    return b <= a ? a - b : b - a;
}

/**
 * @param {Number} a first argument
 * @param {Number} b second argument
 * @returns {Number} Return devisions a by b
 */
function div(a, b) {
    return Math.round((a / b) * 100) / 100;
}

/**
 * @param {Number} a first argument
 * @param {Number} b second argument
 * @returns {Number} Returns multiply a * b
 */
function mult(a, b) {
    return Math.round((a / b) * 100) / 100;
}

/**
 * 
 * @param {Number} a first argument
 * @param {Number} b second argument
 * @param {Number} c type of operation
 * @returns {String} result depends of operation(see other function) and arguments 
 */
function mathOperation(a, b, c) {
    switch (c) {
        case "+":
            return sum(a, b)
            break;
        case "-":
            return sub(a, b);
            break;
        case "/":
            return div(a, b);
            break;
        case "*":
            return mult(a, b)
            break;
        default:
            return 0 / 0
    }
}