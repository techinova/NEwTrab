// Função para adicionar um medicamento ao catálogo
function adicionarMedicamento() {
    const nome = document.getElementById("nome").value;
    const codigo = document.getElementById("codigo").value;
    const fabricante = document.getElementById("fabricante").value;
    const validade = document.getElementById("validade").value;
    const quantidade = document.getElementById("quantidade").value;

    if (nome && codigo && fabricante && validade && quantidade) {
        // Envia os dados via AJAX para o servidor
        const dados = {
            nome: nome,
            codigo: codigo,
            fabricante: fabricante,
            validade: validade,
            quantidade: quantidade
        };

        const xhr = new XMLHttpRequest();
        xhr.open("POST", "server.php", true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // Atualiza a tabela com os medicamentos recém-adicionados
                atualizarTabela();
                limparFormulario();
            }
        };
        xhr.send(JSON.stringify(dados));
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

// Função para atualizar a tabela com os medicamentos cadastrados
function atualizarTabela() {
    const tabela = document.getElementById("tabelaMedicamentos").getElementsByTagName("tbody")[0];
    tabela.innerHTML = ""; // Limpa a tabela

    // Requisição AJAX para obter os medicamentos
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "server.php?action=getMedicamentos", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const medicamentos = JSON.parse(xhr.responseText);

            // Verifica se há medicamentos cadastrados
            if (medicamentos.length === 0) {
                tabela.innerHTML = `<tr class="no-data"><td colspan="5">Nenhum medicamento cadastrado</td></tr>`;
            } else {
                medicamentos.forEach(medicamento => {
                    const linha = tabela.insertRow();
                    linha.innerHTML = `
                        <td>${medicamento.nome}</td>
                        <td>${medicamento.codigo}</td>
                        <td>${medicamento.fabricante}</td>
                        <td>${medicamento.validade}</td>
                        <td>${medicamento.quantidade}</td>
                    `;
                });
            }
        }
    };
    xhr.send();
}

// Função para limpar o formulário após adicionar um medicamento
function limparFormulario() {
    document.getElementById("nome").value = "";
    document.getElementById("codigo").value = "";
    document.getElementById("fabricante").value = "";
    document.getElementById("validade").value = "";
    document.getElementById("quantidade").value = "";
}

// Atualiza a tabela quando a página é carregada
window.onload = atualizarTabela;
