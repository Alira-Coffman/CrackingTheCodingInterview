// Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?

const isUniqueString = 'hello';
checkUnique(isUniqueString)
function checkUnique(x)
{
    //capitals and lowercase will be two separate values
    //26*2 = 52
    const letterOccurance = Array(52).fill(0);
    //loop over string
    for(let i = 0; i < x.length; i++)
    {
        //first time in array, increment
        //capital A decimal (65) //base
        let arrayValue =x[i].charCodeAt(0)-65;
        console.log(arrayValue)
        console.log(letterOccurance[arrayValue])
        if(letterOccurance[arrayValue] == 0)
        {
            letterOccurance[arrayValue] = 1;
        }
        else
        {
            return false
        }
        //else return false
    }
    return true;
}

//Alternative proposed Bit Manipulation
//TODO!!!
function isUniqueBit(str)
{
    let checker = 0;
    for(let i = 0; i <str.length; i++)
    {
        let val = str.charCodeAt(0) - 'A';
        if((checker & (1 << val)) > 0)
        {
            console.log(1 << val)
            console.log('not unique');
            return false;
        }
        checker |= ( 1<< val);
        console.log('Checker ' , checker)
    }
    console.log('valid')
    return true;
}