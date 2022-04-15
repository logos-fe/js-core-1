// const name = "Khrystyna"
// const name1 = 'Khrystyna ${name}'

// console.log(`Hello ${name}, how are you? ${name1}`)

// Get length of string
// console.log(name.length)
// console.log('Hello'.length)

// Get letter from string
// const firstLetter = name[100]
/**  charAt(position) */
// const secondLetter = name.charAt(100)

// console.log(firstLetter, '-', secondLetter)

// Loops for string
// for (let letter of name) {
//   console.log('char', letter)
// }

// for (let i = 0; i < name.length; i++) {
//   console.log(name[i])
// }

// const randomWord = 'asAsvVSSGasb'

// const upperCase = randomWord.toUpperCase()
// const lowerCase = randomWord.toLowerCase()

// console.log('upper', upperCase, 'lower', lowerCase)

// indexOf, includes
// const hello = 'Hello world!'

// Return the index of letter or substring in the string
/** indexOf(substring, position) */
// console.log(hello.indexOf('world') !== -1)

// if (hello.indexOf('world') !== -1) {
// }


// Return the boolean(true/false) if letter of substring present in string
/** includes(substring, position) */
// console.log(hello.includes('world'))

// if (hello.includes(name)) {
// do something
// }

// const name = 'Khrystyna'
// const keyWord = 'password'
//
// const newPassword = prompt('Create your password')
//
// if (newPassword.includes(name) || newPassword.includes(keyWord)) {
//   alert('your password is bad')
// } else {
//   alert('great password')
// }

// startsWith, endsWith
const hello = 'Hello world!'
// Return the boolean(true/false) if string starts from letter of substring
/** startsWith(substring, position) */
// console.log(hello.startsWith('llo', 2))

// Return the boolean(true/false) if string ends from letter of substring
/** endsWith(substring, position) */
// console.log(hello.endsWith('ld!', 9))

// slice, substring, substr

// Return the part of string from and to (from cannot be large than to)
/** slice(from, to) */
// console.log(hello.slice(8, 10))
// console.log(hello.slice(-4, -2))

// Return the part of string from and to (from can be large than to)
/** substring(from, to) */
// console.log(hello.substring(7, 3))
// console.log(hello.substring(3, 7))

// console.log(hello.slice(2, 9))

// Return the part of string from position with needed length
/** substr(from, length) */
// console.log(hello.substr(2, 7))

// UTF-16
// console.log('c' > 'C') // true 97 > 65
// console.log('Abc'.codePointAt(0))
// console.log('a'.codePointAt(0))

// localeCompare
const str = 'str'
const str2 = 'srt'
console.log('r'.codePointAt(0)) // 114
console.log('l'.codePointAt(0)) // 108
console.log(str.localeCompare(str2))

// -1, str < str2
// 1 str > str2
// 0 str === str2


