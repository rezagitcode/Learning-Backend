// debouncing in javascript:
// Debouncing is a programming practice used to ensure that time-consuming tasks do not fire 
// so often, that it stalls the performance of the web page
function debounce(func, timeout = 300){
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  }
  let count = 0;
  function getData(){
    console.log('fetching data...',count++);
  }
  const processChange = debounce(() => getData());