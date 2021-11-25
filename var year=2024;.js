var year=2024;
debugger;
if(year % 4===0)
{
    if(year % 100 ===0)
    {
        if(year % 400===0)
        {
            console.log("The year " + year + " is a leap year");
        }
        else
        {
            console.log("The year " + year + " is not a leap year");
        }
    }
    else
    {
        console.log("The year " + year + " is a leap year");
    }
}
else
{
    console.log("The year " + year + " is not a leap year");
}//How to check is it a leap year or not?
