let array = [10, 15, 4, 79, 60, 180, 120, 90, 40];
function divisible3Num(array) {
    let count = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 3 == 0 && array[i] % 4 == 0 && array[i] % 5 == 0) {
            count.push(array[i]);
        }
    }
    return count;
}
console.log(divisible3Num(array));
document.write("divisible 3 numbers in array:" + (divisible3Num(array)));