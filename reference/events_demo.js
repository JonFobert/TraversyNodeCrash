//objects emit named events that cause function object ("listenters") to be called

const EventEmtter = require('events');

class MyEmitter extends EventEmitter {}

//Init Object
const myEmitter = new MyEmitter();

//Event Listener
myEmitter.on('event', () => console.log('Evnet Fired'))

//Init event
myEmitter.emit('event');

