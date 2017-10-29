//var Emitter = require('./EventEmitter/index');

var Emitter = require('events');
var event = new Emitter();
event.on('greet', function(){
    console.log('Hello , Good Morning');
})

event.emit('greet');

