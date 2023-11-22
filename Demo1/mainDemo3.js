// Kieu du lieu
//1. Nguyen thuy - Primitive Data
var fullName = 'Khanh\' Vu' // \' show dau ' trong chuoi
console.log(fullName)
// * Underfined type , Null, Symbol
var age;
var isNull = null
var id = Symbol('id')// unique
var id2 = Symbol('id'); 
console.log(id===id2)

//2. Phuc tap - Complex Data
// 2.1 Funtion
var myFunction = function(){
    alert('Day la function !!')
}
// Call function
myFunction(); 

// 2.2 Object types
var myObject ={
    name : 'Khanh Sky',
    age : 18,
    address : 'Dong Nai'
}
//call obj
console.log('myobj',myObject)

//Array
var myArray=[ 
    'A',
    'B',
    'C']

// call Array
console.log(myArray)

// type of
console.log(typeof age)


