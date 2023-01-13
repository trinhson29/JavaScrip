
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

const rest1 ={
    name: 'Capri',
    // numGuests: 20,
    numGuests:0,
};
const rest2 ={
    name :'La Pizza',
    owner: 'Giovanni Rossi',
    
};
// OR assignment operator
// rest1. numGuests = rest1.numGuests || 10;
// rest2. numGuests = rest2.numGuests || 10;
// rest1. numGuests || = 10;
// rest2. numGuests || = 10;

//nullish assignment operator (null or underfined)
rest1.numGuests ??=10;
rest2.numGuests ??=10;

// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner && '<ANONYMOUS>';
rest2.owner && '<ANONYMOUS>';


console.log(rest1);
console.log(rest2);