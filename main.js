async function carregarModalAgendamento() {
  try {
    const resposta = await fetch("modal-agendamento.html");
    const html = await resposta.text();
    document.getElementById("modal-container").innerHTML = html;
    inicializarLogicaModal();
  } catch (erro) {
    console.error(erro);
  }
}

function inicializarLogicaModal() {
  const modal = document.getElementById("modal-agendamento");
  const closeModalBtn = document.getElementById("fechar-modal-agendamento");
  const openModalButtons = document.querySelectorAll('a[href="#appointment"]');
  const botaoDia = document.querySelectorAll(".calendar-day");
  const botaoServicos = document.querySelectorAll(".botao-pacote");

  openModalButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      modal.classList.remove("hidden");
      document.body.classList.add("overflow-hidden");
    });
  });

  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", () => {
      modal.classList.add("hidden");
      document.body.classList.remove("overflow-hidden");
    });
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.add("hidden");
        document.body.classList.remove("overflow-hidden");
      }
    });
  }

  botaoDia.forEach((button) => {
    button.addEventListener("click", () => {
      botaoDia.forEach((btn) => {
        btn.classList.remove("bg-black", "text-white");
      });
      button.classList.add("bg-black", "text-white");
    });
  });

  botaoServicos.forEach((button) => {
    button.addEventListener("click", () => {
      botaoServicos.forEach((btn) => {
        btn.classList.remove("bg-black", "text-white");
        btn.classList.add("bg-white");

        const descricao = btn.querySelector("p");
        if (descricao) {
          descricao.classList.remove("text-white");
          descricao.classList.add("text-gray-500");
        }

        const icone = btn.querySelector("img, svg");
        if (icone) {
          icone.classList.remove("invert");
        }
      });

      button.classList.remove("bg-white");
      button.classList.add("bg-black", "text-white");

      const descricao = button.querySelector("p");
      if (descricao) {
        descricao.classList.remove("text-gray-500");
        descricao.classList.add("text-white");
      }

      const icone = button.querySelector("img, svg");
      if (icone) {
        icone.classList.add("invert");
      }
    });
  });
}

carregarModalAgendamento();
