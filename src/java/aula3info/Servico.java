
package aula3info;

import com.google.gson.Gson;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;
import sun.nio.cs.UTF_8;

@WebServlet("/novoservico")
public class Servico extends HttpServlet{
    
    @Override
    protected void service(
            HttpServletRequest req, 
            HttpServletResponse resp) 
            throws IOException
    {
        String funcao = req.getParameter("funcao");
        PrintWriter resposta = resp.getWriter();
        
        switch (funcao)
        {
            case "procedimento":
            {
                try {
                    CarroRN carroRN = new CarroRN();
                    medicoServlet carro = new medicoServlet();
                    carro.setIdCarro(Integer.parseInt(req.getParameter("idcarro")));
                    carroRN.ChamaProcedure(carro);
                } catch (ClassNotFoundException | SQLException ex) {
                    Logger.getLogger(Servico.class.getName()).log(Level.SEVERE, null, ex);
                }
            }            
            
            case "selecaomodelo" :
            {
                try {                
                    ModeloRN modeloRN = new ModeloRN();
                    List<Modelo> ListaModelo = modeloRN.Listar();
                    PrintWriter writer = resp.getWriter();
                    
                    Gson Json = new Gson();
                    writer.print(Json.toJson(ListaModelo));
                    writer.flush();                    
                    break;
                } catch (SQLException | 
                    ClassNotFoundException ex) {
                    Logger.getLogger(Servico.class.getName()).log(Level.SEVERE, null, ex);
                    break;
                }
            }            
            case "selecaocarro" :
            {
                try {                
                    CarroRN CarroRn = new CarroRN();
                    List<medicoServlet> ListaCarro = CarroRn.Listar();
                    PrintWriter writer = resp.getWriter();
                    
                    Gson Json = new Gson();
                    writer.print(Json.toJson(ListaCarro));
                    writer.flush();                    
                    break;
                } catch (SQLException | 
                    ClassNotFoundException ex) {
                    Logger.getLogger(Servico.class.getName()).log(Level.SEVERE, null, ex);
                    break;
                }
            }
            case "inclusaocarro" :
            {
                try {
                    incluirCarro(req, resp);                   
                } catch (SQLException | ClassNotFoundException ex) {
                    Logger.getLogger(Servico.class.getName()).log(Level.SEVERE, null, ex);
                }
               break;
            }


            case "deletarcarro":
            {
                try {
                    medicoServlet carroED = new medicoServlet();
                    CarroRN carroRN = new CarroRN();
                    carroED.setIdCarro(Integer.parseInt(req.getParameter("idcarro")));
                    carroRN.Excluir(carroED);
                    
                    PrintWriter writer = resp.getWriter();     
                    writer.print("");
                    writer.flush();
                    break;
                } catch (SQLException | ClassNotFoundException ex) {
                    Logger.getLogger(Servico.class.getName()).log(Level.SEVERE, null, ex);
                }
            }

        }              
    }
    
    private void incluirCarro(HttpServletRequest req, 
                              HttpServletResponse resp) 
            throws SQLException, ClassNotFoundException, IOException
    {
         medicoServlet carroED = new medicoServlet();
         CarroRN carroRN = new CarroRN();
         carroED.setCarro(req.getParameter("carro"));
         carroED.setPlaca(req.getParameter("placa"));
         carroED.setIdModelo(Integer.parseInt(req.getParameter("modelo")));
         carroRN.Incluir(carroED);
                   
    }
}
