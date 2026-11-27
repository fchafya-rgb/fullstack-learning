/*
Библиотека выдаёт книги читателям на определённый срок. Если книгу вернули позже срока,
начисляется штраф за каждый просроченный день.

Исходные данные:
- срок, на который выдана книга: 14 дней
- фактическое количество дней, которое книга была у читателя: 20 дней
- штраф за один день просрочки: 15 рублей

Посчитай количество дней просрочки и итоговую сумму штрафа
*/

/*
Тикет #2, часть 2 — уточнение от заказчика

"Отлично. Теперь добавь вот что: штраф должен зависеть от типа книги.
Есть три категории:

Обычная книга — штраф как и было, 15 руб/день
Редкое издание — штраф 50 руб/день
Учебник — штраф 10 руб/день

Также обрати внимание: если просрочка больше 30 дней — книга считается утерянной,
и вместо обычного штрафа читатель должен заплатить полную стоимость книги (независимо
 от типа). Стоимость книги тоже нужно учитывать как исходные данные."
*/


let getDaysBook = 14;
let totalDaysBook = 21;

let penaltyNormalBook = 15;
let penaltyEpicBook = 50;
let penaltyLearnBook = 10;
let hasBook = 2;
let penaltySum = 0;

let priceNormalBook = 100;
let priceEpicBook = 200;
let priceLearnBook = 150;

let priceBook = 0;


let countDaysPenalty = totalDaysBook - getDaysBook;

if ( hasBook === 0 ){
    penaltySum = penaltyNormalBook;
    priceBook = priceNormalBook;
} else if (hasBook === 1){
    penaltySum = penaltyEpicBook;
    priceBook = priceEpicBook;
} else if ( hasBook === 2) {
    penaltySum = penaltyLearnBook;
    priceBook = priceLearnBook;

} else {
    console.log(`Вы выбрали не верную категорию книги`);
}

if (countDaysPenalty > 30) {
    console.log(`Книга просрочена более чем на 30 дней. она считается утерянной, штраф - стоимость книги ${priceBook}`);
} else {
    console.log(`Книга просрочена на ${countDaysPenalty} дня/дней, сумма штрафа ${penaltySum * countDaysPenalty}`);
}





