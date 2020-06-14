// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];

//TODO
function judge(object) {
    if (object instanceof Array) {
        document.write(object.toString() + "is array" + "</br>");
    } else {
        document.write(object.toString() + "is not array" + "</br>");

    }
}

judge(a);
judge(b);

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
var temp = [];
for (let i = 0; i < temp.length + a.length; i++) {
    temp.push(a.shift() * 2);
}

document.write(temp.toString() + "</br>");


// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
var case1 = "";
var case2 = "";
var case3 = "";
colors.forEach(e => {
    if (e !== colors[colors.length - 1]) {
        case1 += e + " ";
        case2 += e + "+";
        case3 += e + ",";
    } else {
        case1 += e;
        case2 += e;
        case3 += e;
    }
})
document.write(case1 + "</br>");
document.write(case2 + "</br>");
document.write(case3 + "</br>");

// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
        if (a[i] < a[j]) {
            let temp = a[j];
            a[j] = a[i];
            a[i] = temp;
        }
    }
}
document.write(a + "</br>")


// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
let map = new Map();
for (let i = 0; i < a.length; i++) {
    let temp = a[i].toString();
    if (map.get(temp) !== undefined) {
        map.set(temp, map.get(temp) + 1);
    } else {
        map.set(temp, 1);
    }
}
let max = 0;
let ele = '';
map.forEach(function (value, key) {
    if (value > max) {
        ele = key;
        max = value;
    }
})
document.write(ele + "</br>")
