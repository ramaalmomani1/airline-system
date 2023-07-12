'use strict';


require('dotenv').config();
const port = process.env.PORT || 3000 ;
const { faker } = require('@faker-js/faker');
const uuid = require('uuid');
const ioServer = require('socket.io')(port);

// const finalIo = ioServer(port) جربيها للتأكدي انها نفس شغل السطر يلي قبلها


ioServer.on('connection', (socket) =>{ // connection event emitted automatically by Sockt io
    console.log('Welcome, your socket id:', socket.id);

    socket.on('start', () => {
        setInterval(() => {
           
            ioServer.emit('new-flight', { event: 'new-flight', time: new Date(),  Details: { 
                airLine: 'Royal Jordanian Airlines', 
                flightID: uuid.v4(),
                pilot: faker.person.fullName(),
                destination: faker.location.city(),
                }  
            }
          
        )
    } , 10000) 
    
    })
  

socket.on('new-flight', newFlight)
function newFlight(payload) {
    console.log('Flight:', payload)
}

    socket.on('Arrived', flightArrived)
    function flightArrived(payload) {
        console.log('Flight:', payload)
        ioServer.emit('Arrived', payload)
    }

} )


ioServer.of('/airline').on('connection', (socket) => {
    socket.on('took-off', flightTookOff)

    function flightTookOff(payload) {
        console.log('Flight:', payload)
    }
})

// any 'emit' inside the server or system means --> send a message to the client


    // any 'on'  inside the server or system means --> sreceive a message from the client