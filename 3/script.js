function replace (str)
{
    let n_str = "";
    for (let i = 0; i<str.length; i++)
    {
        if (str[i]=="a")
        {
            n_str+="b";
            console.log(i + ' ' + n_str);
        }
        else
        {
            n_str+=str[i];
            console.log(i + ' ' + n_str);
        }
    }
    return(n_str);
}

replace("Hali Wali!");
