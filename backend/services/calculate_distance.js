
class CalculateDistance {
    constructor(){
    }

    getDistance(origin, destination){
        if (origin === undefined &&
            origin === null && 
            destination === undefined &&
            destination === null ){
            throw Error('Invalid coordinates.');
        }

        let radius = 6371e3; // metres
        let latitude1 = this.toRadians(Number(origin.latitude));
        let latitude2 = this.toRadians(Number(destination.latitude));
        let latitudeRadian = this.toRadians(Number(destination.latitude)-Number(origin.latitude));
        let longitudeRadian = this.toRadians(Number(destination.longitude)-Number(origin.longitude));

        let square = Math.sin(latitudeRadian/2) * Math.sin(latitudeRadian/2) +
                Math.cos(latitude1) * Math.cos(latitude2) *
                Math.sin(longitudeRadian/2) * Math.sin(longitudeRadian/2);
        let angle = 2 * Math.atan2(Math.sqrt(square), Math.sqrt(1-square));

        let distance = radius * angle;

        return distance;
    }

    toRadians(value) { 
        return value * Math.PI / 180; 
    }
}

module.exports = CalculateDistance;