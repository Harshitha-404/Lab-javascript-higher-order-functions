document.write("progression 1");
document.write("<br>");

const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
let modifiedfoods = foods.slice(1, 4);
document.write(modifiedfoods);

document.write("<br>");
document.write("<br>");

document.write("progeression 2");
document.write("<br>");

const foods1 = ["pizza", "burger", "fingerShips", "donuts", "springRoll"];
foods1.splice(1, 0, "noodles,icecream");
document.write(foods1);

document.write("<br>");
document.write("<br>");

document.write("progression 3");
document.write("<br>");

const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
let EvenNum = numberArray.filter((num) => num % 2 == 0);
document.write(EvenNum);

document.write("<br>");
document.write("<br>");
document.write("progression 3(i)");
document.write("<br>");
document.write("<br>");

const numArray = [12, 324, 213, 4, 2, 3, 45, 4234];
let primeNum = numArray.filter((num) => {
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
});
document.write(primeNum);
document.write("<br>");
document.write("<br>");
document.write("progression 4");
document.write("<br>");
document.write("<br>");

const arr2 = [12, 324, 213, 4, 2, 3, 45, 4234];
let nonprime = arr2.filter((num) => {
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return true;
        }
    }
    return false;
});
document.write(nonprime);

document.write("<br>");
document.write("<br>");
document.write("progression 5");
document.write("<br>");
document.write("<br>");

const arr3 = [12, 324, 213, 4, 2, 3, 45, 4234];
let even = arr3.filter((num) => num % 2 == 0);
document.write(even + "even in lamda");

document.write("<br>");
document.write("<br>");
document.write("progression 6");
document.write("<br>");
document.write("<br>");

const myArray = [11, 34, 20, 5, 53, 16];
let sqnum = myArray.map(sqnum => sqnum * sqnum);

document.write(sqnum);

document.write("<br>");
document.write("<br>");
document.write("progression 6");
document.write("<br>");
document.write("<br>");

const arr = [2, 3, 5, 10];
let mul = arr.reduce((a, b) => a * b);

document.write(mul);