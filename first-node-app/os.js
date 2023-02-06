const os = require("os")

const totalMem = os.totalmem() / 1000000000
const freeMem = os.freemem() / 1000000000

const systemMemory = (message) => {
    return message, `Your total system memory is: ${totalMem}, and your free system memory is: ${freeMem}`
}

console.log(systemMemory("Hi!"))