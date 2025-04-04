function findLongestWord(str){
    const str2 = str.split(/\s+/).map(word => word.replace(/[^a-zA-Z0-9]/g,""));

    const Longest = str2.reduce((longest,currentWord)=>{
        return currentWord.length > longest.length ? currentWord : longest;
    },"");

    return longest;
}


const inputString = "The quick brown fox jumped over the lazy dog!";
console.log("Longest word:", findLongestWord(inputString)); 