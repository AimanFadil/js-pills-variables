/* ES 1 */
/* let number = 100;
console.log(number); */

/* ES 2 */
/* const PI = 3.14;
console.log(PI); */

/* ES 2/b */
/* PI = 3.1416;
console.log(PI); ERRORE*/ 

/* ES 2/C */
/* let radius = 8;

let circle = radius * 2 * PI;
console.log(circle)
 */
/* ES 3 */

/* let name = 'carlo';
name = 'marco';
console.log(name);
 */
/* ES 4  */
/* let greet = 'Ciao Mondo!';
console.log(greet); */

/* ES 4/B  */
/* let greet = 'Come stai, Mondo!';
console.log(greet); */

/* ES 4/C  */
/* let scritta = `${greet}Come stai?`;
console.log(scritta) */

/* ES1.2 */
/* let num_0 = 41;
let num_1 = 30;

let comparison;

if(num_0 > num_1){
    comparison = num_0
}
else{
    comparison = num_1
}

console.log(comparison)
 */
/* ES1.2 */

/* let ciao = ciao;

let buongiorno = ciao;

let comparison;

if(ciao == buongiorno){
    comparison = "true"
}
else{
    comparison = "false"
}

console.log(comparison)
 */
//ES 2.1

/* let n = 1;

let comparison;

if(n == '1'){
    comparison = "true"
}
else{
    comparison = "false"
}

console.log(comparison) */

/* Esercizio 1/a */

/* for(let i = 1; i <=42; i++  ){
    console.log(i)
} */

/* Esercizio 1/a* */

/* for(let i = 42; i <=1; i--  ){
    console.log(i)
} */

/* Esercizio 1/b* */
/* const  numbers = [1, 2, 3, 4, 5, 6, 7, 8,]


console.log(numbers) */

/* Esercizio 1/c* */
/* 
const fruits = ['mela', 'banana', 'pesca', 'pera', 'albicocca', 'mango', 'kiwi', 'papay']

console.log(fruits) */

/* Esercizio 1/c* */
/* console.log(fruits.length) */

//**Esercizio 2/A**
/* const numOfElements = prompt('inserici il numero')
let numbers = [];

for (let i = 1; i <= numOfElements; i++) {
    numbers.push(i);
}
console.log(numbers)
console.log(numbers.length) */

/* **Esercizio 2/B**  */
/* const numOfElements = prompt('inserici il numero')
let numbers = [];
let somma = 0;

for (let i = 1; i <= numOfElements; i++) {
    numbers.push(i);
} */
/* for(let i = 0; i <numbers.length; i++){
    somma = somma + numbers[i]
}
console.log(somma) */

/* **Esercizio 2/C** */
/* let maggiore = numbers
for(let i = 1; i < numbers.length; i++){
    if( numbers[i] > maggiore){
        maggiore = numbers[i]
    }
}
console.log(maggiore) */

//snack 1
/* let num_1 = parseInt(prompt('inserisci un numero'))
let number = parseInt(prompt('inserisci un numero'))

if(num_1 > number){
    console.log(num)
}
else if(num_1 < number){
    console.log(number)
}
else{
    console.log('i numeri sono uguali')
} */

//snack 2

/* let somma = 0
for(let i=1; i<=10; i++){
    let num = parseInt(prompt('inserisci un numero'))
    somma += num;
}
console.log(somma) */

//snack 3

//METODO CON FOR E IF ELSE fUORI DAL FOR 
/* let nome = prompt('chi sei');
let invitati = ['franco', 'ciccio', 'zio', 'pippo', 'cuggino']

let presente = false;
for (let i = 0; i < invitati.length; i++) {
    if (invitati[i] === nome) {
        presente = true;
    }
}

if (presente) {
    console.log('il tuo invito è valido');
} else {
    console.log('il tuo invito non è valido');
}
 */
//snack 4

/* let vuoto = []


for(let i=1; i<=6; i++){
    let num = parseInt(prompt('inserisci un numero'))
    
    if(num % 2 != 0){
        vuoto.push(num)
    }
    
}
console.log(vuoto) */


//**Esercizio 1/A**
/* function CiaoMondo(){
    console.log('Ciao,Mondo')
}
 */
//**Esercizio 1/B**
/* printCiaoMondo(); */

//**Esercizio 2/A**
/* 
function somma(num1, num2) {
    return num1 + num2;
}
 */
//**Esercizio 2/B**

/* let result = somma(5, 7);
console.log(result);  */

//**Esercizio 1/A**

function getOneStringFromTwo(stringa1, stringa2) {
    return stringa1 + ' ' + stringa2;
}

//**Esercizio 1/B**
let stringa1 = "Unica";
let stringa2 = "Stringa";
let StringheCombinate = getOneStringFromTwo(stringa1, stringa2);
console.log(StringheCombinate); 