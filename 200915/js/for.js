let firstDan = prompt('몇 단부터')
let lastDan = prompt('몇 단까지')

for (let i = firstDan; i <= lastDan; i++) {
    for (let j = 1; j < 10; j++) {
        console.log(`${i} X ${j} = ${i*j}`)
    }
}