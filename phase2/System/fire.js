'use strict';

require('dotenv').config();
const port = process.env.PORT || 3000;


const ioClient = require('socket.io-client');
const host = `http://localhost:${port}`;
const socket = ioClient.connect(host);



socket.emit('start')

socket.on('new-flight', (payload) =>{
socket.emit('new-flight', payload)
})
    //     socket.emit('new-flight', { event: 'new-flight', time: new Date(),  Details: { 
    //         airLine: 'Royal Jordanian Airlines', 
    //         flightID: uuid.v4(),
    //         pilot: faker.person.fullName(),
    //         destination: faker.location.city(),
    //         }  
    //     }
    // )
    
