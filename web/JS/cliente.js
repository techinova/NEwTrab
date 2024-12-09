document.addEventListener("DOMContentLoaded", carregarClientes);

function carregarClientes() {
    const tabela = document.getElementById("tabelaClientes").getElementsByTagName('tbody')[0];
    const noDataRow = document.querySelector(".no-data");

    // Realiza a chamada AJAX para buscar os dados dos clientes
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "/api/clientes", true); // Substitua pelo endpoint correto do seu backend

    xhr.onload = function () {
        if (xhr.status === 200) {
            const clientes = JSON.parse(xhr.responseText);

            // Remove a mensagem "Nenhum cliente cadastrado" se houver dados
            if (clientes.length > 0 && noDataRow) {
                noDataRow.remove();
            }

            // Adiciona os clientes à tabela
            clientes.forEach(cliente => {
                const novaLinha = tabela.insertRow();
                novaLinha.innerHTML = `
                    <td>${cliente.nome}</td>
                    <td>${cliente.email}</td>
                    <td>${cliente.cpf}</td>
                    <td>${cliente.endereco}</td>
                    <td>${cliente.bairro}</td>
                    <td>${cliente.numero}</td>
                    <td>${cliente.complemento}</td>
                `;
            });
        } else {
            alert("Erro ao carregar os dados dos clientes.");
        }
    };

    xhr.onerror = function () {
        console.error("Erro ao realizar a requisição.");
        alert("Erro ao conectar com o servidor.");
    };

    xhr.send();
}
