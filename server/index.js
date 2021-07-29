const express = require( 'express' );
const path = require('path');

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
app.listen( PORT, () => {
    console.log( `server started at http://localhost:${ PORT }` );
} );