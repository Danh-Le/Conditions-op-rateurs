// // 01 - Comparaison
// const test = 143
// const bis = 219
// console.log(test>bis)
// console.log(test<bis)
// console.log(test>=bis)
// console.log(test<=bis)
// console.log(test!=bis)
// console.log(test!==bis)

// 02 - Condition
// const limit = 50
// const score = 64
// if (score>=limit) {
//     console.log("Ok good!")
// }else {
//     console.log("Oh nooo...")
// }
// const limit = 50
// const score = 43
// if (score>=limit) {
//     console.log("Ok good!")
// }else {
//     console.log("Oh nooo...")
// }

// // 03 - Condition II
// const password = "azerty"
// if (password.length>5) {
//     console.log("The password is secure")
// }

// // 04 - Condition III
// const limit = 50
// const score = 64
// const password = "azerty"
// if (score>=limit && password.length>5) {
//     console.log("Everything is good")
// }
// else if (score>=limit || password.length>5) {
//     console.log("Something is good")
// }
// else {
//     console.log("Nothing is good")
// }

// // 05 - Random
// const random = Math.ceil(Math.random()*6)
// if (random === 6) {
//     console.log("Yes, I win!")
// }
// else {
//     console.log("So close...")
// }

// // 06 - Month
// const month = "January"
// switch (month) {
// 	case "January": 
// 		console.log("Winter")
// 		break;
// 	case "February": 
// 		console.log("Winter")
// 		break;
// 	case "March": 
// 		console.log("Spring")
// 		break;
// 	case "April": 
// 		console.log("Spring")
// 		break;
//     case "May": 
// 		console.log("Spring")
// 		break;
// 	case "June": 
// 		console.log("Summer")
// 		break;
//     case "july": 
// 		console.log("Summer")
// 		break;
//     case "August": 
// 		console.log("Summer")
// 		break;        
//     case "September": 
// 		console.log("Fall")
// 		break;
// 	case "October": 
// 		console.log("Fall")
// 		break;
//     case "September": 
// 		console.log("Fall")
// 		break;
//     case "December": 
// 		console.log("Winter")
// 		break;              
// 	default: 
// 		console.log("That's not a season...")
// }
// const month = "June"
// switch (month) {
// 	case "January": 
// 		console.log("Winter")
// 		break;
// 	case "February": 
// 		console.log("Winter")
// 		break;
// 	case "March": 
// 		console.log("Spring")
// 		break;
// 	case "April": 
// 		console.log("Spring")
// 		break;
//     case "May": 
// 		console.log("Spring")
// 		break;
// 	case "June": 
// 		console.log("Summer")
// 		break;
//     case "July": 
// 		console.log("Summer")
// 		break;
//     case "August": 
// 		console.log("Summer")
// 		break;        
//     case "September": 
// 		console.log("Fall")
// 		break;
// 	case "October": 
// 		console.log("Fall")
// 		break;
//     case "September": 
// 		console.log("Fall")
// 		break;
//     case "December": 
// 		console.log("Winter")
// 		break;              
// 	default: 
// 		console.log("That's not a season...")
// }

// // 07 - Rounded but better
// const roundedNumber = 3.6
// // console.log(Math.ceil(roundedNumber))
// // console.log(Math.floor(roundedNumber))
// if (roundedNumber-Math.floor(roundedNumber) < 0.5) {
//     console.log(Math.floor(roundedNumber))
// }
// else {
//     console.log(Math.ceil(roundedNumber))
// }

// // 08 - Rounded but better, Methode 2
// const roundedNumber = 673.123
// const string = roundedNumber.toString()
// const dec = string.indexOf(".")+1
// const decbis = dec +1
// const sub = string.substring(dec, decbis)
// console.log(sub)
// if (sub < 5) {
//     console.log(Math.floor(roundedNumber))
// }
// else {
//     console.log(Math.ceil(roundedNumber))
// }

// 09 - Rounded but better, Methode 3
const roundedNumber = 5657.765
const string = roundedNumber.toString()
const split = string.split(".")
const dec = split +1
... à suivre