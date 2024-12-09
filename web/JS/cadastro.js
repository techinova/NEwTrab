document.getElementById("formCadastro").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const nomeCompleto = document.getElementById("nome-completo").value;
    const email = document.getElementById("email").value;
    const cpf = document.getElementById("cpf").value;
    const endereco = document.getElementById("endereco").value;
    const bairro = document.getElementById("bairro").value;
    const numero = document.getElementById("numero").value;
    const complemento = document.getElementById("complemento").value;
    const senha = document.getElementById("senha").value;

    const dados = {
        nome_completo: nomeCompleto,
        email: email,
        cpf: cpf,
        endereco: endereco,
        bairro: bairro,
        numero: numero,
        complemento: complemento,
        senha: senha
    };

    // Usando AJAX para enviar os dados para o servidor
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "processar_cadastro.php", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert("Cadastro realizado com sucesso!");
            // Limpa o formulário após sucesso
            document.getElementById("formCadastro").reset();
        } else if (xhr.readyState === 4 && xhr.status !== 200) {
            alert("Erro no cadastro. Tente novamente.");
        }
    };
    xhr.send(JSON.stringify(dados));
});
