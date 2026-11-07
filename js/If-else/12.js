/*
Рассчитай общую сумму, которую магазин получил от продажи всех товаров.
Рассчитай общую закупочную стоимость проданных товаров.
Рассчитай прибыль магазина после вычета закупочной стоимости и расходов на доставку.
Выведи в консоль все три результата отдельными сообщениями с понятными подписями.
*/

let purchasePrice = 45;
let sellingPrice = 72;
let quantity = 12;
let deliveryCost = 60;

let sumSell = quantity * sellingPrice;
let byItem = purchasePrice * quantity;
let payDay = sumSell - byItem - deliveryCost

console.log(`Магазин получил от продажи всех товаров: ${sumSell}
Общая закупочная стоимость: ${byItem}
Выручка магазина: ${payDay}`);