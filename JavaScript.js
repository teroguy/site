function ch(){
  document.getElementById("input__place").innerHTML = document.getElementById("choose__form").value;
}


// Функция подсчета
function calculate() {
    const option = document.getElementById("choose__form").value;
    const input1 = parseFloat(document.getElementById("inp").value);
    const input2 = parseFloat(document.getElementById("inp__2").value);
    let result;

    // Вветвление
    switch(option) {
        case "S рулона линолиума":
            result = (input2 + (0.05 * input2))/input1; // Подсчет линоллиума
            break;
        case "S упаковки плиток":
            result = (input2 + (0.1 * input2))/input1; // Расчет пвх
            break;
        case "S ламината (прямая кладка)":
            result = (input2 + (0.05 * input2))/input1 ; // Подсчет ламината прямая кладка
            break;
        case "S ламината (диагональная)":
            result = (input2 + (0.15 * input2))/input1 ; // Подсчет ламината диагональная кладка
            break;
        case "S ламината (ёлочкой)":
            result = (input2 + (0.3 * input2))/input1 ; // Подсчет ламината ёлочкой
            break;
        case "Ширина ковролина":
            result = (input2 + (0.1 * input2))/input1; // Подсчет ковролина
            break;
        case "S плиток в упаковке (классическая)":
            result = (input2 + (0.1 * input2))/input1; // Расчет керам пл классическая кладка
            break;
        case "S плиток в упаковке (диагональная)":
            result = (input2 + (0.15 * input2))/input1; // Расчет керам пл диагональная кладка
            break;
        case "S паркетных досок (вдоль)":
            result = input2/input1 ; // Расчет паркета вдоль
            break;
        case "S паркетных досок (ёлочкой)":
            result = (input2 + (0.1 * input2))/input1; // Расчет паркета ёлочыкой
            break;
        case "S покрытия (прямой)":
            result = (input2 + (0.05 * input2))/input1; // Расчет пробкового по диагонали
            break;
        case "S покрытия (диагонали)":
            result = (input2 + (0.10 * input2))/input1; // Расчет пробкового по прямой
            break;
        default:
            result = "Ошибка";
    }

    // Вывод результата
    document.getElementById("res").innerHTML = "Результат: " + Math.ceil(result);
}