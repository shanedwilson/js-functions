let bandNumber = 1;

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};

const takeNumber = (bandName) => {
    printToDom(`<h2>${bandNumber}: ${bandName}</h2>`, 'bands');
    bandNumber++;
};

takeNumber("Galactic Scum");
takeNumber("Underdogs");
takeNumber("Altar Boys");
takeNumber("The Choir");