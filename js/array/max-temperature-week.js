/*
С помощью цикла найди максимальную температуру за неделю (не используя готовые функции вроде Math.max — через сравнение
внутри цикла, храня "текущий максимум" в отдельной переменной).
*/

let tempWeek = [-18, -22, -15, -25, -19, -21, -17];
let maxTempWeek = tempWeek[0];
let i = 0;

while (i < tempWeek.length ){


    if ( tempWeek[i] > maxTempWeek) {
        maxTempWeek = tempWeek[i];
    }
    i++;
}

console.log(`Макс температура за неделю: ${maxTempWeek}`);