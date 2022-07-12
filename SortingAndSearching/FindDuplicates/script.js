

let needtosort = Array.from({length: 5}, () => Math.floor(Math.random() * 6));

console.log(needtosort);


//QUICK SORT
//will split the array into smaller arrays.
function splitArray(arr, l, h)
{
    let pivot = arr[h]; //pivot is our highest value
    console.log("pivot ", pivot);
    let lowTemp = (l -1); //smallest right position. 
    console.log("lowTemp ", lowTemp);
    for(let i = l; i < h; i++)
    {
        //if current is smaller, then increment and swap
        console.log("check? " ,arr[i])
        if(arr[i] < pivot)
        {
            lowTemp++;
            //swap
            var temp = arr[lowTemp];
            arr[lowTemp] = arr[i];
            arr[i] = temp;

            console.log("swap ", arr);
            
        }
    }

    //final swap
    var temp = arr[lowTemp +1];
    arr[lowTemp +1] = arr[h]
    arr[h] = temp;

    console.log("final swap, " , arr);
    return (lowTemp +1);
}


function quickSort(arr, l, h)
{
    if(l < h)
    {
        console.log("low ", l, "high ", h, "arr ", arr);
        //cannot pass each other

        let middle = splitArray(arr, l, h);
        console.log("middle", middle)
        quickSort(arr, l, middle-1); //left
        quickSort(arr,middle+1, h); //right
    }
    
}


quickSort(needtosort, 0, needtosort.length -1);
console.log(needtosort);

//finding duplicates
let duplicateArray = (arr) => arr.filter((item, i) => arr.indexOf(item) !== i);
console.log(duplicateArray(needtosort));