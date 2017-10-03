// JavaScript Intrmediate
// Part I:
//Create a function called starString() that takes a number and returns a string of that many *
function starString(x) {
    var star = '';    
    for (var i = 0; i < x; i++) {
        star += '*';
    }
    return star;
}
let s = starString(8);
console.log(s);

//Part II and III:
//Create a function called drawStars() that takes an array of numbers and prints out *
//Modify the function above. Allow an array containing integers and strings to be passed to the drawStars() function. When a string is passed, instead of displaying *, display the first letter of the string according to the example below. You may use the .toLowerCase() string method for this part
function drawStars(arr){    
    const result = [];
    for (var i = 0; i < arr.length; i++){
        if (typeof arr[i] === 'number'){
            result.push(starString(arr[i]))
        }
        else if (typeof arr[i] === 'string') {
            var str = '';
            for (var j = 0; j < arr[i].length; j++) {
                str += arr[i][0];
            }
            result.push(str);    
        }        
    }
    return result;
}
var test1 = [1, 2, 3, 4, 5, 6, 5];
var test2 = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"];
let c = drawStars(test1);
console.log(c);

let d = drawStars(test2);
console.log(d);








