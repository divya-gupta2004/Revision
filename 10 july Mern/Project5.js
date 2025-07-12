var add = (a,b) => {
    var c = a+b;
    console.log(c);
    
}

var mul = (a,b) => {
    var d = a*b;
    console.log(d);
    
}

var sub = (a,b) => {
    var e = a-b;
    console.log(e);
    
}

// var hello = (a,b) => {
//     console.log("hello all");
//     add(a,b);
//     console.log("thanks");  
// }

// hello(10,10);

// 1 way

// var hi = (a,b, c) => {
//     console.log("hello all");
//     c(a, b);
//     console.log("thanks");  
// }

// hi( 2, 3, add);
// hi( 2, 37, mul);
// hi( 24, 3, sub);

// 2nd way

var hi = (a,b, operation) => {
    console.log("hello all");
    if(operation == 1) 
        add(a,b)
    else if (operation == 2)
        mul(a,b)
    else 
        sub(a,b)
    console.log("thanks");  
}

hi(45, 46, 1);
hi(34, 35, 2);
hi(27, 29, 3);



