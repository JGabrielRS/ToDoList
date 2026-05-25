package models.Tasks;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import utils.ConexaoBD;

public class TasksDAO {
    Connection connection = null;

    public List<Tasks> getAll() {
        List<Tasks> result = new ArrayList<Tasks>();
        try {
            connection = ConexaoBD.getConexao();
            Statement statement = connection.createStatement();
            ResultSet resultSet = statement.executeQuery("SELECT id, id_user, content, title, checked, checked_date, creation_date FROM tasks;");
            while (resultSet.next()) {
                Tasks task = new Tasks();
                task.setId(resultSet.getInt("id"));
                task.setIdUser(resultSet.getInt("id_user"));
                task.setContent(resultSet.getString("content"));
                task.setTitle(resultSet.getString("title"));
                task.setChecked(resultSet.getBoolean("checked"));
                Timestamp checkTimeStamp = (resultSet.getTimestamp("checked_date"));
                if (checkTimeStamp != null){
                    task.setCheckedDate(checkTimeStamp.toLocalDateTime());
                } else {
                    task.setCheckedDate(null);
                }
                task.setCreationDate(resultSet.getTimestamp("creation_date").toLocalDateTime());
                result.add(task);
            }
            resultSet.close();
            statement.close();
            connection.close();
        } catch (SQLException ex) {
            ex.printStackTrace();
            return null;
        }
        return result;
    }

    public List<Tasks> getAllById(int userId) {
        List<Tasks> result = new ArrayList<Tasks>();
        try {
            connection = ConexaoBD.getConexao();
            Statement statement = connection.createStatement();
            PreparedStatement preparedStatement = connection.prepareStatement("SELECT id, id_user, content, title, checked, checked_date, creation_date FROM tasks WHERE id_user = ?;");
            preparedStatement.setInt(1, userId);
            ResultSet resultSet = preparedStatement.executeQuery();
            while (resultSet.next()) {
                Tasks task = new Tasks();
                task.setId(resultSet.getInt("id"));
                task.setIdUser(resultSet.getInt("id_user"));
                task.setContent(resultSet.getString("content"));
                task.setTitle(resultSet.getString("title"));
                task.setChecked(resultSet.getBoolean("checked"));
                Timestamp checkTimeStamp = (resultSet.getTimestamp("checked_date"));
                if (checkTimeStamp != null){
                    task.setCheckedDate(checkTimeStamp.toLocalDateTime());
                } else {
                    task.setCheckedDate(null);
                }
                task.setCreationDate(resultSet.getTimestamp("creation_date").toLocalDateTime());
                result.add(task);
            }
            resultSet.close();
            statement.close();
            connection.close();
        } catch (SQLException ex) {
            ex.printStackTrace();
            return null;
        }
        return result;
    }

    public Tasks getById(int id) {
        Tasks task = null;
        try {
            connection = ConexaoBD.getConexao();
            Statement statement = connection.createStatement();
            PreparedStatement preparedStatement = connection.prepareStatement("SELECT id, id_user, content, title, checked, checked_date, creation_date FROM tasks WHERE id = ?;");
            preparedStatement.setInt(1, id);
            ResultSet resultSet = preparedStatement.executeQuery();
            while (resultSet.next()) {
                task = new Tasks();
                task.setId(resultSet.getInt("id"));
                task.setIdUser(resultSet.getInt("id_user"));
                task.setContent(resultSet.getString("content"));
                task.setTitle(resultSet.getString("title"));
                task.setChecked(resultSet.getBoolean("checked"));
                Timestamp checkTimeStamp = (resultSet.getTimestamp("checked_date"));
                if (checkTimeStamp != null){
                    task.setCheckedDate(checkTimeStamp.toLocalDateTime());
                } else {
                    task.setCheckedDate(null);
                }
                task.setCreationDate(resultSet.getTimestamp("creation_date").toLocalDateTime());
            }
            resultSet.close();
            preparedStatement.close();
            statement.close();
            connection.close();
        } catch (SQLException ex) {
            ex.printStackTrace();
            return null;
        }
        return task;
    }

    public boolean put(int id_user, String content, String title, LocalDateTime creation_date) {
        boolean sucess = false;
        try {
            connection = ConexaoBD.getConexao();
            Statement statement = connection.createStatement();
            PreparedStatement preparedStatement = connection.prepareStatement("INSERT INTO tasks (id_user, content, title, creation_date) VALUES (?, ?, ?, ?)");
            preparedStatement.setInt(1, id_user);
            preparedStatement.setString(2, content);
            preparedStatement.setString(3, title);
            Timestamp temp = Timestamp.valueOf(creation_date);
            preparedStatement.setTimestamp(4, temp);
            sucess = (preparedStatement.executeUpdate() == 1);
            preparedStatement.close();
            connection.close();
        } catch (SQLException ex) {
            ex.printStackTrace();
            return false;
        }
        return sucess;
    }

    public boolean update(int id_user, String content, String title, boolean checked, LocalDateTime creation_date, int id){
        boolean sucess = false;
        try {
            connection = ConexaoBD.getConexao();
            Statement statement = connection.createStatement();
            PreparedStatement preparedStatement = connection.prepareStatement("UPDATE tasks SET id_user = ?, content = ?, title = ?, checked = ?, creation_date = ? WHERE id = ?");
            preparedStatement.setInt(1, id_user);
            preparedStatement.setString(2, content);
            preparedStatement.setString(3, title);
            preparedStatement.setBoolean(4, checked);
            Timestamp temp = Timestamp.valueOf(creation_date);
            preparedStatement.setTimestamp(5, temp);
            preparedStatement.setInt(6, id);
            sucess = (preparedStatement.executeUpdate() == 1);
            preparedStatement.close();
            connection.close();
        } catch (SQLException ex) {
            ex.printStackTrace();
            return false;
        }
        return sucess;
    }

    public boolean updateChecked(int id){
        boolean sucess = false;
        try {
            connection = ConexaoBD.getConexao();
            Statement statement = connection.createStatement();
            PreparedStatement preparedStatement = connection.prepareStatement("UPDATE tasks SET checked = NOT checked, checked_date = CASE WHEN checked = false  THEN NOW() ELSE NULL END WHERE id = ?");
            Timestamp temp = Timestamp.valueOf(LocalDateTime.now());
            preparedStatement.setInt(1, id);
            sucess = (preparedStatement.executeUpdate() == 1);
            preparedStatement.close();
            connection.close();
        } catch (SQLException ex) {
            ex.printStackTrace();
            return false;
        }
        return sucess;
    }

    public boolean remove(int id) {
        boolean sucess = false;
        try {
            connection = ConexaoBD.getConexao();
            Statement statement = connection.createStatement();
            PreparedStatement preparedStatement = connection.prepareStatement("DELETE FROM tasks WHERE id = ?");
            preparedStatement.setInt(1, id);
            sucess = (preparedStatement.executeUpdate() == 1);
            preparedStatement.close();
            connection.close();
        } catch (SQLException ex) {
            ex.printStackTrace();
            return false;
        }
        return sucess;
    }
}
