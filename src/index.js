module.exports = function check(str, bracketsConfig) {

    bracketsConfig = bracketsConfig.map((subArr) => subArr.join(''))
    let splittable = true;

    while (splittable) {
        splittable = false;
        let comparedStr

        for (pair of bracketsConfig) {
            comparedStr = str.split(pair).join('')
            if (str.length > comparedStr.length) {
                splittable = true;
                str = comparedStr;
            }
        }
    }

    if (str.length > 0) {
        return false
    }
    return true
}
