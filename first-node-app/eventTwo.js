const Emitter = require("./event.js")
const emitter = new Emitter()

emitter.on("message", (eventArg) => {
    console.log("Test passed", eventArg)
})

emitter.log("Test Succeeded")