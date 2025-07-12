function fun() {
    console.log("hello all");

    function test() {
        console.log(("Testing........."));
        
    }
    
    return test;

    // to use the local variable outside the function scope, we can return the variable and then keep it in the
}



// var ob = fun();

// ob()
// ob()
// ob()
// ob()
// ob()
// ob()

fun()()  // this will call the main function, the it will call the child function