'use strict';

const eventPool = require('./events')
require('./manager')


setTimeout(() => {
    eventPool.on('new-flight', payload => { 
      payload.event = 'took-off'; 
      eventPool.emit('took-off', payload);
    });

  }, 4000);

  eventPool.on('took-off', (payload) => {
    console.log(`Pilot: flight with ID ${payload.Details.flightID} took-off`)
    // console.log(payload)
  })


  // setTimeout: The setTimeout function is a built-in JavaScript function that allows you to schedule the execution of a function after a specified delay.


setTimeout(() => {

    eventPool.on('new-flight', payload => {
      payload.event = 'Arrived'; 
      eventPool.emit('Arrived', payload);
    });
  }, 7000);

  eventPool.on('Arrived', (payload) => {
    console.log(`Pilot: flight with ID ${payload.Details.flightID} has arrived`)
    // console.log(payload)
  })
