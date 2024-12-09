import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/cadastrarMedico")
public class MedicoServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        // Ler os dados enviados pelo frontend
        String nome = request.getParameter("nome");
        String matricula = request.getParameter("matricula");
        String telefone = request.getParameter("telefone");
        String email = request.getParameter("email");
        String idTelefoneMedico = request.getParameter("idTelefoneMedico");

        // Conectar ao banco de dados e inserir os dados
        try {
            Conexao conexao = new Conexao();
            Connection con = conexao.Conectar();
            String sql = "INSERT INTO medicos (nome, matricula, telefone, email, id_telefone_medico) VALUES (?, ?, ?, ?, ?)";
            PreparedStatement stmt = con.prepareStatement(sql);
            stmt.setString(1, nome);
            stmt.setString(2, matricula);
            stmt.setString(3, telefone);
            stmt.setString(4, email);
            stmt.setString(5, idTelefoneMedico);
            stmt.executeUpdate();

            // Enviar resposta ao frontend
            response.setContentType("application/json");
            PrintWriter out = response.getWriter();
            out.print("{\"success\": true, \"message\": \"Médico cadastrado com sucesso!\"}");
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            response.getWriter().print("{\"success\": false, \"message\": \"Erro ao cadastrar médico.\"}");
        }
    }
}
