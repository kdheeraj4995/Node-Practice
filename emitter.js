var Emitter = require('./EventEmitter/index');

console.log("Emitter : "+Emitter);
console.log("Emitter Prototype : "+Emitter.prototype);

var event = new Emitter();
event.on('greet', function(){
    console.log('Hello , Good Morning');
})

event.emit('greet');