// Bai 1:
// const numbers = [9, 8, 3, 5, 6, 2, 7, 9];

// function getSecondLargest(arr) {
//     let max = -Infinity;
//     let secondMax = -Infinity;

//     for (let num of arr) {
//         if (num > max) {
//             secondMax = max;
//             max = num;
//         } else if (num > secondMax && num < max) {
//             secondMax = num;
//         }
//     }

//     return secondMax;
// }

// console.log("Số lớn thứ hai là:", getSecondLargest(numbers));

// Bai 2:

const classA = [15, 2, 8, 10];
const classB = [8, 11, 2, 5, 9];


const classC = [...classA, ...classB];

function removeDuplicateNum(arr) {
    let seen = {};
    let uniqueArr = [];
    for (let num of arr) {
        if (!seen[num]) {
            seen[num] = true;
            uniqueArr.push(num);
        }
    }

    return uniqueArr;
}

function quickSort(nums) {
    if (nums.length <= 1) return nums;

    const mid = Math.floor(nums.length / 2);
    const pivod = nums[mid];

    const leftArr = [];
    const rightArr = [];

    for (let i = 0; i < nums.length; i++) {
        if (i !== mid) {
            if (nums[i] < pivod) {
                leftArr.push(nums[i]);
            } else {
                rightArr.push(nums[i]);
            }
        }
    }

    return [...quickSort(leftArr), pivod, ...quickSort(rightArr)];
}

const sortNumber = quickSort(classC);
console.log(removeDuplicateNum(sortNumber));
