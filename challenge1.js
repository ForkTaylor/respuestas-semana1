const reverseString = (str) => {
    //Implementación
    if (typeof str != "string" || str.length <= 1 || str.length > 15) {
        throw new Error('Tipo de dato a longitud no admitidos')
    } 
    return str.split("").reverse().join("");
    
};

module.exports = {
    reverseString
}

