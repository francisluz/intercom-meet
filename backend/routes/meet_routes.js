const DataReader = require('../services/data_reader');
const MIN_DISTANCE = 100;
const MULTIPLE_DISTANCE = 1000;

module.exports = function(app, db){
    app.get('/find_customers', (request, response) => {
        
        let distance = MIN_DISTANCE * MULTIPLE_DISTANCE;

        if(request.query.distance != undefined || request.query.distance != null){
            distance = request.query.distance * MULTIPLE_DISTANCE;
        }
        //Data reader
        const customers = new DataReader().getCustomers(distance);

        response.send(JSON.stringify(customers));
    });
};