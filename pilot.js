'use strict';

const eventPool = require('./events')
require('./manager')


eventPool.on('new-flight',NewFlight)

function NewFlight(payload){
  
  setTimeout(() => {
    console.log(`Pilot: flight with ID ${payload.Details.flightID} took-off`)
      payload.event = 'took-off';
      payload.time = new Date();
      eventPool.emit('took-off', payload);
  }, 4000);

  setTimeout(() => {
    console.log(`Pilot: flight with ID ${payload.Details.flightID} has Arrived`)
      payload.event = 'Arrived';
      payload.time = new Date();
      eventPool.emit('Arrived', payload);
  }, 7000);

}


  // setTimeout: The setTimeout function is a built-in JavaScript function that allows you to schedule the execution of a function after a specified delay.

