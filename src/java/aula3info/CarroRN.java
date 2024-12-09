
package aula3info;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class CarroRN {
    
    public void ChamaProcedure(medicoServlet Carro) 
            throws ClassNotFoundException, SQLException
    {
       String sql = "call Exemplo1 ('" + Carro.getIdCarro() + "','0.10')";
       Conexao con = new Conexao();
       con.execute(sql);
    }
    
    public List<CarroDetalhe> ListaDetalhada(medicoServlet carro)
           throws SQLException, ClassNotFoundException
    {
        String sql = " SELECT Carro, Valor_solicitado, Placa, Nome" +
                     " FROM carro" +
                     " INNER JOIN modelo ON modelo.idModelo = carro.idModelo" +
                     " where carro.idCarro = " + carro.getIdCarro();
        Conexao con = new Conexao();
        List<CarroDetalhe> ListaCarroDetalhada = new ArrayList<>();       
        ResultSet ListBancoDetalhada = con.selecao(sql);
        
        while (ListBancoDetalhada.next())
        {
            CarroDetalhe carrodetalhe = new CarroDetalhe();
            carrodetalhe.setCarro(ListBancoDetalhada.getString("Carro"));
            carrodetalhe.setValorsolicitado(ListBancoDetalhada.getFloat("Valor_solicitado"));
            carrodetalhe.setPlaca(ListBancoDetalhada.getString("Placa"));
            carrodetalhe.setNome(ListBancoDetalhada.getString("Nome"));
            ListaCarroDetalhada.add(carrodetalhe);
        }
        
        return ListaCarroDetalhada;
    }
    
    public List<medicoServlet> Listar() 
            throws SQLException, ClassNotFoundException
    {
        String sql = "Select * from carro";
        Conexao con = new Conexao();
        List<medicoServlet> ListaCarro = new ArrayList<>();
        ResultSet ListBanco = con.selecao(sql);
        
        while (ListBanco.next())
        {
           medicoServlet carroED = new medicoServlet();
           carroED.setCarro(ListBanco.getString("Carro"));
           carroED.setIdCarro(ListBanco.getInt("idCarro"));
           carroED.setPlaca(ListBanco.getString("Placa"));
           carroED.setValorSolicitado(ListBanco.getDouble("Valor_solicitado"));
           
           ListaCarro.add(carroED);
        }
                
        return ListaCarro;
        
    }
    
    public void Excluir(medicoServlet CarroED)
         throws  SQLException, ClassNotFoundException
    {
         String Sql = " delete from carro " +
                      " where idCarro = " + CarroED.getIdCarro();
         
         Conexao con = new Conexao();
         con.execute(Sql);       
        
    }
    
    public void Editar(medicoServlet CarroED)
         throws  SQLException, ClassNotFoundException    
    {
        String Sql = " update carro set "
                + " Carro = '" + CarroED.getCarro() + "'"
                + " Placa = '" + CarroED.getPlaca() + "'"
                + " idModelo = '" + CarroED.getIdModelo() + "'"
                + " where idCarro = " + CarroED.getIdCarro();
         
         Conexao con = new Conexao();
         con.execute(Sql);
    }
    
    public void Incluir(medicoServlet CarroED) 
            throws  SQLException, ClassNotFoundException
    {
         String Sql = " Insert into carro (Carro, Placa, idModelo) " +
                      " values ('" + CarroED.getCarro() + "',"+
                      "         '" + CarroED.getPlaca() +  "'," +
                      "         '" + CarroED.getIdModelo() + "')";
         
         Conexao con = new Conexao();
         con.execute(Sql);
         
    }
    
}
