function sieveOfEratosthenes(n)
{
    prim = Array.from({length: n+1}, (_, i) => true);
 
    for (p = 2; p * p <= n; p++)
    {
        if (prim[p] == true)
        {
            for (i = p * p; i <= n; i += p)
                prim[i] = false;
        }
    }
    for (i = 2; i <= n; i++)
    {
        if (prim[i] == true)
            console.log(i + " ");
    }
}
var n = 50;
sieveOfEratosthenes(n);
