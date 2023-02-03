



const flights = 
'_Delayed_Departure;fao933434;txl434323234;11:25+Arrival;bru0943423;fao4243323;11:45+_Delayed_Arrival;hel242323;fao3325454;12:05+_Departure;fao9334323;lis24343434;12:30';

const getCode = str => str.slice(0,3).toUpperCase();

for (const flight of flights.split('+')){
    const [type, from, to, time]= flight.split(';');
    const output = `${type.startsWith('_Delayed') ?'': ''}${type.relaceAll('_','')} ${getCode(from)} ${getCode(to)} (${time.replace
    (':', 'h')})`.padStart(36);
    console.log(output);
}


