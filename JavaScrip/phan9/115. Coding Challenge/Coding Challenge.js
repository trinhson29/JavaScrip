const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',

        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Hazard',
            'Brand',
        ],
    ],
    score: '4:0',
    scored: ['Neuer', 'Pavard','Hummels'],
    date: 'Now 9th, 2037',
    odds: {
        team1: 1.33,
        x:3.25,
        team2: 6.5,
    },
};

// 1.
for (const [i, player] of game.scored.entries())
console.log(`Goal ${i+1}: ${player}`);

//2.
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
console.log(average);

// 3.
for (const [team,old] of Object.entries(game.odds)) {
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log (`Odd of ${teamStr} ${odd}`);
}