// thong bao bang ham alert
alert('hi javascrip basic!')

// khai bao bien
var fullName = 'Vu Hoang Duy Khanh';
var age = 26;
alert(fullName);
alert(age);

// ham build-in

// 1.Alert
// 2.Console
console.log('Day la 1 dong log')
// 3.Confirm (tra value boolean)
confirm('Xac nhan ban khong phai nguoi may !');
// 4.Prompt (tra value nhap vao)
prompt('Xac nhan ban khong phai nguoi may !')
// 5.SetTimeout
setTimeout(function(){
alert('thong bao setTimeout')
},1000)
//  6.SetInterval
setInterval(function(){
    console.log('Day la log' + Math.random())
},1000)