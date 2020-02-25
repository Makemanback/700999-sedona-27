// находим кнопку открытия формы в документе
let button = document.querySelector(".popup-open");
// находим контейнер формы для открытия
let popup = document.querySelector(".container-popup");
// находим все инпуты
let date_In = popup.querySelector("[name=dateIn]");
let date_Out = popup.querySelector("[name=dateOut]");
let number_Adults = popup.querySelector("[name=numberAdults]");
let number_Children = popup.querySelector("[name=numberChildren]");
// находим саму форму внутри контейнера
let form = popup.querySelector("form");

let isStorageSupport = true;
let storage = "";

// проверяем, есть ли в браузере localStorage
try {
    storage = localStorage.getItem("numberAdults");
    storage = localStorage.getItem("numberChildren");
} catch (err) {
    isStorageSupport = false;
}

// добавляем обработчик событий клика на кнопку открытия формы, заводим переключатель классов для открытия/закрытия контейнера формы, ставим фокус на первое поле даты заезда
button.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.toggle("vis-hid");

    if (storage) {
        number_Adults.value = storage;
        number_Children.value = storage;
    }

    date_In.focus();
});

// ловим событие отправки формы, отменяем действие по умолчанию, в случае верного заполнения полей - записываем количество детей и взрослых в localStorage
form.addEventListener("submit", function(evt) {
    if (!date_In.value || !date_Out.value || !number_Adults.value || !number_Children.value) {
        evt.preventDefault();
        // popup.classList.remove("form-error");
        // popup.offsetWidth = popup.offsetWidth;
        // popup.classList.add("form-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("numberAdults", number_Adults.value);
            localStorage.setItem("numberChildren", number_Children.value);
        }
    }
});
// выяснить как убрать класс form-error при закрытии формы