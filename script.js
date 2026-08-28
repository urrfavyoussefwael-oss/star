const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  });
});

const form = document.getElementById("reserve-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!form.reportValidity()) {
    status.textContent = "Please complete the required fields.";
    return;
  }

  const data = new FormData(form);
  status.textContent =
    "Thanks, " + data.get("name") + ". We will confirm " +
    data.get("date") + " at " + data.get("time") + " by email.";
  form.reset();
});