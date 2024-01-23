//Event Delegation is possible because of event bubbling. It is a concept which tells us to
// put only a single event listener to the parent element of many children.
const parent = document.getElementById('parent');
// console.log(parent);
parent.addEventListener('click',(e)=>{console.log(e.target);});