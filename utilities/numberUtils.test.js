const requirejs = require("../requirejsTestConfig");
const {expect} = require("chai");

let utilityComponent;

// This must run in order to capture the file to test
before((done) =>{
    requirejs(['tools/numberUtils'], (NumberUtils) => {
        utilityComponent = NumberUtils;
        done();
    });
});

describe('formatDynamicDecimal function', () => {

    for (let decimalPlace = 0; decimalPlace < 10; decimalPlace++) {

        const number = !decimalPlace ? 1 : (1.1).toFixed(decimalPlace);
        const decimalString = decimalPlace > 1 ? 'decimal places' : 'decimal place';

        it(`Valid Data Test: Number with ${decimalPlace} ${decimalString}`, () => {
            const result = utilityComponent.formatDynamicDecimal(number, decimalPlace);
            expect(result, `Result ${result} should equal ${number}`).to.equal(number);
        });
    }

    const badData = [
        {number: "a01", decimalPlace: 0},
        {number: "5.22.133", decimalPlace: 2},
        {number: 10000, decimalPlace: '2'},
        {number: 5.0555, decimalPlace: 'b'},
        {number: "a01", decimalPlace: 5},
        {number: "100%.3", decimalPlace: 4},
        {number: null, decimalPlace: 1},
    ]
    
    for (const data of badData) {
        const decimalString = data.decimalPlace > 1 ? 'decimal places' : 'decimal place';

        it(`Invalid Data Test: Number with ${data.decimalPlace} ${decimalString}`, () => {
            const result = utilityComponent.formatDynamicDecimal(data.number, data.decimalPlace);
            if (result === data.number) {
                return;
            }
            expect(result, `Result ${result} should NOT equal ${data.number}`).to.not.equal(data.number);
        });
    }

});