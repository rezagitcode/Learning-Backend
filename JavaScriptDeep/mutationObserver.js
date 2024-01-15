const observer = new MutationObserver(entries => {console.log(entries)});
const parent = document.getElementById('parent');
observer.observe(parent, {subtree:true, characterData:true, attributes:true, childList:true});
// observer.disconnect();
console.log(parent);