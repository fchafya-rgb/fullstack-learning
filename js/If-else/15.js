
let economClass = 12;
let comfortClass = 18;
let premiumClass = 30;

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

let starUser = 4.85;
let skidkaStarUser = 0.95;
let priceAfterRaiting;

if ( starUser >= 4.80) {
    priceAfterRaiting = skidkaStarUser * hasPrice;
} else {
    priceAfterRaiting = hasPrice;
}



/*
5. Топливный сбор (!!! РЕАЛИЗОВАТЬ ЧЕРЕЗ ТЕРНАРНЫЙ ОПЕРАТОР)
   - Если пройдено больше 50 км за поездку — добавляется топливный сбор 200 руб
   - Если 50 км или меньше — сбора нет
*/
let kmDriving = 48;
let shDriving = kmDriving >= 50 ? 200 : 0;



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


