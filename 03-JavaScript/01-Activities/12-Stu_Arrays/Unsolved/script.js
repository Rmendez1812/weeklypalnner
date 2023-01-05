// WRITE YOUR CODE HERE
var StudentNames = ['Bob', 'Sally', 'James', 'Tina'];

console.log ('Welcome to the class '+ StudentNames[0] +'.');

console.log ('Welcome to the class '+ StudentNames[1] +'.');

console.log ('Welcome to the class '+ StudentNames[2] +'.');

console.log ('Welcome to the class '+ StudentNames[3] +'.');

StudentNames[0] = 'Gina';

if (StudentNames[0] === 'Gina') {
    console.log(StudentNames[0] + ' is in class!');
}
