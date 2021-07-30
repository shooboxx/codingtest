const express = require( 'express' );
require('dotenv').config()
const path = require('path');
const db = require ('./config');

const app = express();

const PORT = 9000; // default port to listen
const { getVehicle, addVehicle } = require('./vehicle');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.resolve(__dirname, '../build')));
// define a route handler for the default home page
app.get( "/api/", getVehicle);
app.post( "/api/", addVehicle);

// start the Express server
app.listen( process.env.PORT || 9000, () => {
    console.log( `server started at http://localhost:${ PORT }` );
} );


db.authenticate().then(()=> {console.log('database connected')}).catch((err )=> {console.log('database failed', err);})