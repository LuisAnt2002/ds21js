var start = Date.now();
console.log(start)
let arr = Array.from({length: 10000}, () => Math.floor(Math.random() * 10000));
var s = 0;

function swap(i, o) {
	t = arr[i]
	arr[i] = arr[o]
	arr[o] = t
}

function bubble(arr){
	for(let i = 0; i < arr.length; i++){
		for(let j = 0; j< arr.length - 1; j++){
			if(arr[j] > arr[j+1]){
				swap(j, j + 1)
				s++;
				
			}
		}
		
	}
	
}
bubble(arr)
console.log(arr)
console.log("se tomo " + s + " pasos");
var end = Date.now();
console.log(end)
console.log("Con una duración de  " + (end - start) + " milisegundos")
