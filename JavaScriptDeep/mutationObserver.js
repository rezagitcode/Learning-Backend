const observer = new MutationObserver(entries => {console.log(entries)});
const parent = document.getElementById('parent');
observer.observe(parent,{attributes: true});
console.log(parent);
parent.id = "New Id";
let t = 2;