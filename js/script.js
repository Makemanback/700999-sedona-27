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
// прячем форму с помощью js
popup.classList.add("not-visible");

// добавляем обработчик событий клика на кнопку открытия формы, заводим переключатель классов для открытия/закрытия контейнера формы, ставим фокус на первое поле даты заезда
button.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.toggle("not-visible");

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
        popup.classList.remove("form-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("form-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("numberAdults", number_Adults.value);
            localStorage.setItem("numberChildren", number_Children.value);
        }
    }
});

// добавили обработчик событий для удаления класса анимации ошибки формы при её закрытии
button.addEventListener("click", function() {
    if (popup.classList.contains("not-visible")) {
        popup.classList.remove("form-error");
    }
});

// оживляем кнопки + и -
let minusAdult = document.querySelector(".minus-button-adults");
let plusAdult = document.querySelector(".plus-button-adults");
let minusChildren = document.querySelector(".minus-button-children");
let plusChildren = document.querySelector(".plus-button-children");
let adult = document.querySelector(".adults-value");
let children = document.querySelector(".children-value");

// parseInt(adult.value, 10);
// parseInt(children.value, 10);

minusAdult.addEventListener("click", function(evt) {
    evt.preventDefault();
    if (adult.value > 1) {
        --adult.value;
    }
});

plusAdult.addEventListener("click", function(evt) {
    evt.preventDefault();
    if (adult.value < 99) {
        ++adult.value;
    }
});

minusChildren.addEventListener("click", function(evt) {
    evt.preventDefault();
    if (children.value > 0) {
        --children.value;
    }
});

plusChildren.addEventListener("click", function(evt) {
    evt.preventDefault();
    if (children.value < 99) {
        ++children.value;
    }
});