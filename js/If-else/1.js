// Задание №10 — логика условий
//Магазин выдаёт скидку, если покупатель потратил от 100 рублей ИЛИ у него есть промокод.


let purchase = 80;
let hasPromoCode = true;

if ( purchase >= 100 || hasPromoCode) {
    console.log("Вам доступна скидка!")
} else {
    console.log("Вам недостпуна скидка!")
}


