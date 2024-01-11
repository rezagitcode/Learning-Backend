function x(){
    var a = 23;
    // y();
    function y(){
        var c = 56;
        function d(){
            console.log(a, c);
        }
        d();
    }
    y();
}
x();
/*
z gets closure (function y bundled together with its lexical scope).
*/