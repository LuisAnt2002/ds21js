var Arr = [1,2,3,4,5,6,7,8,9,10]
console.log(Arr)

var p = parseInt(prompt("Introduce la posición del numero que deseas remover"));

removerdatos(p,1)

function removerdatos(p,n)

	{
		Arr.splice(p,n)
	}

console.log(Arr)
