document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      // Remove a classe 'active' de todas as seções
      sections.forEach((section) => section.classList.remove("active"));

      // Adiciona a classe 'active' à seção correspondente
      const targetId = e.target.getAttribute("data-section");
      const targetSection = document.getElementById(targetId);
      targetSection.classList.add("active");
    });
  });

  // Mostra a primeira seção por padrão
  if (sections.length > 0) {
    sections[0].classList.add("active");
  }
});

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    // Não coloco na URL ao dar submit
    event.preventDefault();

    // Busco os valores
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var responseMessage = document.getElementById("responseMessage");

    // Uma mensagem de agradecimento
    responseMessage.textContent =
      "Obrigado pela sua mensagem, " + name + "! Entrarei em contato em breve.";
    document.getElementById("contactForm").reset();
  });
