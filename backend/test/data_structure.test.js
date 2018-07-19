const assert = require('assert');
const Customer = require('../data_structure/customer');

describe('Test Data Structures', () => {
    it('Should return a Customer object', () => {
        let coodinates = {
            latitude: "53.339428",
            longitude: "-6.257664"
        }

        let customerInput = new Customer(1, 'Customer Test', coodinates, 0);

        assert.equal(customerInput.name, 'Customer Test');
    });

    it('Should return a Erro - Invalid record', () => {
        assert.throws(() => new Customer(null, null, null, null));
    });
});