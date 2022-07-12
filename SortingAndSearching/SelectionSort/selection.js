/**
 * 
 * find the minimum element and move it to begining. 
 * overall complexity = O(N)*O(N) = O(N*N) = O(N2)
 * Use for the following: 
 * 1. when not partally sorted
 * 2. when memory usage constraints
 * 3. when simple sorting is needed
 * 4. when array is small!
 * 
 * DO NOT USE 
 * 1. large numbers of elements
 * 2. Nearly sorted
 * 3. Want faster run time, and don't care about memory
 */


 let selection = [ 64, 25, 12, 22, 11];

 let n = selection.length;

let min_index = 0;
 //loop through
 for(let i = 0; i < n -1; i++)
 {
    min_index = i; 
    console.log('Min Index ', i)
    
    for(j=i+1; j < n; j++)
    {
        if(selection[j] < selection[min_index])
        {
            min_index = j;
        }
        
    }
    var temp = selection[min_index];
    selection[min_index] = selection[i];
    selection[i] = temp;
            
 }

 console.log(selection);

