/*
Библиотека выдаёт книги читателям на определённый срок. Если книгу вернули позже срока,
начисляется штраф за каждый просроченный день.

Исходные данные:
- срок, на который выдана книга: 14 дней
- фактическое количество дней, которое книга была у читателя: 20 дней
- штраф за один день просрочки: 15 рублей

Посчитай количество дней просрочки и итоговую сумму штрафа
*/

let getDaysBook = 14;
let totalDaysBook = 20;
let penaltyDays = 15;

let totalSum = 0;
let countDaysPenalty = 0;

if (totalDaysBook > getDaysBook) {
    countDaysPenalty = totalDaysBook - getDaysBook;
    totalSum = countDaysPenalty * penaltyDays ;
}

console.log(`Дней просрочки: ${countDaysPenalty}, штраф: ${totalSum}`);