```
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow' 
```
function solution(str){
    return str.split('').reverse().join('');
  }
  
  //.split () divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.
  //.reverse() method reverses the order of the elements in an array
  //.join() method returns an array as a string.