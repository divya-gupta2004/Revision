// Arrow function - it is better than traditional function because it uses single line to write the full function

// if there is one argument or one line code then we can avoid using return keyword and and also avoid using '{ }' brackets

// but if there are more lines of code in a function, then we will have to write return keyword and use '{ }' brackets

var add = () => {
    console.log(a+b);    
}

var add = () => console.log(a+b);    

var add = () => { 
    return a+b; 
}                                          // use '{ }' brackets when using return keyword

var add = () => a+b;    




var c = add(6,4)
console.log(c);
