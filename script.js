document.addEventListener("DOMContentLoaded", function () {

  const menuBtn = document.querySelector('.menu-btn');
  const navLinks = document.querySelector('.nav-links');
  const themeToggle = document.getElementById('theme-toggle');

  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    themeToggle.textContent = document.body.classList.contains('dark') ? "☀️" : "🌙";
  });

  emailjs.init("dB9f1TUYnRW04sVFL");
 

  const form = document.getElementById("contact-form");

  if (!form) {
    console.error("Form not found! Check id='contact-form'");
    return;
  }

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_pr5ezet",
      "template_fb28b7h",
      this
    ).then(() => {
      alert("Message Sent Successfully!");
      form.reset();
    }).catch((error) => {
      alert("Failed to send message.");
      console.log(error);
    });

  });

});
console.log("TEST");