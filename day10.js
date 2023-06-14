//Write a function that takes an array of numbers as input and returns the largest number in the array.
const large = (myArray) => {
 
    return Math.max(...myArray);
    


}
const myN = [2, 4, 7, 19, 9, 4];
console.log(large(myN));