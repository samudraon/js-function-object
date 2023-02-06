var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}
// when you know the specific property name, use dot notation to get the property value 
var penCount = shoppingCart.pen;
// alternative System
var penCount2 = shoppingCart['pen'];
// console.log(penCount2);

var propertyName = 'mouse';

var propertyValue = shoppingCart[propertyName];
// console.log(propertyName, propertyValue);

var properties = Object.keys(shoppingCart);
// console.log(properties);

var propertyValue = Object.values(shoppingCart);
// console.log(propertyValue);
console.log(shoppingCart);

// set property value
shoppingCart.mouse = 15;
console.log(shoppingCart);
shoppingCart['mouse'] = 30;
console.log(shoppingCart);
shoppingCart[propertyName] = 90;
console.log(shoppingCart);

var movie = {
    name: 'Din'
}

movie.name = 'Hawa';
console.log(movie);