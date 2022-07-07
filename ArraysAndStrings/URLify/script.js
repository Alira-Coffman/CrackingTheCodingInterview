/*write a method to replace all spaces in a string with '%20'. You may assume that the string 
has sufficient space at the end to hold the additional characters, and that you are given the "true" 
length of the string. (Note: If implementing in Java, please use a character array so that you can 
perform this operation in place.)*/

let str = "Mr John Smith   ";

console.log(removeSpaces(str, 13));
function removeSpaces(str, trueLength)
{
    // str= str.slice(0,trueLength-str.length)
    //str = str.trim()
    //return str.trim().replaceAll(' ', '%20')
    return str.trim().split(' ').join('%20') //if you cannot use replaceAll
}