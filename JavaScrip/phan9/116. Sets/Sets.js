
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

const orderSet = new Set ([
    'Pasta',
    'Pizza',
    'Pizza',
    'Risotto',

]);
console.log(orderSet);
console.log(new Set('Jonas'));

console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.delete('Risotto');
//orderSet.clear();
console.log(orderSet);

for (const  order of orderSet) console.log(order);

 //Example
 const staff =['waiter' , 'chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
 const staffUnique =[...new Set(staff)];
 console.log(staffUnique);

 console.log(
    new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size


 );
 console.log(new Set('jonasschmedtmann').size);
