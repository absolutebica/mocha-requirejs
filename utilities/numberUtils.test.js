const requirejs = require("../requirejsTestConfig");
const assert = require("assert");

let numberUtils = null;

before((done) => {
    requirejs(
        [
            'tools/numberUtils'
        ], 
        (NumberUtils) => {
            numberUtils = NumberUtils;
            done();
        }
    );
}); 

describe('NumberUtils::formatDynamicDecimal', () => {
    it ('Test null parsing', () => {
        const formattedNumber = numberUtils.formatDynamicDecimal(null);
        assert.strictEqual(formattedNumber, 0);
        assert.strictEqual(typeof formattedNumber, 'number');
    });

    it ('Test undefined parsing', () => {
        const formattedNumber = numberUtils.formatDynamicDecimal(undefined);
        assert.strictEqual(formattedNumber, 0);
        assert.strictEqual(typeof formattedNumber, 'number');
    });

    it ('Test non-numeric string', () => {
        const formattedNumber = numberUtils.formatDynamicDecimal('slkdf');
        assert.strictEqual(formattedNumber, 0);
        assert.strictEqual(typeof formattedNumber, 'number');
    });

    it ('Test integer parsing', () => {
        let formattedNumber = numberUtils.formatDynamicDecimal('1');
        assert.strictEqual(formattedNumber, 1);
        
        formattedNumber = numberUtils.formatDynamicDecimal('1', 2);
        assert.strictEqual(formattedNumber, 1);
        assert.strictEqual(typeof formattedNumber, 'number');
    });

    it ('Test float parsing', () => {
        let formattedNumber = numberUtils.formatDynamicDecimal('1.1', 2);
        assert.strictEqual(formattedNumber, 1.1);

        formattedNumber = numberUtils.formatDynamicDecimal('1.346', 2);
        assert.strictEqual(formattedNumber, '1.35');
    });

    it ('Test float typeof', () => {
        let formattedNumber = numberUtils.formatDynamicDecimal('1.346', 2);
        assert.strictEqual(typeof formattedNumber, 'string');
    });
});

describe('NumberUtils::formatPercent', () => {
    it ('Test null parsing', () => {
        const formattedPercent = numberUtils.formatPercent(null);
        assert.strictEqual(formattedPercent, '');
    });

    it ('Test undefined parsing', () => {
        const formattedPercent = numberUtils.formatPercent(undefined);
        assert.strictEqual(formattedPercent, '');
    });

    it ('Test is NaN', () => {
        const formattedPercent = numberUtils.formatPercent('fifty');
        assert.strictEqual(formattedPercent, '');
    });
    
    it ('Test isDecimal true', () => {
        const formattedPercent = numberUtils.formatPercent(0.5, true);
        assert.strictEqual(formattedPercent, '50.00%');
        assert.strictEqual(typeof formattedPercent, 'string');
    });

    it ('Test integer parsing', () => {
        const formattedPercent = numberUtils.formatPercent(50, false, 1);
        assert.strictEqual(formattedPercent, '50.0%');
        assert.strictEqual(typeof formattedPercent, 'string');
    });

    it ('Test integer parsing & isDecimal True', () => {
        const formattedPercent = numberUtils.formatPercent(0.754, true, 3);
        assert.strictEqual(formattedPercent, '75.400%');
        assert.strictEqual(typeof formattedPercent, 'string');
    });

    it ('Test undefined parsing', () => {
        const formattedPercent = numberUtils.formatPercent(undefined);
        assert.strictEqual(formattedPercent, '');
    });

});