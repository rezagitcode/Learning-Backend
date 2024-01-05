function x(){
    var a = 23;
    // y();
    function y(){
        console.log(a);
    }
    return y;
}
var z = x();
z();
/*
z gets closure (function y bundled togethere with its lexical scope).
*/