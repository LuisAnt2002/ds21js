let obj={}
var total=0

const add    = (key, value) => obj[key] = value
const get    = (key)  => obj[key]
const remove = (key)  => delete obj[key]
const clear  = ()  => obj = {}

function gen()
{
	return Math.floor(Math.random()*(100000-1)+1);
}

for(k=0;k<7; k++){
	var start = Date.now();
		for(i=0;i<100000;i++){
    		add(i,"Name"+gen());  
			}
				var end = Date.now();
				t = end-start;
    			total = total+t;
  
			}
console.log(obj)
console.log("Promedio en 7 iteraciones: "+total/7);
