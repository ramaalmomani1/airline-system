'use strict';

const port = process.env.PORT || 3000;

const ioClient = require('socket.io-client');
const subHost = `http://localhost:${port}/airline`;
const socket = ioClient.connect(subHost);


const host = `http://localhost:${port}`;
const mainSocket = ioClient.connect(host);

//يلي بدي اياه يطلع على الكنسول تبع الكلاينت بكتبه عنده و بعمله 
//emit from the server 

//يلي بدي اياه يطلع على الكنسول تبع السيرفر بكتبه عنده و بعمله 
//emit from the client 


  mainSocket.on('new-flight',NewFlight)
  mainSocket.emit('get-all')
  mainSocket.on('flight', handel)
  


  function NewFlight(payload){
    
    setTimeout(() => {
      console.log(`Pilot: flight with ID ${payload.Details.flightID} took-off`)
        payload.event = 'took-off';
        payload.time = new Date();
        socket.emit('took-off', payload);
    }, 4000);


    setTimeout(() => {
      console.log(`Pilot: flight with ID ${payload.Details.flightID} has Arrived`)
        payload.event = 'Arrived';
        payload.time = new Date();
        mainSocket.emit('Arrived', payload);
    }, 7000);

  }


function handel(payload){

  Object.keys(payload.flights).forEach(id => {
    console.log(`Pilot:Sorry i didn't catch this flight ID ${payload.flights[id].Details.flightID}`)
    delete payload.flights[id]
  })

}


  // function getAllFlights(payload){
  //   mainSocket.emit('flight', payload)

  //   setTimeout(()=>{
  //     console.log('this is the AllList to the pilot',payload)

  //   },3000)

    
    // mainSocket.emit('Delete-all-fligths', payload)

    // mainSocket.on('Uncatched ID', (payload)=>{
    //   console.log('FFFFFFFFFFFF',payload)
    //   console.log(`Pilot:Sorry i didn't catch this flight ID ${payload.payload.Details.flightID}`)
    // })
  



// function handelUncatchedFlight(payload){
//   console.log('FFFFFFFFFFFF',payload)
// console.log(`Pilot:Sorry i didn't catch this flight ID ${payload.payload.Details.flightID}`)
// }
