const grandfather = document.getElementById('grandfather');
const father = document.getElementById('father');
const child = document.getElementById('child');
// console.log(grandfather,father,child);
grandfather.addEventListener('click',function(){console.log("grandfather clicked!!!");},true);
father.addEventListener('click',function(){console.log("father clicked!!!");},false);
child.addEventListener('click',function(e){console.log("child clicked!!!");
e.stopPropagation()},true);