const gameEvent =new Map([
    [17, 'goal'],
    [36, 'substitution'],
]);

const events = [...new Set(gameEvent.values())];
console.log(events);


//2.
gameEvent.delete(64);

//3.
console.log(`an event happend, on average, every ${time / gameEvent.size} minutes`);

//4.
for (const [min, event] of gameEvent){
    const half = min <= 45 ? 'FIRST' : 'SECOND';
    console.log (`[${half} HALF] ${min}: ${event}`);
}

