// Sign Check
// Write a function, that checks whether the result of the multiplication numOne * numTwo * numThree is positive
// or negative. Try to do this WITHOUT multiplying the 3 numbers.
// Input
// The input comes as parameters named numOne, numTwo, numThree.
// Output
// • If the result is positive, print on the console -> "Positive"
// • Otherwise, print -> "Negative"



function signCheck(num1 ,num2 ,num3) {

    let result = num1 * num2 * num3;

    if (result > 1) {
        console.log('Positive');
    } else {
        console.log('Negative');
    }

}

signCheck( 5, 12, -15)