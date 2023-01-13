
'use strict';

const retaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23 , Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic' ,'Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close:22,
        },
        fri: {
            open:11,
            close:23,
        },
        sat: {
            open: 0, //open 24 hours
            close:24,
        },
       
    },

    order: function (starterIndex, mainIndex){
        return [this.starteMenu[starterIndex] ,this.mainMenu[mainIndex]];
    },

    orderDelivery: function({
        starterIndex = 1,
        mainIndex = 0,
        time = '20.00',
        address,
    }) {
        console.log(
            `Order received! ${this.starterMenu [starterIndex]} and {this.mainMenu[mainIndex]}
            will be delivered to ${address} at ${time}`
        );

    },

    orderPasta: function(ing1, ing2, ing3 ){
        console.log(
            `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
        );
    },
    orderPizza:function(maginIngredient, ... otherIngredients){
        console.log (maginIngredient);
        console.log(otherIngredients);
    },

};


console.log('----OR ----');
//Use any data type , return any data type, short-cỉcuiting
console.log(3|| 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log (undefined   || 0 || '' || 'Hello' ||23 || null);

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests :10;
console.log(guests1);

const guests2 = retaurant.numGuests || 10;
console.log(guests2);

console.log('----AND----');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello'&& 23 && null && 'jonas');

//practical example
if (restaurant.orderPizza){('mushrooms', 'spinach');
}
restaurant.orderPizza && retaurant.orderPizza
('mushroom' ,'spinach');