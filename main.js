const bananaDiv =document.getElementById('banana');
bananaDiv.innerHTML = "I'm a banana";

let counter = 0;
counter = counter +1;
counter +=1;
counter++;

//counter = 3
console.log('counter: ', counter)


const greetingElement = document.getElementById('greeting');
const firstName = 'Shane'
const lastName = 'Wilson'
//greetingElement.innerHTML = 'Hello my name is ' + firstName + ' ' + lastName;
greetingElement.innerHTML = `Hello my name is ${firstName} ${lastName}`;