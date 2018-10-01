const promise = new Promise((resolve, reject) => {
	setTimeout( ()=> {
		// resolve({
		// 	name: 'Mauro',
		// 	age: 31
		// });
		reject('Something went wrong');
	}, 1500)
});

console.log('before');

promise.then((data) => {
	console.log('1', data);
}).catch((error) => {
	console.log('Something went wrong', error);
});


console.log('after');

