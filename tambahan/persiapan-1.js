// Fase 1
/**
    W1 : OOP -> Object Oriented Programming, MVC
    W2 : MVC, Db relational, Asynch JS : Callback, promise,
    W3 : Node + Express, Express +MVC + QUery db 
    W4 : Sequelize, Node+Express+Sequelize+EJS
 */
// Declaration
// startEngine() // execute
// function startEngine(){

// }
// Expression
// startEngine() // error
// const startEngine = function(){

// }
// Arrow
// startEngine() // error
// const startEngine = () => {

// }

 // Object Literals
let vehicle = {
    // Key
    name : "Honda Civic 2021",
    type : "Sedan",
    cc : 5000,
    engine : false,
    tags : ["lcgc"],

    // Method
    startEngine : function(){
        console.log("Start engine!")
        this.engine = true
    },
    stopEngine : function(){
        console.log("Stop engine!")
        this.engine = false
    },
    identifyVehicle : function(){
        console.log(`${this.name}, type : ${this.type}, cc : ${this.cc}`)
    },
    addTags : function(tag){
        this.tags.push(tag)
        console.log(`${tag} has been inserted, thanks!`)
    },
    showTags : function() {
        // console.log("Tags : ")
        // Ternary
        this.tags.length !== 0 ? this.tags.forEach((tag,i) => console.log(`${i+1}. ${tag}`)) : console.log("Tidak ada tags")
        // if(this.tags.length !== 0){
            // this.tags.forEach((tag,i) => console.log(`${i+1}. ${tag}`))
            // console.log("Ada tags")
        // }else {
            // console.log("Tidak ada tags")
        // }
        // ES6 -> HOF
        // this.tags.forEach((tag,i) => console.log(`${i+1}. ${tag}`))
        // ES5
        // for(let i=0; i<this.tags.length; i++){
            // console.log(`${i+1}. ${this.tags[i]}`)
            // console.log(this.tags[i])
        // }
    }
};

// console.log(vehicle.engine)
// vehicle.startEngine()
// console.log(vehicle.engine)
// vehicle.stopEngine()
// console.log(vehicle.engine)

// console.log(vehicle.tags)
// vehicle.addTags("affordable")
// console.log(vehicle.tags)
// vehicle.identifyVehicle()

vehicle.showTags()
/**
 Tags :
 1. lcgc
 2. affordable
 */
//  High order function ES6