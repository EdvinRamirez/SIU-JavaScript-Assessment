// declare and define function here

console.log(compress("ssssbbz"))

function compress(string)
{
    newstring = ""
    currentcount = 1;
    currentchar = string.charAt(0)
    
    for (i = 0; i < string.length; i++)
    {
        if (string.charAt(i) == string.charAt(i+1))
        {
            currentcount++
        }
        else 
        {
            if (currentcount == 1)
            {
                newstring = newstring + currentchar
            }
            else
            {
                newstring = newstring + currentcount + currentchar
            }

            currentcount = 1
            currentchar = string.charAt(i+1)
        }
        
    }
    
    return newstring
}

// test cases
// compress('ccaaatsss'); // -> '2c3at3s'
// compress('ssssbbz'); // -> '4s2bz'
