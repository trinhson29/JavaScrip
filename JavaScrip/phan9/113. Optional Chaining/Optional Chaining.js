
'use strict';
const weekday = ['mon' , ' tue', 'web', 'thu' ,'fri', 'sat', 'sun'];
 const openingHours = {
    [weekdays [3]]: {
        open: 12,
        close:22,
    },
    [weekday[4]]: {
        open:11,
        close:23,
    },
    [weekday[5]]: {
        open: 0, //open 24 hours
        close:24,
    },
   
};

const retaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23 , Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic' ,'Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    //ES6 emhanced object literals
    openingHours,
   

    order(starterIndex, mainIndex){
        return [this.starteMenu[starterIndex] ,this.mainMenu[mainIndex]];
    },


    orderDelivery({
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

    orderPasta(ing1, ing2, ing3 ){
        console.log(
            `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
        );
    },
    orderPizza(maginIngredient, ... otherIngredients){
        console.log (maginIngredient);
        console.log(otherIngredients);
    },

};

if (restaurant.openingHours && restaurant. openingHours.mon)
console.log(restaurant.openingHours.mon.open);

//console.log(restaurant.open.openingHours.mon?.open);
// WITH optional chaining

console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const days =['mon', 'tue', 'wed', 'thu', 'fri', 'sat','sun'];

for (const day of days){
    const open = restaurant.openingHours[day]?.open ?? 'closed';
    console.log(`On $${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0,1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0,1) ?? 'Method does not exist' );

//Arrays
const users = [{name: 'Jonas', email: 'hello@jonas.io'}];
// const users = [];

console.log(users[0]?.name ?? 'User array empty');

if (users.length > 0) console.log(users[0].name);
else console.log('user array empty');