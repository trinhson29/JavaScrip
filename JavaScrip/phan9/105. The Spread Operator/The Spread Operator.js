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

    orderDelivery: function ({ starterIndex = 0 ,mainIndex, time = '20.00',addreess}) {
        console.log(
            `Order received! ${this. startermenu [ starterIndex]} and ${this.mainMenu[mainIndex]} 
            will be delivered to ${ addreess} at ${time}`
        );
    },
        
};






const baNewArr = [1, 2 , arr[0], arr[1], arr[2]];
console.log(baNewArr);

const newArr = [1, 2 ,...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2 , 7 , 8 , 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//  Copy arry
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.starerMenu,... restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings ,maps, sets. NOT objects
const str = 'Jonas';
const letters = [...str,'', 'S.'];
console.log(letters);
console.log(...str);

//real -world example
const ingredients = [
    prompt("Let's make pasta! Ingredirnt 1?"),
    prompt('Ingredient 2?'),
    prompt('Ingredient 3?'),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1],ingredients[2],);
restaurant.orderPasta(...ingredients);

//Objects
const restaurantCopy = { ...restaurant};
restaurantCopy.name = 'Ristorante Roma';
console.log(restauranCopy.name);
console.log(restaurant.name);
