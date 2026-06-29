const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const year = document.getElementById("year");
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (year) {
  year.textContent = String(new Date().getFullYear());
}

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(contactForm);
    const name = data.get("name");
    const phone = data.get("phone");
    const email = data.get("email");
    const message = data.get("message");

    const subject = encodeURIComponent(`פנייה חדשה מאתר סימן-טוב — ${name}`);
    const body = encodeURIComponent(
      `שם: ${name}\nטלפון: ${phone}\nאימייל: ${email}\n\n${message}`
    );

    window.location.href = `mailto:office@simantov-plumbing.co.il?subject=${subject}&body=${body}`;

    formStatus.hidden = false;
    formStatus.textContent = "נפתחה הודעת אימייל — שלחו את הטופס מהאפליקציה שלכם.";
    contactForm.reset();
  });
}
