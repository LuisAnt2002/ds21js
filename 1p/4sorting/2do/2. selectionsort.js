var start = Date.now();
let arr = Array.from({length: 10000}, () => Math.floor(Math.random() * 10000));
console.log("array random")
console.log(arr)
var s = 0;

function selectionSort(arr){
	for(let i = 0; i < arr.length - 1; i++){
	let minIndex = i;
	for (let j = i + 1; j <arr.length; j++){
		if (arr[j] < arr[minIndex]){
			minIndex = j;
			s++;
		}
}
const temp = arr[i];
arr[i]= arr[minIndex];
arr[minIndex] = temp;
}
return arr;
}

selectionSort(arr);
console.log("array ordenado")
console.log(arr)
console.log("se tomo " + s + " pasos");
var end = Date.now();
console.log("Con una duración de  " + (end - start) + " milisegundos")
