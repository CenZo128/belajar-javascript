class Vehicle {
    constructor(name,type,cc,engine){
        this.name = name;
        this.type = type;
        this.cc = cc;
        this.engine = engine
    }
    startEngine(){
        console.log("Start engine!")
        this.engine = true;
    }
    stopEngine(){
        console.log("Stop engine!")
        this.engine = false;
    }
    identifyVehicle(){
        console.log(`${this.name}, type : ${this.type}, cc : ${this.cc}`)
    }
}

// instantiate
let civic = new Vehicle("Honda Civic 2021","Sedan",5000,false)
// vehicle adalah instance of dari class Vehicle
// console.log(typeof vehicle)
// console.log(vehicle)
let pickup = new Vehicle("Colt diesel 2021","Pickup",15000,false)
let tiguan = new Vehicle("VW Tiguan 2021","SUV",50000,false)

// console.log(civic);
// console.log(pickup);
// console.log(tiguan);
civic.identifyVehicle()
pickup.identifyVehicle()
tiguan.identifyVehicle()
// master -> 
//     development -> 
//         FE ->
//             Login Page
//             REgister Page
//         BE -> 
//             Auth
//             DB
//             API

/**
 * Pilar Utama OOP
    1. Inheritance
    2. Polymorphism : overload, overriding
    3. Encapsulation : public, private, protected
    4. Abstraction
 */