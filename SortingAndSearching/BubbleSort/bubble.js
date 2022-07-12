/**Sorts an array by comparing two adjacent elements and swaping them if not correct.  */

let sortMe = [ 1, 4, 2, 5, -2, 3 ];


//Not optimized will run at O(n^2) complexity
for(let i = 0; i < sortMe.length; i++)
{
    for(let j = 0; j < sortMe.length-i-1; j++)
    {
        if(sortMe[j] > sortMe[j+1])
        {
            //swap
            var temp = sortMe[j];
            sortMe[j] = sortMe[j+1];
            sortMe[j+1] = temp;
        }
    }
}

console.log(sortMe);

let optimized = [ 1, 4, 2, 5, -2, 3 ];

/*Worst Case and Average case time complexity 
If the array is in reverse order then this condition is the worst case and Its time complexity is O(n2).

Best case time complexity
If the array is already sorted then it is the best-case scenario and its time complexity is O(n)*/


let isSwapped = false;
for(let i = 0; i < optimized.length; i++)
{
    isSwapped = false;
    for(let j = 0; j < optimized.length; j++)
    {
        if(optimized[j] > optimized[j+1])
        {
            var temp = optimized[j];
            optimized[j] = optimized[j+1];
            optimized[j+1] = temp;
            isSwapped = true;
        }
    }
    if(!isSwapped)
    {
        break;
    }
}

console.log(optimized);