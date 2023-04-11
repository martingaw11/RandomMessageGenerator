/*  
    Random Message Generator
*/

//THESE ARE THE MESSAGE COMPONENTS TO BE STORED
//Market generally is made up of these 11 sectors
const marketSectors = ['Health Care', 'Materials', 'Energy', 'Consumer Discretionary', 'Consumer Staples', 'Industrials', 'Utilities', 'Financials', 'Information Technology', 'Communication Services', 'Real Estate'];

//Any part of the market has the potential to move according to these phrases
const potentialMove = ['very bearish', 'slightly bearish', 'neutral', 'slightly bullish', 'very bullish'];

//What aspect or scope of the sector/market will be moving
const scope = ['the entire market', 'This entire sector', 'A stock in this sector', 'Small-cap stocks in this sector', 'Large-cap stocks in this sector'];


//THE RANDOM FUNCTIONS FOR PICKING MESSAGE COMPONENTS
//Return a random string from the marketSector array
function randMarketSector() {
    return marketSectors[Math.floor(Math.random() * marketSectors.length)];
}

//Return a random string from the potentialMove array
function randPotentialMove() {
    return potentialMove[Math.floor(Math.random() * potentialMove.length)];
}

//Return a random string from the scope array
function randScope() {
    return scope[Math.floor(Math.random() * scope.length)];
}

//FUNCTIONS FOR DISPLAYING MESSAGES
function sectorMessage() {
    let sector = randMarketSector();
    console.log(`You should look into the ${sector} sector.`);
}

function forecastMessage() {
    let theScope = randScope();
    let theMove = randPotentialMove();
    let message = '';
    if (theScope === scope[0]) {
        message = `Actually, ${theScope}`;
    } else {
        message = theScope;
    }
    console.log(`${message} is looking ${theMove} right now.`);
}

sectorMessage();
forecastMessage();