/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
/*  

NUMBER: rappresenta tutti i numeri, sia interi (10, -5) che decimali (3,14).
STRING: è una sequenza di caratteri racchiusa tra virgolette (singole ' o doppie ").
BOOLEAN: i booleani sono valori logici che possono essere solo true o false. Sono usati per esprimere condizioni logiche o compiere decisioni nel codice..
OBJECT: è una collezione di proprietà, dove ogni proprietà ha un nome (key) e un valore (value). Gli oggetti sono utili per rappresentare dati complessi, come un utente o un prodotto.
        Esempio:  let persona = {
                  nome (key): "Andrea" (value),
                  età (key): 30 (value),
                  lavoro (key): "pizzaiolo" (value)
                };
ARRAY: è una lista ordinata di valori. Ogni valore ha una posizione (indice) che inizia da 0. 
        Esempio: let numeri = [10, 20, 30, 40];
                 let frutti = ["mela", "banana", "pera"];
UNDEFINED: rappresenta l'assenza di un valore assegnato a una variabile. 
NULL: è un valore esplicito che indica l'assenza di un valore. A differenza di undefined, null viene usato per dire intenzionalmente non c'è alcun valore.
SYMBOL: è un tipo di dato unico e immutabile, spesso usato come identificatore per le proprietà degli oggetti. Ogni simbolo è diverso, anche se hanno lo stesso descrittore.
        Esempio: let simbolo1 = Symbol('descrizione');
                 let simbolo2 = Symbol('descrizione');
                 console.log(simbolo1 === simbolo2); // false
BIGINT: usato per rappresentare numeri interi molto grandi, che non possono essere rappresentati usando il tipo number. Viene creato aggiungendo una "n" alla fine del numero.
        Esempio: let numeroGrande = 19238484892948499288494n

*/

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName = "Andrea";

/* let myName = "Andrea";  */

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

x = 12;
y = 20;
let sum = x + y;
console.log(sum);

/* 
let x, y, z;
x = 12;
y = 20;
z = x + y; 
console.log(z);
*/

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* let x = 12; */

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* let myName = "Andrea";
const myName = "Padulazzi";
console.log(myName); */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* let x, y, z;
y = 4;
x = 12;
z = y - x;
console.log(z); */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";

let verifica = name1 !== name2;
if (verifica) {
  verifica = name1.toLowerCase() === name2.toLowerCase();
}
console.log(verifica);

/* let name1 = "john";
let name2 = "John";
let diversi = name1 !== name2;
console.log("name1 è diverso da name2? " + diversi);

let lowercase = name1.toLowerCase() === name2.toLowerCase();
console.log(
  "name1 e name2 sono uguali in lowercase? " + lowercase
); */
