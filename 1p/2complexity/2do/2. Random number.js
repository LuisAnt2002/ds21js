var n = parseInt(prompt("ingrese el límite"));
 
 
	function genrandoom(n)
 
	{
    	return Math.floor(Math.random() * (n - 1)) + 1;
	}
 
genrandoom(n);
