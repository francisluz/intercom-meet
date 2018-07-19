const fs = require('fs');
const customersJson = JSON.parse(fs.readFileSync('./database/customers.json', 'utf8'));
const Customer = require('../data_structure/customer');
const CalculateDistance = require('./calculate_distance');
const MergeSort = require('../algorithm/merge_sort');

const office = JSON.parse(fs.readFileSync('./database/office.json','utf8'));

class DataReader {
    constructor(){
        this.customers = [];  
    }

    getCustomers(distance){
        if(distance === undefined || distance === null){
            throw Error('Invalid distance.');
        }

        for (let i = 0; i < customersJson.length; i++){
            const customerCoordinates = {
                latitude: customersJson[i].latitude,
                longitude: customersJson[i].longitude
            };

            const customerDistance = new CalculateDistance().getDistance(office, customerCoordinates);

            if(customerDistance <= (distance)){

                let customer  = new Customer(
                    customersJson[i].user_id,
                    customersJson[i].name,
                    customerCoordinates,
                    customerDistance
                );
            
                this.customers.push(customer);
            }
        }

        this.customers = new MergeSort(Customer.compare).mergeSort(this.customers, this.customers.length);

        return this.customers;
    }
};

module.exports = DataReader;