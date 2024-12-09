// Função para carregar o histórico de consultas usando AJAX
function carregarConsultas() {
    const tabela = document.getElementById("tabelaConsultas").getElementsByTagName('tbody')[0];
    const noDataRow = document.querySelector(".no-data");

    // Faz a requisição AJAX para obter os dados
    fetch('consultas.json') // Substitua pelo seu endpoint real (ex: consultas.php)
        .then(response => response.json())
        .then(consultas => {
            // Remove a mensagem "Nenhuma consulta recente" se necessário
            if (noDataRow) {
                noDataRow.remove();
            }

            // Adiciona cada consulta à tabela
            consultas.forEach(consulta => {
                const novaLinha = tabela.insertRow();
                novaLinha.innerHTML = `
                    <td>${consulta.paciente}</td>
                    <td>${consulta.medico}</td>
                    <td>${consulta.data}</td>
                    <td>${consulta.hora}</td>
                    <td>${consulta.tipo}</td>
                `;
            });
        })
        .catch(error => {
            console.error("Erro ao carregar as consultas:", error);
        });
}

// Carrega as consultas na tabela ao abrir a página
window.onload = carregarConsultas;
