// declare and define function here

let print1 = replaceSpaces('Today is a good day', '-')
let print2 = replaceSpaces('Tomorrow will be a great day', '_')

console.log(print1)
console.log(print2)

function replaceSpaces(string, char)
{
    return string.replaceAll(' ', char);
}



// test cases
// replaceSpaces('Today is a good day', '-'); // -> 'Today-is-a-good-day'
// replaceSpaces('Tomorrow will be a great day', '_'); // -> 'Tomorrow_will_be_a_Great_Day'
