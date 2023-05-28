const r1 = require('readline').createInterface(process.stdin, process.stdout);
let counter = 0;
const number = getRandomArbitrary(1, 1000);
console.log("СЕКРЕТНО", number)

function question(quest){
    return new Promise((resolve, reject) => {
        r1.question(quest, (data) => {
            resolve(data);
        })
    })
}

async function game() {
    while (true) {
        counter++
        console.log("Попытка номер", counter)
        let cmd = await question("Введите число ");
        if (cmd < number) {
            console.log('Больше!')
        }
        if (cmd > number) {
            console.log('Меньше!')
        }
        if (cmd == number) {
            r1.close()
            console.log("Поздравляю с победой. Вы угадали с", counter, "попытки Ответ:", number)
            break
        }
    }
}
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
game()