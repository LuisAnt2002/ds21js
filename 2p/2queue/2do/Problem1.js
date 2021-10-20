function Queue() {
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



var q = new Queue();
var n1 = String(prompt("ingrese un nombre para agregarlo a la cola\n"));
q.enqueue(n1);

var n2 = String(prompt("ingrese otro\n"));
q.enqueue(n2);

var n3 = String(prompt("ingrese otro\n"));
q.enqueue(n3);

console.log("La cola esta compuesta por:\n "+q.toString());
q.dequeue();
console.log("Se ha eliminado al primero de la cola");
console.log("La cola ahora esta compuesta por:\n "+q.toString());
console.log("El primero de la cola es: " + q.front());
console.log("El ultimo de la cola es: " + q.back());
