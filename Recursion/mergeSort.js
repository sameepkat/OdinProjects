function merge(left, right) {
    const result = [];
    let i = 0;
    let j = 0;

    // Merge the two arrays while there are elements in both
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // If there are remaining elements in the left array, add them to the result
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }

    // If there are remaining elements in the right array, add them to the result
    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result;
}

function mergeSort(array) {
    // Base case: arrays with 0 or 1 element are already sorted
    if (array.length <= 1) {
        return array;
    }

    // Split the array into two halves
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    // Recursively sort both halves and merge them
    return merge(mergeSort(left), mergeSort(right));
}

const ipArr1 = [3,2,1,13,8,5,0,1];
const ipArr2 = [105, 79, 100, 110];

console.log(`Arr1: ${mergeSort(ipArr1)}`);
console.log(`Arr2: ${mergeSort(ipArr2)}`);