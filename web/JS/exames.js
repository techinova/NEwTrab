// Função para adicionar um exame ao catálogo com AJAX
function adicionarExame() {
    const nome = document.getElementById("nomeExame").value;
    const codigo = document.getElementById("codigoExame").value;
    const tipo = document.getElementById("tipoExame").value;
    const preco = document.getElementById("precoExame").value;
    const disponibilidade = document.getElementById("disponibilidadeExame").value;

    if (nome && codigo && tipo && preco && disponibilidade) {
        const exame = { nome, codigo, tipo, preco, disponibilidade };
        
        // AJAX para enviar os dados ao servidor
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "adicionar_exame.php", true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = function() {
            if (xhr.status === 200) {
                const resposta = JSON.parse(xhr.responseText);
                if (resposta.sucesso) {
                    alert("Exame adicionado com sucesso!");
                    atualizarTabela();
                    limparFormulario();
                } else {
                    alert("Erro ao adicionar exame.");
                }
            }
        };
        xhr.send(JSON.stringify(exame));
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

// Função para atualizar a tabela com os exames cadastrados
function atualizarTabela() {
    const tabela = document.getElementById("tabelaExames").getElementsByTagName("tbody")[0];
    tabela.innerHTML = ""; // Limpa a tabela

    // AJAX para buscar os exames do servidor
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "buscar_exames.php", true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            const exames = JSON.parse(xhr.responseText);
            if (exames.length > 0) {
                exames.forEach(exame => {
                    const linha = tabela.insertRow();
                    linha.innerHTML = `
                        <td>${exame.nome}</td>
                        <td>${exame.codigo}</td>
                        <td>${exame.tipo}</td>
                        <td>${exame.preco}</td>
                        <td>${exame.disponibilidade}</td>
                    `;
                });
            } else {
                tabela.innerHTML = `<tr class="no-data"><td colspan="5">Nenhum exame cadastrado</td></tr>`;
            }
        }
    };
    xhr.send();
}

// Função para limpar o formulário após adicionar um exame
function limparFormulario() {
    document.getElementById("nomeExame").value = "";
    document.getElementById("codigoExame").value = "";
    document.getElementById("tipoExame").value = "";
    document.getElementById("precoExame").value = "";
    document.getElementById("disponibilidadeExame").value = "";
}

// Chama a função para atualizar a tabela quando a página carrega
window.onload = atualizarTabela;
