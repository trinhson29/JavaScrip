
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

const question = new Map([
    ['question', 'What is the best programing language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'Correct'],
    [fale, 'Try again!'],

]);
console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//quiz app

console.log(question.get(question));
for (const [key, value] of question) {
    if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);

}
// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));

//Convert map to array
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);