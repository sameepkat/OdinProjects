function merge(left, right){
    const result = []; //100, 105, 79, 110 // 
    let i = 0; //1
    let j = 0; //1

    while(i < left.length && j < right.length){
        if(left[i] < right[j]){
            result.push(left[i]);
            i++;
        }else{
            result.push(right[j]);
            j++;
        }
    }

    while(i < left.length){
        result.push(left[i]);
        i++;
    }

    while(j < right.length){
        result.push(right[j]);
        j++;
    }
    return result;
}

function mergeSort(array){
    if(array.length <= 1){
        return array;
    }

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}


const ipArr1 = [3,2,1,13,8,5,0,1];
const ipArr2 = [105, 79, 100, 110];

console.log(`Arr1: ${mergeSort(ipArr1)}`);
console.log(`Arr2: ${mergeSort(ipArr2)}`);