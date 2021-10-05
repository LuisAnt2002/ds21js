const mapa=new Map()
var total=0

function gen()
{
return Math.floor(Math.random()*(10000-1)+1);
}

for(k=0;k<7; k++){
  	var start = Date.now();
		for(i=0;i<100000;i++){
			mapa.set(i,"Name"+gen());  
			}
			var end = Date.now();
			t = end-start;
    		total = total+t;
}

console.log(mapa)
console.log("Promedio en 7 iteraciones: "+total/7);
