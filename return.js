function bringSingara(money) {
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}
var singaras = bringSingara(150);
console.log('Singra Given:', singaras);