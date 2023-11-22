//Function
// demo
function demoFunction(){
    alert('Demo function')
}
//demoFunction();

// Truyen tham so
function writeLog(){
   // vong for of
    for(var param of arguments){
        console.log(param)
    }
}
//writeLog('Hello message','Body message','End message')

// * test
function getListNumber(){
    var myString ='';
    for(var param of arguments){
        myString += `${param} - `
    }
    console.log(myString)
}
//getListNumber('1','2','3','4')

// return trong Function
var isConfirm= confirm('Messager?')
//console.log(isConfirm)

function sum(a,b){
    return a+b;
}
var result = sum(2,8)
//console.log(result)

// Declaration Function (call bat ki dau)
showMessage()
function showMessage(){
    console.log('Declaration Function')
}

// Expression Function(chi call sau khai bao)
var showMessage2 = function(){
    console.log('Expression Function')
}
showMessage2();