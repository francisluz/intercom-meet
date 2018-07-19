const assert = require('assert');
const CalculateDistance = require('../services/calculate_distance');

describe('Test Calculate Distance', () => {
    it('Should return a 404279 km', () => {
        let distance = new CalculateDistance().getDistance({
            latitude: "52.205",
            longitude: "0.119"
        }, {
            latitude: "48.857",
            longitude: "2.351"
        });

        assert.equal(Math.floor(distance), 404279);
    });

    it('Should return a Erro - Invalid coordinates', () => {
        assert.throws(() => new CalculateDistance().getDistance(null, null));
    });
});
