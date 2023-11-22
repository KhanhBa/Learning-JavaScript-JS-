// String in Javascript
//backslash(\)
var fullName='Khanh Vu la \'Sky\''
console.log(fullName)
// .length
//console.log('Do dai '+ fullName.length)

//Template String ES6
//console.log(`${fullName} la tin chuan`)

var myString = 'Khanh Ba la fan Kha Banh Ba hihi'

// Find index: indexOf, lastIndexOf,search
var findString = 'Ba'
function findIndex(fullString,find,index){
    console.log(fullString.indexOf(find,index))
}
//findIndex(myString,findString,7)

// Cut String(Left to right)
//console.log(myString.slice(6,15))
// Cut String(Right to Left)
//console.log(myString.slice(-4,-2))

//Replace
//console.log(myString.replace(/Ba /g,'3? '))

//convert to upper,lower case
var setString = 'Hihi mY nAmE is K'
//console.log(setString)
//console.log(setString.toLowerCase())
//console.log(setString.toUpperCase())

//Trim
//console.log('    hihi   '.trim())

//Split (cat chuoi theo dinh dang)=> Array
var language ='VN, Lao, Thai, Cam, Meo'
//console.log(language.split(', '))

// Get a char by index
//console.log(language.charAt(0))