//program that prints numbers 1 to 100. For multiples of three, print "Fizz" instead of the number, and for multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz".
//print num 1 to 100

for (let i = 1; i <= 100; i++){
    if (i % 3 === 0){
        console.log("fizz");
    }if (i % 5 === 0){
        console.log("buzz");
    }if (i %5 === 0 && i % 3 === 0){
        console.log("buzzfizz");
    }else{
        console.log(i);
    }
    
}
