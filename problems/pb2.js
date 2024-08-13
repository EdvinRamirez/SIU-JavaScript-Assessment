// declare and define function here

console.log(mostFrequentChar("bookeeper"))

function mostFrequentChar(string)
{
    mostchar = string.charAt(0)
    mostcount = 1
    currentcount = 1
    currentinstance = string.charAt(0)
    lastinstance = string.charAt(0)
    for (i = 1; i < string.length; i++)
    {
        tempchar = string.charAt(i)
        
        if (tempchar != mostchar)
        {
        for (j = 1; j < string.length; j++)
            {
                if (tempchar == string.charAt(j))
                {
                    currentcount++
                }
            }
        }
        
            if (currentcount > mostcount)
            {
                mostcount = currentcount
                mostchar = tempchar
                currentcount = 0
            }
        
    }
    return mostchar
}



// test cases
// mostFrequentChar('bookeeper'); // -> 'e'
// mostFrequentChar('mississippi'); // -> 'i'. 'i' and 's' appear with same frequency in 'mississippi' but 'i' appears first!

// test cases
// mostFrequentChar('bookeeper'); // -> 'e'
// mostFrequentChar('mississippi'); // -> 'i'. 'i' and 's' appear with same frequency in 'mississippi' but 'i' appears first!
