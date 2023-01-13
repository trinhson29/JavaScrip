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


restaurant.orderDelivery({
    time: '22.30',
    addreess: 'Via del Sole, 21',
    mainIndex : 2,
    starterIndex: 2,
});
restaurant.orderDelivery({
    addreess:'Via del Sole, 21',
    starterIndex:1,
});


const {name , openingHours, categories} = restaurant;
console.log (name,openingHours, categories);


const {
    name: restaurantName,
    openingHours: hours,
    categories:tags, 
} = restaurant;
console.log(restaurantName, hours, tags);
 

//  Defaul values
const{menu = [] , starteMenu: starter = [] }= restaurant;
console.log(menu, starters);
// Mutating variables
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};
({a, b} = obj);
console.log(a,b);


//Nested objects
const {
     fri: {open: o, close: c},
} = openingHours;
console.log(o,c);
