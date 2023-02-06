function foo() {
    console.log('foo');
    bar();
}
foo();
function bar() {
    console.log('bar');
}
bar();

function make_avg(marks1, marks2, marks3) {
    var total = marks1 + marks2 + marks3
    var avg = total / 3;
    return avg;
}
// var marks1 = 60;
// var marks2 = 59;
// var marks3 = 58;

// var average = make_avg(61, 57, 108);
// average.toFixed(2);
// console.log(average);

array = [80, 79, 8, 5, 38];
function makeArrayAvg(array) {
    var total = array.reduce((acc, c) => acc + c, 0);
    return total / array.length;
}
var average = makeArrayAvg(array);
console.log(average);

function odd_even(value) {
    // var odd = value%2;
    var even = value % 2;
    return even;
}
odd_even(2);

function isEven(n) {
    return n % 2 == 0;
}

function isOdd(n) {
    return n % 2 == 1;
}
var even = isOdd(2);
console.log(even);

var signal = 'yellow';
if (signal === 'red') {
    console.log('you will put yourselves in danger if you cross the road');
}
else if (signal === 'yellow') {
    console.log('you should stop');
}
else {
    console.log('you can cross the road');
}