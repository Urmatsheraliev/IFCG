//Всплывающая форма
var link = document.querySelector(".advice__btn");
var popup = document.querySelector(".feedback");
var form = document.querySelector(".feedback-form");
var close = popup.querySelector(".feedback__close");
var login = popup.querySelector("[name=feedback-name]");
var email = popup.querySelector("[name=feedback-tel]");
var text = popup.querySelector("[name=feedback-message]");
var storage = localStorage.getItem("feedback-name");

link.addEventListener("click", function (event) {
    event.preventDefault(event);
    popup.classList.add("feedback__show");
    login.focus();
    if (storage) {
        login.value = storage;
    } else {
        login.focus();
    }
});

close.addEventListener("click", function (event) {
    event.preventDefault(event);
    popup.classList.remove("feedback__show");
});

window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("feedback__show")) {
            popup.classList.remove("feedback__show");
        }
    }
});
