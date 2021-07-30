const db = require('./config');
const Vehicle = require('./models/Vehicles')
const getVehicle = (req, res) => { 
    
    Vehicle.findAll({attributes: ['id', 'type', 'milage', 'hybrid']}).then((vehicles) => {
        let data = []
        for (let i = 0; i < vehicles.length; i++) {
            data.push(vehicles[i].dataValues)
        }
        return res.json(data).status(200)
        
    }).catch((err)=> {
        console.log(err)
    })
    
}
const addVehicle = (req, res) => {
    Vehicle.create(req.body).then(()=> {
        console.log('Inserted')
    }).catch((err)=> {
        console.log(err)
    })
    // return vehicleRepo.push(req.body);
    
    // vehicleRepo.push(newVehicle);

}

module.exports = { getVehicle, addVehicle } 

let vehicleRepo = [
    {
        "id": 0,
        "type": "Car",
        "milage": 3000,
        "hybrid": false
    },
    {
        "type": "Truck",
        "milage": 24000,
        "hybrid": true
    },
    {
        "type": "Bus",
        "milage": 30,
        "hybrid": false
    },
    {
        "type": "Car",
        "milage": 80000,
        "hybrid": false
    },
    {
        "type": "Test",
        "milage": 58000,
        "hybrid": false
    }
]



// let vehicleType = document.querySelector('.vtype');
// let vehicleMilage = document.querySelector('.vmilage');
// let vehicleHybrid = document.querySelector('#vhybrid').value;
// const vehicleButton = document.querySelector('#addVehicleBtn');



// const addToVehicle = (e) => {
//     e.preventDefault();
//     console.log(vehicleType.value, vehicleMilage.value, vehicleHybrid);
    
    
//     getToVehicle();
// };

// getToVehicle = () => {
//     console.log('from the backend')
// };
// // getVehicle();
// vehicleButton.addEventListener("click", addToVehicle);