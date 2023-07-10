'use strict'; 


const eventPool = require('./events')
const { faker } = require('@faker-js/faker');
const uuid = require('uuid');
require('./pilot')




eventPool.on('new-flight', handelNewFlight)

function handelNewFlight (payload){
   
    console.log(`Manager: new flight with ID ${payload.Details.flightID} have been scheduled`)
    // console.log(payload)
}


setInterval(() => {
    eventPool.emit('new-flight', { event: 'new-flight', time: new Date(),  Details: { 
        airLine: 'Royal Jordanian Airlines', 
        flightID: uuid.v4(),
        pilot: faker.person.fullName(),
        destination: faker.location.city(),
        }
    }
)} , 10000)

  setTimeout(() => {
    eventPool.on('Arrived', (payload) => {
        console.log(`Manager: we’re greatly thankful for the amazing flight, ${payload.Details.pilot}`)
     })
  },1);