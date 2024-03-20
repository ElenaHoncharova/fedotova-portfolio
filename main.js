const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const mess = document.getElementById("message");

function sendEmail() {
  const bodyMessage = `Name: ${fullName.value}<br> Email: ${email.value}<br> Message: ${mess.value}`;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "selena.honcharova@gmail.com",
    Password: "A22C0FA4A2D86FBED54EDCC099515504EDE8",
    To: "selena.honcharova@gmail.com",
    From: "selena.honcharova@gmail.com",
    Subject: "New message!",
    Body: bodyMessage,
  }).then((message) => alert(message));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  sendEmail();
});
