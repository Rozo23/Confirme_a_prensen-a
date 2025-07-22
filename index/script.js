document.getElementById("confirmationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    if (!name) {
        alert("Por favor, insira seu nome antes de confirmar.");
        return;
    }

    const button = document.getElementById("sendEmailBtn");
    button.disabled = true;

    const templateParams = {
        name: name,
        to_email: "droprozolem@outlook.com",
        message: "Confirmação de presença no evento Save the Date"
    };

    emailjs.send("service_bo4k0s5", "template_bad8mw8", templateParams)
        .then(function(response) {
            window.location.href = "confirmacao_de_envio.html";
        })
        .catch(function(error) {
            console.error("Erro ao enviar o e-mail:", error);
            alert("Erro ao enviar o e-mail. Tente novamente.");
            button.disabled = false;
        });
});
