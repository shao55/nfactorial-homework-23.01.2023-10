// Скрыть элемент по нажатию кнопки
const hideButton = document.getElementById("hider");
hideButton.onclick = function() {
    document.getElementById("text").classList.add("hide");
};

// Какой обработчик запустится?
button.addEventListener("click", () => alert("1")); // сработает
button.removeEventListener("click", () => alert("1")); // сработает, но не удалить первый alert, т.к. у первого нет конкретного названия,
button.onclick = () => alert(2); // сработает, т.к. addEventListener и onclick это два разных alert'a

// Добавить кнопку закрытия
let panes = document.querySelectorAll('.pane');

for(let pane of panes) {
    pane.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
    pane.firstChild.onclick = () => pane.remove();
}