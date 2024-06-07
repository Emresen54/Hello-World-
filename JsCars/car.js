class car{
    constructor(brand, model, yearofmanufacture = null, seats = 5 ) {
        this.brand = brand;
        this.model = model;
        this.yearofmanufacture = yearofmanufacture;
        this.seats = seats;
    }
    getDescription() {
        let description = this.brand + " " + this.model + ", " + this.yearofmanufacture + "\n" + "Seats: " + this.seats;
        return description;
    }
}

class electriccar{
    constructor(brand, model, yearofmanufacture, seats, batteryrange ){
        this.brand = brand;
        this.model = model;
        this.yearofmanufacture = yearofmanufacture;
        this.seats = seats;
        this.batteryrange = batteryrange;
    }
    getDescription() {
        let description = this.brand + " " + this.model + "," + this.yearofmanufacture + "\n" + "Seats" + this.seats + "," + this.batteryrange + "km";
        return description;
    }
}
const myCar = new car('Ford', 'Model T', 1925);

const myElectricCar = new electriccar('Nissan', 'Leaf', 2019, 5, 270);

const carDescriptionDiv1 = document.getElementById('carDescription1');
const carDescriptionDiv2 = document.getElementById('carDescription2');

carDescriptionDiv1.innerText = myCar.getDescription();
carDescriptionDiv2.innerText = myElectricCar.getDescription();

