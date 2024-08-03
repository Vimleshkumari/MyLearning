//1 two sum or find pair in given array having sum equal to target

const twoSum = (array, target) => {
    left = 0;
    right = array.length - 1;
    let array2 = array
    var done = false;
    while (!done) {
        done = true;
        for (var i = 0; i < array2.length; i += 1) {
            if (array2[i] > array2[i + 1]) {
                done = false;
                var tmp = array[i];
                array2[i] = array2[i + 1];
                array2[i + 1] = tmp;
            }
        }
    }
    let allpairs = []
    while (left < right) {
        if (array2[left] + array2[right] == target) {
            allpairs.push([array2[left], array2[right]])
            left++;
        }
        else if (array2[left] + array2[right] > target) {
            right--;
        }
        else left++;
    }
    return [...allpairs]

}

console.log("sum of elements in array", twoSum([1, 5, 6, 3, 8, 9, 2, 4, 7], 12))