
const{returnTheModulus, getValueOfCharacter, getEncryptedModulusValueForEachCharacter, getEncryptedResult, getDecryptedModulusValueForEachCharacter, getDecryptedResult } = require("./EncryptionAndDecryption");


test("testThat5Modulus26Returns8",()=>{
    const number = 5;
    let actual = returnTheModulus(number);
    let expected = 8;
    expect(actual).toBe(expected);
})


test("testThatTheNumericValueForCharacterIsReturned",()=>{
    const plainText = "CALIFORNIA";
    let actual = getValueOfCharacter(plainText);
    let expected = [2,0,11,8,5,14,17,13,8,0];
    expect(actual).toEqual(expected);
});



test("testThatExceptionIsThrowForNonLetter",()=>{
    const plainText = "CALIFOR32A";
    let actual = getValueOfCharacter(plainText)
    let expected = [2, 0, 11, 8, 5, 14, 17, 0]
    expect(actual).toEqual(expected);
})


test("testThatTheEncryptedModulus26ValueForCharacterIsReturned",()=>{
    const plainText = "CALIFORNIA";
    let actual = getEncryptedModulusValueForEachCharacter(plainText);
    let expected = [5,3,14,11,8,17,20,16,11,3];
    expect(actual).toEqual(expected);
})

test("testThatModulusValueReturnsTheEncryptedValue",()=>{
    const plainText = "CALIFORNIA";
    let actual = getEncryptedResult(plainText);
    let expected = ['f','d','o','l','i','r','u','q','l','d'];
    expect(actual).toEqual(expected);
})

test("testThatTheDecryptedModulus26ValueForCharacterIsReturned",()=> {
    const plainText = "CALIFORNIA";
    let actual = getDecryptedModulusValueForEachCharacter(plainText);
    let expected = [25, 23, 8, 5, 2, 11, 14, 10, 5, 23];
    expect(actual).toEqual(expected);
})

test("testThatModulusValueReturnsTheDecryptedValue",()=>{
    const plainText = "CALIFORNIA";
    let actual = getDecryptedResult(plainText);
    let expected = ['z', 'x', 'i', 'f', 'c', 'l', 'o', 'k', 'f','x'];
    expect(actual).toEqual(expected);
})



