document.addEventListener("DOMContentLoaded", function () {
  // Отримуємо елементи форми та кнопки
  const form = document.querySelector("form[name='contact-form']");
  const nameInput = document.querySelector("input[name='name']");
  const emailInput = document.querySelector("input[name='email']");
  const messageInput = document.querySelector("textarea[name='message']");
  const sendButton = document.querySelector("button[type='submit']");

  // Додаємо обробник подій на відправку форми
  form.addEventListener("submit", function (event) {
    // Перешкоджаємо стандартній поведінці форми
    event.preventDefault();

    // Отримуємо значення полів форми
    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
    const messageValue = messageInput.value;

    // Створюємо об'єкт з даними для відправки на сервер
    const formData = {
      name: nameValue,
      email: emailValue,
      message: messageValue,
    };
    // Виконуємо AJAX-запит за допомогою Axios
    post(form.getAttribute("action"), formData)
      .then((response) => {
        // Перевіряємо, чи отримали ми відповідь від сервера
        if (response.status === 200) {
          // Оновлюємо вміст сторінки, наприклад, змінюємо текст на "Дякую за повідомлення"
          const responseMessage = document.createElement("p");
          responseMessage.textContent = "Дякую за повідомлення!";
          form.parentNode.replaceChild(responseMessage, form);
        } else {
          // Якщо сталася помилка, виводимо повідомлення про помилку
          throw new Error("Сталася помилка при відправленні форми.");
        }
      })
      .catch((error) => {
        console.error("Помилка:", error);
        // Обробляємо помилку відправлення форми, наприклад, виводимо повідомлення користувачу про помилку
        alert(
          "Виникла помилка при відправленні форми. Будь ласка, спробуйте ще раз."
        );
      });
  });
});
