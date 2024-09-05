const numbers = [4, 6, 8, 9, 11];

// function to add 5 to all the numbers
//
function add(num){
	return num + 5;
}

const newNumbers = numbers.map(add);

console.log(newNumbers);

// Map() creates a new array from calling a funciton for every array element
// map() does not execute the function for empty
// elements
// map() does not change the original array.
//
const persons = [
	{ firstName: 'Joel', lastName: 'Abbah'},
	{ firstName: 'Atabor', lastName: 'Edeboh'},
	{ firstName: 'David', lastName: 'Agor'}
];

// to get the full name
function getFullName(lst){
	const newL = [lst['firstName'], lst['lastName']];
	return newL.join(' ');
};

const friends = persons.map(getFullName);
console.log(friends);

const cities = ['jos', 'kaduna', 'sokoto']

console.log(cities.join(' '));
