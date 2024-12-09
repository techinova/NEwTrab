
package aula3info;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;


public class ModeloRN {
    
     public List<Modelo> Listar() 
            throws SQLException, ClassNotFoundException
    {
        String sql = "Select * from modelo";
        Conexao con = new Conexao();
        List<Modelo> ListaModelo = new ArrayList<>();
        ResultSet ListBanco = con.selecao(sql);
        
        while (ListBanco.next())
        {
           Modelo ModeloED = new Modelo();
           ModeloED.setIdModelo(ListBanco.getInt("idModelo"));
           ModeloED.setNome(ListBanco.getString("Nome"));
           ModeloED.setIdFabricante(ListBanco.getInt("idFabricante"));
           
           ListaModelo.add(ModeloED);
        }                
        return ListaModelo;        
    }
    
    
    
}
