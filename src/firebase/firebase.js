import * as firebase from 'firebase';
import moment from 'moment';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);
const database = firebase.database();

export { firebase, database as default };












// database.ref('expenses').on('value', (snapshot) => {
// 	const ref = snapshot.val()
// 	console.log(ref)
// 	ref.forEach( (childSnapshot) => {
// 		console.log(childSnapshot)
// 	})
// })

// const backValue = database.ref('users').push({
// 		name: 'Eduardo Varettoni',
// 		age: 63,
// 		stressLevel: 8,
// 		job: {
// 			title: 'Administración',
// 			company: 'Asinmet'
// 		},
// 		location: {
// 			city: 'Mendoza',
// 			country: 'Argentina'
// 		},
// 		email: 'eduardo.varettoni@asinmet.com'
// });

// database.ref('expenses/-LNVmRJO0-9mFJSp0uHq').update({
// 	note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus iure dolorem distinctio, neque minima atque nobis nulla! Rem quos architecto recusandae, tempora eaque sit aspernatur, quia, consectetur numquam saepe eveniet?'
// })

// console.log('backvalue', backValue)

// database.ref('expenses/-LNVmHMniH2TyqsXLNWS').once('value').then( (snapshot) => {
// 	console.log(snapshot.val())
// })


// database.ref('users').orderByChild('name').equalTo('Eduardo Varettoni').on('value', (snapshot) => {
// 	console.log(snapshot.val());
// 	snapshot.forEach( () => {
// 		console.log(data.key)
// 	})
// })


// database.ref().set({
// 	name: 'Mauro Barrionuevo',
// 	age: 31,
// 	stressLevel: 6,
// 	job: {
// 		title: 'Sofware Developer',
// 		company: 'Google'
// 	},
// 	location: {
// 		city: 'Mendoza',
// 		country: 'Argentina'
// 	},
// 	email: 'mauroeloy03@gmail.com'
// }).then( () => {
// 	console.log('Data is saved');
// }).catch( (error) => {
// 	console.log('Something went wrong', error);
// });



// database.ref().on('value', (snapshot) => {
// 	const val = snapshot.val();
// 	console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// });


// setTimeout( () => {
// 	database.ref().update({
// 		name: 'Andrew Mead',
// 		'job/title': 'Software Manager',
// 		'job/company': 'Google',
// 		jog:null
// 	})
// },3000)

// setTimeout( () => {
// 	database.ref().off()
// },6000)

// setTimeout( () => {
// 	database.ref().update({
// 		name: 'Mauro Barrionuevo',
// 	})
// },9000)


// database.ref().on('value', (snapshot) => {
// 	console.log(snapshot.val())
// })

// setTimeout( ()=> {
// 	database.ref('age').set(90);
// },3500)
// database.ref('location')
// 	.once('value')
// 	.then((snapshot) => {
// 		const val = snapshot.val();
// 		console.log(val)
// 	}).catch( (e) => {
// 		console.log('Error fetching data', e)
// 	})



// database.ref('isSingle').remove()
// .then( () => {
// 	console.log('isSingle was removed')
// }).catch( (error) => {
// 	console.log('is Single wasnt remove due to an error', error)
// })

// database.ref('location').update({
// 	city: 'New York'
// }).then( () => {
// 	console.log('updated')
// }).catch( (e) => {
// 	console.log('error')
// })


// database.ref().once('value')
// 	.then( (snapshot) => {
// 	const name = snapshot.val().name
// 	console.log(name)
// })

// database.ref().update({
// 	stressLevel: 9,
// 	'job/company': 'Amazon',
// 	'location/city': 'Seattle'
// })