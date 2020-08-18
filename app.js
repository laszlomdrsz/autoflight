const fs = require('fs');

/* EDIT DATES, LOCATIONS HERE */
const startDate = 1;  // no leading zero
const startRange = 3;
const returnDate = 9;
const returnRange = 5;
const startMonth = '09';
const returnMonth = '09';
const year = '19';
const startLeaveAirport = 'bud';
const startArriveAirport = 'osaa';
const returnLeaveAirport = 'osaa';
const returnArriveAirport = 'bud';

console.log(startDate, startDate + startRange, returnDate, returnDate + returnRange );


for (i = startDate; i < startDate + startRange; i++) {
    for ( j = returnDate; j < returnDate + returnRange; j++) {

        let startDateString = i;
        let returnDateString = j;

        if (startDateString < 10) {
            startDateString = '0' + startDateString;
        }
        if (returnDateString < 10) {
            returnDateString = '0' + returnDateString;
        }


        // Multi URL
        let startString = `20${year}-${startMonth}-${startDateString}`;
        let returnString = `20${year}-${returnMonth}-${returnDateString}`;

        let url = `https://www.skyscanner.hu/transport/d/${startLeaveAirport}/${startString}/${startArriveAirport}/${returnLeaveAirport}/${returnString}/${returnArriveAirport}?adults=1&children=0&adultsv2=1&childrenv2=&infants=0&cabinclass=economy&ref=home#results`
        textLog(url);

    }
}

function priceLog(price, start, back) {
    text = `oda: ${start}  vissza: ${back}    ${price} Ft`;
    fs.appendFileSync('textlog.txt', text + '\n')
}

function textLog(text) {
    fs.appendFileSync('urlek.txt', text + '\n')
}

