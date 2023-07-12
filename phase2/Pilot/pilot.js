'use strict';

const port = process.env.PORT || 3000;

const ioClient = require('socket.io-client');
const host = `http://localhost:${port}`;
const socket = ioClient.connect(host);

//يلي بدي اياه يطلع على الكنسول تبع الكلاينت بكتبه عنده و بعمله 
//emit from the server 

//يلي بدي اياه يطلع على الكنسول تبع السيرفر بكتبه عنده و بعمله 
//emit from the client 


socket.on('new-flight',NewFlight)

function NewFlight(payload){
  
  setTimeout(() => {
    console.log(`Pilot: flight with ID ${payload.Details.flightID} took-off`)
      payload.event = 'took-off';
      payload.time = new Date();
    //   eventPool.emit('took-off', payload);
  }, 4000);

  setTimeout(() => {
    console.log(`Pilot: flight with ID ${payload.Details.flightID} has Arrived`)
      payload.event = 'Arrived';
      payload.time = new Date();
    //   eventPool.emit('Arrived', payload);
  }, 7000);

}
