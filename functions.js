// input = animal ex. fish
// output = animal product ex. fish stix

function nuggetizer(animal) {
    return `${animal} stix`;
}

console.log('fish:', nuggetizer('fish'));
console.log('cat:', nuggetizer('cat'));
console.log('bear:', nuggetizer('bear'));

const nuggetizer2 =(animal) => {
    return `${animal} jerky`
};
console.log ('deer:', nuggetizer2('deer'));

const bearSticks = nuggetizer('bear');

const nomnom =(name, food) => {
    return `${name} devoured ${food}`
};
console.log(nomnom('shane', bearSticks)); //shane devoured bear stix
console.log(nomnom('stacye', 'blackbeans'));

//function numberAdder that takes in a number and 
//returns the number plus 3. ex i/p 22 o/p 25

const numberAdder = (num) => {
    const finalNumber =  num + 3;
    printToDom(`<h2>${finalNumber}</h2>`, 'allTheNumbers')
};

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};

numberAdder(22);
numberAdder(2);
numberAdder(4);
numberAdder(6);
numberAdder(12);


printToDom('I am ready for lunch', 'feelings');