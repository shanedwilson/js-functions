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
}
console.log(nomnom('shane', bearSticks)); //shane devoured bear stix
console.log(nomnom('stacye', 'blackbeans'));