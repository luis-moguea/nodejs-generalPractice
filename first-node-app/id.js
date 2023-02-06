const {v4: uuidv4} = require("uuid")
const id = uuidv4()

const data = [
    {
        name: "Maria",
        age: 42,
        hobbie: "Videogames"
    },
    {
        name: "Luis",
        age: 27,
        hobbie: "Coding"
    },
    {
        name: "Alexca",
        age: 19,
        hobbie: "Studying"
    }

]

const myId = () => {
    return data.map(el => {
        if (el.age >= 25){
            return `This is your id: ${id}`
        } else return "You are under the allowed age"
    })
}

console.log(myId())