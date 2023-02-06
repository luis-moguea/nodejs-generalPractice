const EventEmitter = require("events")

class Emitter extends EventEmitter {
    log(message){
        console.log(message)
        this.emit("message", {id: 1, name: "Luis"})
    }
}

module.exports = Emitter;