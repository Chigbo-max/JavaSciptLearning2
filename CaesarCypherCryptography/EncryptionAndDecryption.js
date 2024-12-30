

const returnTheModulus = (number)=>{
    let key = 3;
    let value = number + key;
    if(value < 26){
        return value;
    }
    else return value % 26;
};


const getValueOfCharacter = (plainText)=>{
    let result = [];
    for(let index = 0; index < plainText.length; index++){
        let character = plainText.charAt(index);
        if (isValidateCharacter(character)) {
            character = character.toLowerCase();
            let number = character.charCodeAt(0) - 'a'.charCodeAt(0);
            result.push(number)
        }

    }
    return result;
}

function isValidateCharacter(character) {
    return /[a-zA-Z]/.test(character);
}

const getEncryptedModulusValueForEachCharacter = (plainText)=>{
    let modulusValues = [];
    let characterValues = getValueOfCharacter(plainText);
    let key = 3;
    for(let index = 0; index < characterValues.length; index++) {
        let value = characterValues[index] + key;
        if ((value) < 26) {
            modulusValues.push(value);
        }
        else{
            modulusValues.push((value) % 26);
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


module.exports = {returnTheModulus, getValueOfCharacter, getEncryptedModulusValueForEachCharacter, getEncryptedResult, getDecryptedModulusValueForEachCharacter, getDecryptedResult};
