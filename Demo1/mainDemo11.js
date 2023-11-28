// If Else

function run(a) {
    // 
    if(a%15 == 0) return 3
        else if(a%5==0) return 2
            else if(a%3== 0) return 1
}


// Kỳ vọng
console.log(run(3)) // 1
console.log(run(5)) // 2
console.log(run(15)) // 3

// switch

function run(fruits) {
    var result;

   switch (fruits) {
        case   "Banana":
            result = "This is a Banana";
        break;
        case    "Apple":
            result = "This is an Apple";
        break;
        default:
        
    }

    return result;
}
console.log(run('Banana'))