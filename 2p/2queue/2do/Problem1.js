let queue = [];
{
var n1 = parseInt(prompt("ingrese un numero para agregarlo a la cola\n"));
queue.push(n1);
console.log(queue); 
 
var n2 = parseInt(prompt("ingrese otro\n"));
queue.push(n2);
console.log(queue);

var n3 = parseInt(prompt("ingrese otro\n"));
queue.push(n3);
console.log(queue);
 
var a;
	do
	{
		var a = parseInt(prompt("¿Que desea hacer?(ingrese 1,2 o 3)\n 1)Agregar otro numero a la cola\n 2)Eliminar un numero de la cola\n 3)Salir"));
		if (a==1){
			var i = parseInt(prompt("ingrese el numero para agregarlo\n"));
			queue.push(i);
			console.log("se agrego un numero a la cola"); 
			console.log(queue); 
			}else
				if(a==2){
				queue.shift(a);
				console.log("se elimino un numero de la cola");
				console.log(queue); 
				}
 
	}while (a != 3)	
	console.log("cola resultante: "+queue);
}
