let stack = [];
{
var n1 = parseInt(prompt("ingrese un numero para agregarlo a la pila\n"));
stack.push(n1);
console.log(stack); 
 
var n2 = parseInt(prompt("ingrese otro\n"));
stack.push(n2);
console.log(stack);
 
var n3 = parseInt(prompt("ingrese otro\n"));
stack.push(n3);
console.log(stack); 
 
var a;
	do
	{
		var a = parseInt(prompt("¿Que desea hacer?(ingrese 1,2 o 3)\n 1)Agregar otro numero a la pila\n 2)Eliminar un numero de la pila\n 3)Salir"));
		if (a==1){
			var i = parseInt(prompt("ingrese el numero para agregarlo\n"));
			stack.push(i);
			console.log("se agrego un numero a la pila"); 
			console.log(stack); 
			}else
				if(a==2){
				stack.pop(a);
				console.log("se elimino un numero de la pila");
				console.log(stack); 
				}
 
	}while (a != 3)	
	console.log("Pila resultante: "+stack);
}
