let n = 5;
let f = 1;

function fa(a)
{
    for (let i = 2; i<=a+1; i++)
    {
        console.log(f);
        f*=i;
    }
}

fa(5);