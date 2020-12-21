import { Flight } from "../flight";

console.debug('Hallo Welt!');

let message: string = 'Hallo Welt!';

let message3: any = "Hallo Welt!";
message3 = 42; // OK

const message5 = 'Hallo';
const message6 = message5 + ' Welt';

const i2: number = parseInt("42"); // String 42 als Integer 
const d2: number = parseFloat("0.815"); // String 0.815 als Fließkommazahl
const str: any = 'ein String';

if (isNaN(str)) { 
    console.debug('Ein String ist keine Zahl!'); 
}

const name1: string = 'Max';
const name2: string = "Max";    
const name3: string = `
${name2} Mustermann`;


const firstName = null; 
if (!firstName) { 
    console.debug('firstName is falsy'); 
}


const namen: string[] = ['Max', 'Susi']; 
// Gleichbedeutende Alternative: const namen: Array<string> = ['Max', 'Susi']; 
namen.push('Rainer'); // Hinzufügen 
namen.push('Anna'); // Hinzufügen 
 
for(const entry of namen) { 
    console.debug(entry); 
}



let f: Function = function() { 
    console.debug('Hallo Welt!'); 
}
    
f(); // Aufruf von f

type MathFn = (a: number, b: number) => number;
const func: MathFn = function(a: number, b: number) { 
    return a + b; 
} 
console.debug(func(1,2));


 
const flight: Flight = { 
    id: 1, 
    from: 'Graz', 
    to: 'Hamburg', 
    date: '2018-12-24T17:00:00.0001:00' 
} 

flight.from = 'GRZ'; 
flight.to = 'HAM'; 

console.debug('from', flight.from); 
console.debug('flight', f);