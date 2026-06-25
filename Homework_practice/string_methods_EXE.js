// 1
const str = "  hello world  "
console.log(str.trim())


// 2
const email = "user@gmail.com"
console.log(email.includes("@"))


// 5
const helloWorld = "שלום עולם"
console.log(helloWorld.length)


// 8
const url = "https://example.com"
console.log(url.startsWith("https"))


// 11
const banana = "banana"
console.log(banana.replaceAll("a", "o"))


// 13
const fruits = "apple,banana,grape"
console.log(fruits.split(",", 2))


// 16
const seven = "7"
console.log(seven.padStart(3, "0"))


// 17
const hi = "hi"
console.log(hi.padEnd(5, "*"))


// 18
const ha = "ha"
console.log(ha.repeat(3))


// 23
const javaScript = "JavaScript"
console.log(javaScript.substring(2, 6))


// 24
const adminPanel = "AdminPanel"
console.log(adminPanel.toLowerCase().includes("admin"))


// 25
const hello = "hello   "
console.log(hello.trimEnd())