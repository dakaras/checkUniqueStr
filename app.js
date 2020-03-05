function checkUnique(str) {

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                return false // if match, return false
            }
        }
    }
    return true // if no duplicates, return true 
}
console.log(checkUnique('abcd'), 'true');
console.log(checkUnique('abccd'), 'false');
console.log(checkUnique('bhjjb'), 'false');
console.log(checkUnique('mdjq'), 'true');