const DataReader = require('../services/data_reader');
const assert = require('assert');

describe('Test Data Reader', () => {
    it('Should return 0 records', () => {
        const customers = new DataReader().getCustomers(1);

        assert.equal(customers.length, 0);
    });

    it('Should return 16 records', () => {
        const customers = new DataReader().getCustomers(100000);

        assert.equal(customers.length, 16);
    });

    it('Should return a Erro - Invalid distance', () => {
        assert.throws(() => new DataReader().getCustomers(null));
    });
});
