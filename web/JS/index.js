$(document).ready(function () {
    // Função para carregar conteúdo via AJAX
    $(".ajax-link").click(function (e) {
        e.preventDefault();

        // Obter a URL do atributo data-url
        const url = $(this).data("url");

        // Realizar a requisição AJAX
        $.ajax({
            url: url,
            method: "GET", // Definindo o método HTTP como GET
            success: function (response) {
                // Inserir o conteúdo retornado no div #ajax-content
                $("#ajax-content").html(response);
            },
            error: function () {
                // Exibir alerta em caso de erro na requisição
                alert("Ocorreu um erro ao carregar a página.");
            }
        });
    });
});
