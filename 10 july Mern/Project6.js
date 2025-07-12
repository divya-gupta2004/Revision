var arr = [
    (a,b,c) => a+b+c,
    (a,b,c) => a*b*c,
    (a,b,c) => a-b-c,
    (a,b,c) => a/b/c,
]

for ( var f of arr) {

    var c = f(45,5,2);
    console.log(c);
    
}