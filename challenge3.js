const capitalizeLetters = (str) => {
    //Implementación
    return str.replace(/(^\w{1})|(\s\w{1})/g, letter => letter.toUpperCase());
}

module.exports = {
    capitalizeLetters
}

// const strTest = "i love javascript";

// // let capitalStr = strTest.split(" ").replace(/^\w/, c => c.toUpperCase().join(" "));

// const capitalString = strTest.replace(/(^\w{1})|(\s\w{1})/g, letter => letter.toUpperCase());
// console.log(finalSentence);
