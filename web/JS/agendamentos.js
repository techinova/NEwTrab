document.getElementById("formConsulta").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;
    const telefone1 = document.getElementById("telefone1").value;
    const telefone2 = document.getElementById("telefone2").value;
    const cartaoConvenio = document.getElementById("cartaoConvenio").value;
    const tipoConsulta = document.getElementById("tipoConsulta").value;
    const consultaPersonalizada = document.getElementById("consultaPersonalizada").value;
    const dataConsulta = document.getElementById("dataConsulta").value;
    const horaConsulta = document.getElementById("horaConsulta").value;

    const dados = {
        nome,
        cpf,
        telefone1,
        telefone2,
        cartaoConvenio,
        tipoConsulta,
        consultaPersonalizada,
        dataConsulta,
        horaConsulta
    };

    // Usando AJAX para enviar os dados para o servidor
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "agendar-consulta.php", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert("Consulta agendada com sucesso!");
            // Limpa o formulário após sucesso
            document.getElementById("formConsulta").reset();
        }
    };
    xhr.send(JSON.stringify(dados));
});
