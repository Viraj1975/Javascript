function countChar(str,ch){
    let count = 0;
    // iterates over indexes i.e x is the index value
    // for(let x in str){
    //     if(str[x]===ch) count++;
    // }

    // iterates over the characters i.e x is the character value
    const lowerch = ch.toLowerCase();
    for(let x of str){
        if(x.toLowerCase()===lowerch) count++;
    }
    return count;
}


const str = "My name is viraj.I love Programming.I am currently studying in prayagraj,uttar pradesh.";
console.log(countChar(str,'i'));