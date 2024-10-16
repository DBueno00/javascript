function fatorial(x){
    let fat = 1
    for(c = x; c > 1; c--){
        fat = fat * c
    }
    return fat
}
console.log(fatorial(5))

// 1 = 1 * 5
// 5 = 5 * 4
// 20 = 20 * 3
// 60 = 60 * 2
// 120 = 120 * 1

