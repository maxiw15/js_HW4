const r1 = require('readline').createInterface(process.stdin, process.stdout);
let counter = 0;
const number = getRandomArbitrary(1, 1000);
console.log("СЕКРЕТНО", number)
function game() {
    r1.question("Введите число: ", (cmd) => {
        counter++
        console.log("Попытка номер ", counter);
        if (cmd < number) {
            console.log('Больше!')
        }
        if (cmd > number) {hw2.js
            console.log('Меньше!')
        }
        if (cmd == number) {
            console.log("Поздравляю с победой. Вы угадали с", counter, "попытки")
            r1.close();
            return
        }
        game();
    })

}

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
game()