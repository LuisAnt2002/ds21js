function Stack() {
this.dataStore = [];
this.top = 0;
this.push = push;
this.pop = pop;
this.peek = peek;
this.clear = clear;
this. length = length;
}
function push(element) {
this.dataStore[this.top++] = element;
}
function peek() {
return this.dataStore[this.top-1];
}
function pop() {
return this.dataStore[--this.top];
}
function clear() {
this.top = 0;
}
function length() {
return this.top;
}


var s = new Stack();
var n1 = String(prompt("ingrese un nombre para agregarlo a la pila\n"));
s.push(n1);

var n2 = String(prompt("ingrese otro\n"));
s.push(n2);

var n3 = String(prompt("ingrese otro\n"));
s.push(n3);

console.log("El tamaño de la pila es de: " + s.length());
console.log("El top de la pila es: " + s.peek());

var popped = s.pop();
console.log("Se ha eliminado " + popped + " de la pila");
console.log("El top de la pila es: " + s.peek());

s.push("Cynthia");
console.log("Se ha agregado 'Cyntia' a la pila" );
console.log("El top de la pila ahora es: " + s.peek());

s.clear();
console.log("Se ha vaciado la pila");
console.log("El tamaño de la pila es de: " + s.length());
console.log("El top de la pila ahora es: " + s.peek());

s.push("Clayton");
console.log("Se ha agregado 'Clayton' a la pila" );
console.log("El top de la pila ahora es: " + s.peek());
