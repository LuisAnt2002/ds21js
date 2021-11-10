var start = Date.now();

function queue() {
this.dataStore = [];
this.enqueue = enqueue;
this.dequeue = dequeue;
this.front = front;
this.back = back;
this.toString = toString;
this.empty = empty;
}
function enqueue(element) {
this.dataStore.push(element);
}
function dequeue() {
return this.dataStore.shift();
}
function front() {
return this.dataStore[0];
}
function back() {
return this.dataStore[this.dataStore. length-1];
}
function toString() {
var retStr = "";
for (var i = 0; i < this.dataStore.length; ++i) {
retStr += this.dataStore[i] + "\n";
}
return retStr;
}
function empty() {
	if (this.dataStore.length = 0) {
		return true;
	}
	else {
		return false;
		}
	}
	
	
var p=0;
var q = new queue();
   	for(i=0; i<10000; i++)
    	{
		    q.enqueue((Math.random()*10000).toFixed(0));
		    p++
		}
	
var end = Date.now();
console.log("La cola esta compuesta por:\n "+q.toString());
console.log("El programa tomo "+(end-start).toFixed(2)+" milisegundos");
console.log("El programa tomo "+ p +" pasos");
console.log("El primero de la cola es: " + q.front());
q.dequeue();
console.log("Se ha eliminado al primero de la cola");
console.log("El primero de la cola ahora es: " + q.front());
console.log("El ultimo de la cola es: " + q.back());
