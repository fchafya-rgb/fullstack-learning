/*
Есть вклад balance = 10000 руб., ежемесячная ставка monthlyRate = 0.02 (2% в месяц). С помощью while посчитай, через
сколько месяцев баланс превысит 15000 руб. (каждый месяц: balance = balance + balance * monthlyRate). Вывести итоговый
баланс и количество месяцев.
*/

let balance = 10000;
let monthlyRate = 0.02;
let howMonth = 0;

while ( balance <= 15000) {
    balance = (balance * monthlyRate) + balance;
    howMonth++;
}

console.log(`Колво месяцев:${howMonth}
Итоговый баланс: ${balance}`);