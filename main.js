const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const mess = document.getElementById("message");

function sendEmail() {
  const bodyMessage = `Name: ${fullName.value}<br> Email: ${email.value}<br> Message: ${mess.value}`;

  Email.send({
    SecureToken: "c5e1a814-e81f-4f59-88af-84b4bf59d14a",
    Username: "selena.honcharova@gmail.com",
    Password: "A22C0FA4A2D86FBED54EDCC099515504EDE8",
    To: "selena.honcharova@gmail.com",
    From: "selena.honcharova@gmail.com",
    Subject: "New message!",
    Body: bodyMessage,
  }).then((message) => {
    if (message == "OK") {
      Swal.fire({
        title: "Thank you!",
        color: "#fff",
        icon: "success",
        iconColor: "#3D74DB",
        confirmButtonColor: "#FF5F1F",
        background: "#0B194E",
      });
    }
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  sendEmail();

  form.reset();
  return false;
});
