function toCurrency(price){
    return Intl.NumberFormat('en').format(price)
}

console.log(toCurrency(100000000000))