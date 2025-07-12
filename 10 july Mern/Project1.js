// var x = 45;
// var y = 56;

// var z = x + y;
// console.log(z);


function fun() {
    console.log("hello world");    
}

function test(ob) {
    // console.log("hi everyone");

    ob()    
} 

var num = 100;

// console.log(typeof fun);     // type is function
// console.log(typeof num);      // both 'num' and 'fun' are variable, there is no difference between 'fun' and 'num'. But the data inside 'num' is Numerical type and data inside 'fun' is function type.

// fun()         // fun can be executed because it is a function
// num()        // num is not a function so it can't be executed  (it will throw error)

// var ab = fun;   
// ab();             // we can call our 'function fun()' like this with the help of another variable

test(fun);  // fun is treated as a variable, so we can pass 'function fun()' as an argument in another function
