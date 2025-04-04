function sortAscending(arr){
    let n = arr.length;
    for(let i=0;i<n-1;i++){
        let swap = false;
        for(let j=0;j<n-1-i;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swap=true;
            }
        }
        if(!swap) break;
    }
    return arr;
}


console.log(sortAscending([2,5,1,3,-2,-1,4]));