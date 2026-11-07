/*
Задача: Расчёт стоимости аренды каршеринга
1. Базовая стоимость аренды
   - Эконом-класс автомобиля: 12 руб/минуту
   - Комфорт-класс: 18 руб/минуту
   - Премиум-класс: 30 руб/минуту
*/

let economClass = 12;
let comfortClass = 18;
let premiumClass = 30;

/*
2. Скидка по подписке
   - Если у пользователя есть подписка, он получает скидку 15% от базовой стоимости аренды
   - Без подписки скидки нет
*/
let hasSubscribe = true;
let skidkaSub = 0.85;

let hasClass = 1;
let hasPrice;
let bePriceSkidka;


if (hasClass === 0  ) {
    hasPrice = economClass;
    bePriceSkidka = economClass
} else if (hasClass === 1) {
    hasPrice = comfortClass;
    bePriceSkidka = comfortClass
} else if (hasClass === 2) {
    hasPrice = premiumClass;
    bePriceSkidka = premiumClass;
} else {
    console.log(`Ошибка выбора тарифа`)
}


if (hasSubscribe) {
    hasPrice = hasPrice * skidkaSub;
} else {}
/*

3. Штраф за позднюю сдачу
   - Если пользователь сдал машину позже запланированного времени, начисляется штраф:
     штраф = (фактические минуты опоздания) * (3 руб за минуту опоздания у эконом,
     5 руб у комфорт, 8 руб у премиум)
   - Если опоздания нет — штраф 0
*/
let normTime = 60;
let sendCar = 79;
let shTime;

if (sendCar > normTime) {
    shTime = sendCar - normTime;

    if (hasClass === 0) {
        shTime = shTime * 3
    } else if (hasClass === 1) {
        shTime = shTime * 5
    } else if ( hasClass ===2){
        shTime = shTime * 8;
    }
} else {
    shTime = 0;
}


/*
4. Бонус за рейтинг
   - Если рейтинг пользователя 4.8 и выше, он получает дополнительную скидку
     5% от стоимости аренды (после скидки по подписке)
   - Если рейтинг ниже — бонуса нет
   */

let starUser = 4.85;
let skidkaStarUser = 0.95;
let priceAfterRaiting;

if ( starUser >= 4.80) {
    priceAfterRaiting = skidkaStarUser * hasPrice;
} else {
    priceAfterRaiting = hasPrice;
}



/*
5. Топливный сбор
   - Если пройдено больше 50 км за поездку — добавляется топливный сбор 200 руб
   - Если 50 км или меньше — сбора нет
*/
let kmDriving = 48;
let shDriving = 200;

if ( kmDriving > 50) {
} else {
    shDriving = 0;
}
/*


/*
Нужно рассчитать и вывести одним console.log через шаблонную строку:
- базовую стоимость аренды (минуты * тариф класса)
- стоимость после скидки по подписке
- стоимость после бонуса за рейтинг
- сумму штрафа за опоздание
- топливный сбор
- итоговую сумму к оплате (стоимость после всех скидок + штраф + топливный сбор)
- оценку поездки:
  - если итоговая сумма меньше 500 — "Бюджетная поездка"
  - если от 500 до 1500 включительно — "Стандартная поездка"
  - если больше 1500 — "Премиальная поездка"

Исходные данные задай сам — выбери класс авто, минуты аренды, наличие подписки, минуты опоздания, рейтинг, пройденные км.
Главное — чтобы сценарий был реалистичным (например, комфорт-класс, 45 минут, с подпиской, опоздание 10 минут, рейтинг 4.9, 62 км).
*/


let tripRaitnig;
let lastSumDribing = normTime * priceAfterRaiting + shTime + shDriving;
if (lastSumDribing < 500) {
    tripRaitnig ="Бюджетная поездка";
} else if ( lastSumDribing >= 500 && lastSumDribing <= 1500) {
    tripRaitnig ="Стандартная поездка";
} else {
    tripRaitnig ="Премиальная поездка";
}


console.log(`------------------------------------------------------
Базовая стоимость аренды:${bePriceSkidka * normTime}
Стоимость после скидки по подписки:${hasPrice * normTime}
Стоимость после бонуса за рейтинг: ${normTime * priceAfterRaiting}
Сумма штрафов за опоздание: ${shTime}
Топливный сбор: ${shDriving}
------------------------------------------------------
ИТОГОВАЯ САММА К ОПЛАТЕ: ${lastSumDribing} 
Оценка поездки: ${tripRaitnig}`);


