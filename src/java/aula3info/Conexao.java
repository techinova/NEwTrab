
package aula3info;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class Conexao {

    String local = "bancoaula2.mysql.dbaas.com.br";
    String banco = "bancoaula2";
    String usuario = "bancoaula2";
    String senha = "Protasio@2024";
   
    public Connection con;
    
    public Connection Conectar() 
        throws ClassNotFoundException, SQLException
    {
        String driveName = "com.mysql.jdbc.Driver";  
        Class.forName(driveName);
                  
        String StringConnection = "jdbc:mysql://" 
                           + local + "/" + banco;
        
        con = (Connection) 
         DriverManager.getConnection(StringConnection,
                                     usuario, 
                                     senha);
               
        return con;
    }
    
    
    public ResultSet selecao(String sql) 
            throws SQLException, ClassNotFoundException 
    {
      ResultSet rs;
      con = Conectar();
      Statement stmt = con.createStatement();       
      rs = stmt.executeQuery(sql);
      return rs; 
    }
    
    public void execute(String sql) 
            throws ClassNotFoundException, SQLException
    {
      con = Conectar();
      Statement stmt = con.createStatement();
      stmt.execute(sql);
    }
    
    
    
}
