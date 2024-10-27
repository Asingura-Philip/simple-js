//function that checks if a number is odd or even 

function type(a){
    var num = a % 2;
    if (num == 0){
        console.log(a + " is even");
    }
    else 
    console.log(a + " is odd");

}
type(98394)

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        // Check if the target is present at mid
        if (arr[mid] === target) {
            return mid; // Return the index of the target
        }

        // If target is greater, ignore the left half
        if (arr[mid] < target) {
            left = mid + 1;
        }
        // If target is smaller, ignore the right half
        else {
            right = mid - 1;
        }
    }

    return -1; // Target not found
}

// Example usage
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 7;
const result = binarySearch(sortedArray, target);

if (result !== -1) {
    console.log(`Element found at index: ${result}`);
} else {
    console.log('Element not found in the array');
}
