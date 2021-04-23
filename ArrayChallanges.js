//High Pass Filter

function highPass(arr, cutoff) {
    var filteredArr = [];
    for(i=0; i<arr.length; i++){
        if(arr[i]>cutoff){
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); 

// Evens or Odds

function evensOfOdds(arr) {
    var totalOdds = 0;
    var totalEvens = 0;
    // your code here
    for(i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            totalEvens++
        }
        else{
            totalOdds++
        }
    }
    if(totalEvens<totalOdds){
        return "Odds are larger"
    }
    else if(totalEvens>totalOdds){
        return "Evens are larger"
    }
    else if(totalOdds==totalEvens){
        return "tied"
    }
}
   
var result = evensOfOdds([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back "evens are larger"

// Better than average

function betterThanAverage(arr) {
    var sum = 0;
    var count = 0
    for(i=0;i<arr.length; i++){
        sum=sum+arr[i]
    }
    avg=sum/arr.length
    
    for(i=0;i<arr.length; i++){
    if(arr[i]>avg){
        count++}}
    // calculate the average
    
    // count how many values are greated than the average
    return count;

}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

// FibonacciArray

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    for(i=2; i<n; i++){
        fibArr = fibonacciArray(n - 1);
    fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
    }
    // your code here
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


