function findMax(arr){
    return arr.reduce((acc,num)=>Math.max(acc,num),-Infinity);
}

let nums = [10, 5, 20, 8, 15];
let doubled = nums.map(num => num*2);
let filtered = doubled.filter(num => num > 16);
console.log(findMax(nums));

console.log(doubled);
console.log(filtered);