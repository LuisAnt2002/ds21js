var Arr = [1,2,3,4,5,6,7,8,9,10]
console.log(Arr)

var v = parseInt(prompt("Introduce el valor que deseas insertar: "));
var p = parseInt(prompt("Introduce la posición en la que deseas que se inserte"));

insert(p,v)

function insert(p,v)

	{
		Arr.splice(p,0,v)
	}

console.log(Arr)
