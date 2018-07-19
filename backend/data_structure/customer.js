
class Customer {

    constructor(user_id, name, coordinates, distance){
        if(this.isValid(user_id, name, coordinates.latitude, coordinates.longitude)){
            this.user_id = user_id;
            this.name = name;
            this.latitude = coordinates.latitude;
            this.longitude = coordinates.longitude;
            this.distance = distance;
        }
    };

    getFormatedCustomer(){
        return this.user_id + '-' + this.name; 
    }

    isValid(user_id, name, latitude, longitude){
        if(user_id === null &&
            name === null &&
            latitude === null &&
            longitude === null
        ){
            throw Error('Invalid record.');
        } else {
            return true;
        }
    }

    static compare(leftCustomer, rightCustomer){
        return (parseInt(leftCustomer.user_id) <= parseInt(rightCustomer.user_id));
    }
};

module.exports = Customer;