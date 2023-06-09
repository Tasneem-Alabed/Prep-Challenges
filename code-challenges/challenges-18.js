'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Given a string find the length of the middle word in the sentence
//
// Ex:
// Input: "You can't handle the truth!"
// Output: 6
//
// Input: "You're gonna need a bigger boat"
// Output: 1
//

const wordLength = (str) => {
    // write your code here
let arr = str.split(" ");
let result;
if(arr.length%2==0){
   result = arr[(arr.length)/2];}
 else{
 result = arr[(arr.length-1)/2];}
let length = result.length;
return length;
     
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes two strings and checks if the two strings contain the same combination of letters
//
// Ex:
// Input: "dad", "add"
// Output: true
//
// Input: "dad", "aadd"
// Output: false
//
// Input: "table", "label"
// Output: false
//
// Input: "cat", "rat"
// Output: false

const wordLetters = (str1, str2) => {
    // write your code here
    {
        // Get lengths of both strings
        let n1 = str1.length;
        let n2 = str2.length;
   
        // If length of both strings is not same,
        // then they cannot be anagram
        if (n1 != n2)
            return false;
   
        // Sort both strings
       let x1= str1.split("");
        let x2=str2.split("");
   
        let s1=x1.sort()
        let s2=x2.sort();
        // Compare sorted strings
        for (let i = 0; i < n1; i++)
            if (s1[i] != s2[i])
                return false;
   
        return true;
    }
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes an integer and a sorted array
// The function returns the index of the integer in the array
// If the integer was not there, the function returns where it could have been
//
// Ex:
// Input: [1,3,5,6], 5
// Output: 2
//
// Input: [1,3,5,6], 2
// Output: 1
//
// Input: [1,3,5,6], 7
// Output: 4
//

const targetIndex = (arr, int) => {
    // write your code here
    arr.sort();
    if(int < arr[arr.length-1]){
    for(let x =0 ;x<arr.length ; x++){
      
        if(arr[x]==int)
        {
            return x;
        }

        if(x==arr.length-1 ){
            for(let i =0 ;i <arr.length ; i++){
                if(arr[i] > int){
                    return i;
                }
            }  
        }
        
    }}else{
        return arr.length;
    }

}
// -------------------------------------------------------------------------------------------------------

module.exports = { wordLength, wordLetters, targetIndex };