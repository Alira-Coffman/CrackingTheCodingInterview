// Given two strings, write a method to decide if one is a permutation of the 
// other


let x = 'test';
let y = 'tsets';

console.log(permutationOccurance(x,y));
function permutation(x,y)
{
    if(x.length != y.length)
        return false;
    
    //sort the strings
     
    return x.split("").sort().join("") === y.split("").sort().join("");
   
}


function permutationOccurance(x,y)
{
    if(x.length != y.length)
        return false;
    
    let occuranceX = Array(26).fill(0);
    let occuranceY = Array(26).fill(0);
    x.toLowerCase();
    y.toLowerCase();
    
    for(let i = 0; i < x.length; i++)
    {
        let charX = x[i].charCodeAt(0)-97;
        let charY = y[i].charCodeAt(0)-97;
        console.log('x ' , charX)
        console.log('y' ,charY)
        occuranceX[charX]++;
        occuranceY[charY]++;
    }

    console.log(occuranceX)
    console.log(occuranceY)
    return occuranceX.join("")=== occuranceY.join("");
    
   
}