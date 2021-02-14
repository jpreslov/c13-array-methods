//every---------

const overTwentyOne = [21, 25, 23, 21, 22, 24];
const notOver = [21, 25, 23, 21, 17, 24];

console.log(
    overTwentyOne.every((age) => {
        return age >= 21;
    })
); // true
console.log(
    notOver.every((age) => {
        return age >= 21;
    })
); // false


//filter--------

const nums = [1, 2, 3, 4, 5];

const evens = nums.filter((i) => {
    return i % 2 == 0;
});

console.log(nums); // [1, 2, 3, 4, 5]
console.log(evens); // [2,4]

//forEach--------

const nums = [1, 3, 5];

nums.forEach((num, index) => {
    console.log(`The number at index ${index} is ${num}`);
});

//indexOf--------

const nums = [1, 2, 3, 2, 5];

const has2 = nums.indexOf(2);
const has2Twice = nums.indexOf(2, 2);
const has6 = nums.indexOf(6);

console.log(has2); // 1
console.log(has2Twice); // 3
console.log(has6); // -1


//lastIndexOf---------

const nums = [1, 2, 3, 2, 5];

const has2 = nums.lastIndexOf(2);
const has2Twice = nums.lastIndexOf(2, 2);
const has6 = nums.lastIndexOf(6);

console.log(has2); // 3
console.log(has2Twice); // 1
console.log(has6); // -1

//map--------

const nums = [1, 3, 5, 7, 9];

const doubles = nums.map((num) => {
    return num * 2;
});

console.log(nums); // [1, 3, 5, 7, 9]
console.log(doubles); // [2, 6, 10, 14, 18]

//reduce--------

const array = [1, 2, 3, 4, 5];

function sum(a, b) {
    return a + b;
}

console.log(array.reduce(sum)); // 15
console.log(array.reduce(sum, 5)); // 20