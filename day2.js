function generateHash(str){
    if(!inputString.trim()) return false;
    const str2 = str.replace(/\s+/g,'');
    return '#'+str2.toUpperCase();
}

const inputString = "My name is Viraj";
console.log(generateHash(inputString));