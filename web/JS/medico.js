document.getElementById("cadastrarBtn").addEventListener("click", function () {
    const nome = document.getElementById("nomeMedico").value;
    const matricula = document.getElementById("matricula").value;
    const telefone = document.getElementById("telefone").value;
    const email = document.getElementById("email").value;
    const idTelefoneMedico = document.getElementById("idTelefoneMedico").value;

    if (!nome || !matricula || !telefone || !email || !idTelefoneMedico) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Envia os dados para o backend usando AJAX
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/api/medicos", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = function () {
        if (xhr.status === 200) {
            const tabela = document.getElementById("tabelaMedicos").getElementsByTagName("tbody")[0];
            const noDataRow = document.querySelector(".no-data");

            if (noDataRow) {
                noDataRow.remove();
            }

            // Adiciona a nova linha na tabela
            const novaLinha = tabela.insertRow();
            novaLinha.innerHTML = `
                <td>${nome}</td>
                <td>${matricula}</td>
                <td>${telefone}</td>
                <td>${email}</td>
                <td>${idTelefoneMedico}</td>
            `;

            // Limpa os campos
            document.getElementById("nomeMedico").value = "";
            document.getElementById("matricula").value = "";
            document.getElementById("telefone").value = "";
            document.getElementById("email").value = "";
            document.getElementById("idTelefoneMedico").value = "";
        } else {
            alert("Erro ao cadastrar médico.");
        }
    };

    const medico = { nome, matricula, telefone, email, idTelefoneMedico };
    xhr.send(JSON.stringify(medico));
});
