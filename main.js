const modal = document.getElementById("modal-agendamento");
const closeModalBtn = document.getElementById("fechar-modal-agendamento");
const openModalButtons = document.querySelectorAll('a[href="#appointment"]');

openModalButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
  });
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }
});

const botaoDia = document.querySelectorAll(".calendar-day");

botaoDia.forEach((button) => {
  button.addEventListener("click", () => {
    botaoDia.forEach((btn) => {
      btn.classList.remove("bg-black", "text-white");
    });
    button.classList.add("bg-black", "text-white");
  });
});
