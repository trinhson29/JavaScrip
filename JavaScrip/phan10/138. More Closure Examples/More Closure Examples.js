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
