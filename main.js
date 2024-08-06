p=12;

function sum(a,b,c){return a+b+c;}

function dsf(fn){
    function fn1(a){
        function fn2(b){
            function fn3(c){
                return fn(a,b,c)
            }
            return fn3
        }
        return fn2
    }
    return fn1
}
console.log(dsf(sum)(4)(10)(45))
// document.getElementById("demo").innerHTML = dsf(16);