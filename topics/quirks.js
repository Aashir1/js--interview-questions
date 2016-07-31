// What will be the output?
function foo(x) {
console.log(arguments)
return x
}
foo(1, 2, 3, 4, 5)
// and
function foo(x) {
console.log(arguments)
return x
}(1, 2, 3, 4, 5)

// What will be the output
a = [1,2,3,4]
a[1.5] = 1.5
a // ?

// What will be the output
function foo(){console.log("hello")}
foo.call.call.call.apply(function bar(x) {console.log(x)}, [this,"world"])

// What will be the output
console.log("1" + 2);
console.log(2 + "1");
console.log(1 + 2 + 3 + 4 + "5"); //<-- nb

// Make it true
var a;
/* put your code here */
a !== a; // should be true

// What will be the output
var scores = [98, 74,85, 77, 93,100,89];
var total = 0;
for (var score in scores) { 
  total += score;
} 
var mean = total / scores.length;
console.log(mean); //?

// What will be the output
[2, 3, -1, -6, 0, -108, 42, 10].sort();


// What will be the output
var y = 1;
if (function f(){}) {
  y += typeof f;
}
console.log(y);

// What will be the output
var foo = function bar(){ return 12; };
typeof bar();  

// What will be the output
var a={},
    b={key:'b'},
    c={key:'c'};

a[b]=123;
a[c]=456;
console.log(a[b]);

// What will be the output? 
['11','11','11','11'].map(parseInt)

// what will display alert?
function aaa() {
    return
    {
        test: 1
    };
}
alert(typeof aaa());
