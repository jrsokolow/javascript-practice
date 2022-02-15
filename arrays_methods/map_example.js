export const convertToMeters = (distancesInCentemeters) => {
    return distancesInCentemeters.map(item => {
        return new Meter(item);
    });
} 

class Meter {
    
    distanceInMeters = 0;
    
    constructor(centemeter) {
        this.distanceInMeters = centemeter / 100;
    }
}