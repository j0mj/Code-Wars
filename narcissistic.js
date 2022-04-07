/* Narcissistic number or not?

A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base.

The Challenge:

Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10. This may be True and False in your language, e.g. PHP.

Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.*/
`````
//EVERYTHING NUMBERED IS THE ORDER OF OPERATIONS FOLLOWED IN https://www.youtube.com/watch?v=fL7VF-6K-YA & IS USED FOR ME TO GAIN A BETTER UNDERSTANDING 
`````
function narcissistic(value) {
    
    //1. console.log(typeof (value)) this shows what the data type is for the parameter

    //2. finding the data value, we need to then convert the value to a string type to find the number of digits
    //6. perform a split on strNumber to get each individual digit and run through array
    //7. travel the array using a loop
    //9.let poweredValue = for each number(value) raise it to the power of exponent.
    //10. need to store that sum: sum = 0, sum += poweredValue;


    //check if the (sum === value)

    //5. put value.toString() as its own variable
    let strNumber = value.toString()
    //3. number of digits = string.length
    let exponent = strNumber.length; //8. change the variable name to exponent, since the value of the variable serves as the number used in the narcisssistic number equation (digit[0]^# of digits digit[1]+ # of digits,.. etc etc)

    let arrayOfValues = strNumber.split(''); //11. .split takes unordered substrings and returns them as an array

    //13. turn poweredValue into a real variable
    let poweredValue, sum = 0;

    //12. basic for loop
    for (let i=0; i < exponent; i++){
/* 14. */poweredValue= Number(arrayOfValues[i])**exponent;
       /* 15. */ sum += poweredValue;
        /* 16 */ if (sum === value){
            return true
        } 
        return false;
    }

    //4. check that its right
    console.log(value, exponent); //output: value 7, number of digits 1. 
}


//the comments sudo code, explaining what I should do in order to have a successful function.