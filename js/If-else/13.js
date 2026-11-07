/*
1. Скидка покупателю
- Если есть промокод, покупатель получает скидку 10% от цены товара.
- Если промокода нет, цена остаётся без изменений.
2. Комиссия маркетплейса
- Комиссия рассчитывается от фактической цены продажи после скидки.
- Если продавец премиум-класса, комиссия уменьшается на 3 процентных пункта. Например, вместо 15% применяется 12%.
- Комиссия не может быть отрицательной.
3. Расчёт партии

Нужно рассчитать:
- итоговую цену продажи одной единицы после скидки;
- общую выручку за всю партию;
- общую закупочную стоимость партии;
- общую комиссию маркетплейса;
- общую стоимость логистики;
- общие расходы с учётом закупки, комиссии, логистики и рекламы;
- итоговую прибыль.
4. Оценка результата
- Если прибыль положительная, вывести Продажа прибыльная.
- Если прибыль равна нулю, вывести Продажа без прибыли и убытка.
- Если прибыль отрицательная, вывести Продажа убыточная.
5. Итоговый отчёт

Выведи одним console.log многострочный отчёт с помощью шаблонной строки. В отчёте должны быть все рассчитанные показатели и оценка результата.
*/


let purchasePrice = 35;
let sellingPrice = 90;
let quantity = 40;

let commissionPercent = 15;
let logisticsPerItem = 8;
let advertisingCoast = 500;

let isPremiumSeller = true;
let hasPromoCode = false;

let skidkaPromoCode = 0.9;

if (hasPromoCode) {
    console.log(`Скидка 10%, стоимость товара: ${sellingPrice*skidkaPromoCode}`)
} else {
    console.log(`Скидка отсутсвует, стоимость товара: ${sellingPrice}`)
}


if (isPremiumSeller) {
    let skidkaPremium = (commissionPercent - 3)/100;
    console.log(`Коммиссия маркет-плейса с учётом премиум: ${sellingPrice*skidkaPremium}`)
}

let oneSellingItem = sellingPrice*skidkaPromoCode; // Цена продажи 1 единицы с учётом скидки
let sellingAll = oneSellingItem * quantity; // Общая выручка за всю партию
let paidAllItem = quantity *purchasePrice; // Общая заупочная стоимость
let comMarket = (sellingAll * commissionPercent)/100; // Общая коммисися маркет
let costLog = quantity* logisticsPerItem; // Стоимость логистики

let rashodAll = comMarket + costLog + advertisingCoast; // Общие расходы
let payDay = sellingAll - rashodAll-paidAllItem; // Чистая прибыль

if (payDay > 0) {
    console.log(`Продажа прибыльная`)
} else if (payDay === 0) {
    console.log("Продажа без прибыли и убытка")
} else {
    console.log("Продажа убыточная")
}

console.log(`Цена продажи одно единицы с учётом скидки: ${oneSellingItem}
Общая выручка за всю партию: ${sellingAll}
Общая закупочная стоимость: ${paidAllItem}
Общая комиссия маркет-плейса: ${comMarket}
Стоимость логистики: ${costLog}
Общиес расходы: ${rashodAll}
Чистая прибыль: ${payDay}`);