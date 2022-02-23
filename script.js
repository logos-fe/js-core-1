// Empty objects
// let user = {}
// let user2 = new Object()

// key: value

const user = {
    name: 'Khrystyna',
    age: 21,
    isStudent: false,
    // like reading: true,
    "like reading": true,
}

// user.name = "Khrystyna"
// add new property
user.city = "Lviv"

// delete user property
delete user.isStudent

// edit exist property
user.isStudent = true

// Doesn't work for objects if it const
// user = {}

// console.log('user', user)

let key = "like reading"
// console.log('user likes', user["like reading"])
// The same as
// console.log('user likes', user[key])

// Check key in object
// console.log('check city', "city" in user)
// console.log('check city', "country" in user)

// for (let key in user) {
//     alert(key + user[key])
//     // alert("Key is: " + key + ", value is: " + user[key])
//     alert(`Key is: ${key}, value is: ${user[key]}`)
// }

// const customObj = {
//     key1: "value1",
//     key2: "value2"
// }

// Object.freeze(customObj)

// customObj.key1 = "changed value1"
// delete customObj.key2

// const customObj2 = {
//     key3: "value3"
// }

// const mergedObjects = Object.assign(customObj, customObj2)

// console.log('mergedObjects', mergedObjects)

let a = {
    name: "Khrystyna",
    age: 21,
}

let b = a

b.name = "Anna"
// "2" === 2 false
// "2" == 2 true
// console.log('ab', a === b)

let c = {}
let d = {}

// console.log('cd', c === d)

const person = {
    name: 'Khrystyna',
    age: 21,
    isStudent: false,
    education: {
        city: 'Lviv',
        name: 'LPNU',
        course: 4,
        degree: 'bachelor',
    },

    // sayHi: function() {
    //     alert("Hello")
    // }

    // sayHi() {
    //     console.log(this.age)
    // }
}
// const sayHi = () => alert("Hi")
// sayHi()
const person2 = {
    name: "Anna"
}

const sayFunction = function() {
    console.log(this.name)
}

// person.sayHi = sayFunction
// person2.sayHi = sayFunction
//
// person.sayHi()
// person2.sayHi()

function test() {
    console.log('this', this)
}

test()


const testArrow = () => console.log('this arrow', this)

testArrow()

// person.sayHi()

// console.log('name university', person.education.name)














