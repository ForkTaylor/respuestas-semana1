const reverseInt = (number) => {
    //Implementación
    if (typeof number != "number") {
        throw new Error("Error: input data is not a number");
    }
    return parseFloat(number.toString().split('').reverse().join('')) * Math.sign(number);
    
}

module.exports = {
    reverseInt
}

