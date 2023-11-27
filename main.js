let arr = []
let arrayLength = 0
let startNumber = 0
let timeout = 0

function FillArray() {
    for(let i = 0; i < arrayLength; i++){
        startNumber = startNumber + 1
        arr.push(startNumber)
    }
}

function show(){
    console.table(arr)
}

function AskUser(){
    const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
    })
        readline.question(`\x1b[32mВведіть бажаний розмір масиву:\x1b[0m `, rl1 => {
        arrayLength = rl1
            readline.question(`\x1b[32mВведіть початкове число:\x1b[0m `, rl2 => {
            startNumber = rl2
            startNumber = startNumber * 1
                readline.question(`\x1b[32mВведіть час для відтермінування функції(сек):\x1b[0m `, rl3 => {
                timeout = rl3
                timeout = timeout * 1000
                readline.close()
                setTimeout(FillArray, timeout)
                setTimeout(show, timeout)
                })
            })
        })
}
AskUser()
