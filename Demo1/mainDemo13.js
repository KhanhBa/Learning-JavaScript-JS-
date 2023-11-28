// loop for
function getRandNumbers(min, max, length) {
    var result = []; 
    for (var i = 1; i <= length; i++) {
            var getNumber = Math.random() * (max - min) + min;
              result.push(getNumber);
             } 
    return result; }

var end = getRandNumbers(1, 10, 3);
// console.log(end);
var orders = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
]
function getTotal(orders){ var total = 0; for(var i = 0; i < orders.length; i++){ total += orders[i].price; } return total; }


// Expected results:
getTotal(orders) // Output: 8700000

// Loop For/in
for(var key in orders){
    console.log(orders[key])
}
// Loop For/of
for(var key of Object.keys(orders)){
    console.log(orders[key])
}