package utils;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConexaoBD {
    public static Connection getConexao() throws SQLException {
        try {
            Class.forName("org.postgresql.Driver");
        } catch (ClassNotFoundException ex) {
            System.out.println("Erro ao carregar Driver");
            throw new SQLException(ex);
        }
        String JDBC_URL = "jdbc:postgresql://localhost:5432/todolist";
        String JDBC_USUARIO = "user_todolist";
        String JDBC_SENHA = "todolist123";
        return DriverManager.getConnection(JDBC_URL, JDBC_USUARIO, JDBC_SENHA);
    }
}