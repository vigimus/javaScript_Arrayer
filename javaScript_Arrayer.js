// Här nedan skapar vi arrayer i JavaScript
//Ett bättre namn hade varit listaAvDjur t.ex
// I en array så är inte det första objektet 1 utan det är 0 så 0, 1, 2, 3

var lista = ["giraff", "lejon", "apa"];
console.log(lista[0]);

var nummer = [1,2,3,4];

var booleans = [true, false, true];

var functionLista = [function apple() {
	console.log("apple");
}]

//Inte att rekomendera prestanda mässigt men du kan fortfarande använda flera olika datatyper från JavaScript i samma array
var mixadLista = ["apple", 4, undefined, false, function apple() {
	console.log("apple");
}]

//Man kan även skapa arrays i arrays
var listaTva = [
	["giraff", "lejon", "apa"]	
	];

//Eftersom vi har flera arrayer behöver vi först specificera vilken array vi väljer mellan sedan vilket objekt inuti
console.log(listaTva[0][1]);

//lista.shift(); är en funktion man kan använda på arrays för att ta bort det första värdet
//lista.pop(); tar bort det sista världet i arrayen
//lista.push("elefant"); lägger till värdet "elefant" till arrayen lista
//lista.concat(["varg", "fågel", "bi"]); lägger till flera värden till arrayen lista
// 0, 1, 2, 3, 4 kallas för index
//list.sort(); sorterar arrayen lista i bokstavsordning