function isPalindrome(str){
    let n = str.length;
    let i=0;
    let j=n-1;

    while(i<=j){
        if(/[a-zA-Z]/.test(str[i]) && /[a-zA-Z]/.test(str[j])){
            if(str[i].toLowerCase()!==str[j].toLowerCase()) return false;
            else{
                i++;
                j--;
            }
        }
        if(!/[a-zA-Z]/.test(str[i])) i++;
        if(!/[a-zA-Z]/.test(str[j])) j--;
    }
    return true;
}

const str = "R/a|c?e1234car";
console.log(isPalindrome(str));