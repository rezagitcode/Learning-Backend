// write a function which takes two strings and returns true of one is the anagram of another
// otherwise false.(use frequency counter pattern)
function anagram(str1, str2){
 if(str1.length !== str2.length){
    return false;
 }
 const lookup = {};
 for(let val of str1){
    lookup[val]?lookup[val] += 1 : lookup[val] = 1;
 }
 for(let val of str2){
   if(!lookup[val]){
    return false;
   }else{
    lookup[val] -= 1;
   }
 }
 return true;
}
console.log(anagram("dddee","ddeee"));