const form = document.querySelector("form");

function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "selena.honcharova@gmail.com",
    Password: "A22C0FA4A2D86FBED54EDCC099515504EDE8",
    To: "them@website.com",
    From: "you@isp.com",
    Subject: "New message!",
    Body: "And this is the body",
  }).then((message) => alert(message));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  sendEmail();
});
