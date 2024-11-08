/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish'];
console.log(pets[0]);
console.log(pets[1]);
console.log(pets[2]);
console.log(pets[3]);

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
pets.sort();
console.log(pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
pets.reverse();
console.log(pets);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
const newPets = ['dog', 'cat', 'hamster', 'redfish'];
console.log(newPets);
newPets.shift();
console.log(newPets);
newPets.push("dog");
console.log(newPets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]
const licensePlate = ["F00K U69", "S3XY 80Y", "8I7C W7F"];
cars[0].licensePlate = licensePlate[0];
cars[1].licensePlate = licensePlate[1];
cars[2].licensePlate = licensePlate[2];
console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
cars.push({
  brand: "Mazda",
  model: "Miata",
  color: "red", 
  trims: ["sport", "Swag", "Spiderman"]
});
let removeLastelement = cars.pop("trims");
console.log(cars);


/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
/*
for(i=0, i<cars.length, i++){
  if(){

  }

}
*/
/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
let i = 0;
while(i < numericArray.length[14], i++){
};
console.log(numericArray);

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']
function alphabetPosition(char) {
  switch(char){
  case "a":
    return "1";
    case "b":
    return "2";
    case "c":
    return "3";
    case "d":
    return "4";
    case "e":
    return "5";
    case "f":
    return "6";
    case "g":
    return "7";
    case "h":
    return "8";
    case "i":
    return "9";
    case "l":
    return "10";
    case "m":
    return "11";
    case "n":
    return "12";
    case "o":
    return "13";
    case "p":
    return "14";
    case "q":
    return "15";
    case "r":
    return "16";
    case "s":
    return "17";
    case "t":
    return "18";
    case "u":
    return "19";
    case "v":
    return "20";
    case "z":
    return "21";
    default:
      console.log("non fa parte dell'alfabeto italiano o hai inserito un carattere maiuscolo")
    }

    }
    const numberArray = [];
    let position;
    for (let i = 0; i < charactersArray.length; i++) {
      const char = charactersArray[i];
      position = alphabetPosition(char);
      numberArray.push(position);
  }
    
    console.log(numberArray);
