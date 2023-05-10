function reverse(str)
{
    let ans = "";
    let n = -1
    while (-1*n<=str.length)
    {
        ans+=str.at(n);
        n = n-1;
    }
    console.log(ans);
}

reverse("Hello");
reverse("World");