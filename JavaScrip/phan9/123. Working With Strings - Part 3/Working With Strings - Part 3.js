


console.log('a+very+nice+string'.split('+'));
console.log('Janas Schmedtmann'.split(''));

const [firstNmae, lastName] = 'Janas Schmedtmann'.split('');

const newName = ['Mr.' , firstName, lastname.toUpperCase()].join('');
console.log(newName);

const capitalizeName = function(name){
    const names = name.split('');
    const nameUpper = [];

    for(const n of names){

        nameUpper.push(n.replace(n[0],n[0].toUpperCase()));
    }
    console.log(nameUpper.join(''));
};

capitalizeName('jessica ann smith davis')
capitalizeName('jonas schmedtmann')


const message = 'Go to gate 23';
console.log(message.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function(number){
    const str = number +'';
    const last = str.slice(-4);
    return last.padStart(str.length, '*');
};

console.log(maskCreditCard(64232243));
console.log(maskCreditCard(3435224343434232));
console.log(maskCreditCard('435353242347346364354573'));

const message2 = 'Bad waether .. All Departues Delayed';
console.log(message2.repeat(5));

const planesInLine = function (n){
    console.log(`There are ${n} planes in line ${''.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);