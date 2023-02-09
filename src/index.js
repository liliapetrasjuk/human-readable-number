module.exports = function toReadable (number) {
    const first  = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine','ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
      'seventeen', 'eighteen', 'nineteen'];
    const second  = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty','ninety'];
    
    let str = number.toString()
    let result = '';

    if (number === 0){
        return result = 'zero';
    } else if (number < 20){
        return first[number-1];
    } else if (str[1] === '0' && number <= 99){
        return second[str[0]-2];
    } else if (str[1] != '0' && number <= 99) {
        return second[str[0] - 2] + ' ' + first[str[1] - 1];
    } else if (str[1] === '1' && number > 100) {
        return first[str[0] - 1] + ' hundred ' + first[str[1] + str[2]  - 1]
    } else if (str[1] != '0' && str[2] != '0' && number > 100) {
        return first[str[0] - 1] + ' hundred ' + second[str[1] - 2] + ' ' + first[str[2] - 1]
    } else if (str[1] != '0' && str[2] === '0' && number > 100) {
        return first[str[0] - 1] + ' hundred ' + second[str[1] - 2]
    }  else if (str[1] && str[2] === '0') {
        return first[str[0] - 1] + ' hundred' 
    } else if (str[1] === '0' && number > 100) {
        return first[str[0] - 1] + ' hundred ' + first[str[2] - 1] 
    } 
    


}