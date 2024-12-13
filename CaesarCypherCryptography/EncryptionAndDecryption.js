

const returnTheModulusOfFive = (number)=>{
    if(number < 26){
        return number;
    }
    else return number % 26;
};




const getValueOfCharacter = (plainText)=>{
    let result = [];
    for(let index = 0; index < plainText.length; index++){
        let character = plainText.charAt(index);
        validateCharacter(character);
        character = character.toLowerCase();
        let number = character.charCodeAt(0) - 'a'.charCodeAt(0);
        result.push(number)
    }
    return result;

}

function validateCharacter(character) {
    if (!/[a-zA-Z]/.test(character)) {
        throw new Error("Invalid Character");
    }
}

const getEncryptedModulusValueForEachCharacter = (plainText)=>{
    let modulusValues = [];
    let characterValues = getValueOfCharacter(plainText);
    let key = 3;
    for(let index = 0; index < characterValues.length; index++) {
        if ((characterValues[index] + key) < 26) {
            modulusValues.push(characterValues[index] + key);
        }
        else{
            modulusValues.push((characterValues[index] + key) % 26);
        }

    }
    return modulusValues;
}

const getEncryptedResult =(plainText)=>{
    let modulusValues = getEncryptedModulusValueForEachCharacter(plainText);
    let encryptedValues = [];
    for(let index = 0; index < modulusValues.length; index++) {
        encryptedValues.push((String.fromCharCode(modulusValues[index] + 'a'.charCodeAt(0))));
    }
    return encryptedValues;
}



const getDecryptedModulusValueForEachCharacter = (plainText)=>{
    let decryptedModulusValues = [];
    let characterValues = getValueOfCharacter(plainText);
    let key = 3;
    for(let index = 0; index < characterValues.length; index++) {
        validateDecryptedModulusValue(characterValues, index, key, decryptedModulusValues);
    }
    return decryptedModulusValues;

    }

function validateDecryptedModulusValue(characterValues, index, key, decryptedModulusValues) {
    let decryptionValue = characterValues[index] - key;

    if (decryptionValue < 26 && characterValues[index] >= key) {
        decryptedModulusValues[index] = decryptionValue;
    } else {
        decryptedModulusValues[index] = decryptionValue % 26;
    }
    if (decryptionValue < 0) {
        decryptedModulusValues[index] = 26 + decryptionValue;
    }
}

    const getDecryptedResult = (plainText)=>{
        let decryptedValues = [];
        let decryptedModulusValues = getDecryptedModulusValueForEachCharacter(plainText);
        for(let index = 0; index < decryptedModulusValues.length; index++) {
            decryptedValues[index] = String.fromCharCode((decryptedModulusValues[index] + 'a'.charCodeAt(0)));
        }
        return decryptedValues;
}



module.exports = {returnTheModulusOfFive, getValueOfCharacter, getEncryptedModulusValueForEachCharacter, getEncryptedResult, getDecryptedModulusValueForEachCharacter, getDecryptedResult};
