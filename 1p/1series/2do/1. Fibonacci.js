function Fibonacci(n)
{
    let a = 0, b = 1, i;
 
    if (n < 1)
        return;
    console.log(a + " ");
    for (i = 1; i < n; i++) {
        console.log(b + " ");
        let next = a + b;
        a = b;
        b = next;
    }
}
 
    Fibonacci(10);
