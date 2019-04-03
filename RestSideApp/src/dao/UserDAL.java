package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;

import connection.DatabaseConnection;
import model.User;

public class UserDAL {
	protected static final Logger LOGGER = Logger.getLogger(UserDAL.class.getName());
	private static final String insertStatementString = "INSERT INTO user (identifier,name,username,password)" + " VALUES (?,?,?,?)";

	private final static String findStatementString = "SELECT * FROM user where identifier = ?";
	
	
	public static void insert(User cl) {
		Connection dbConnection = DatabaseConnection.getConnection();

		PreparedStatement insertStatement = null;
		try {
			
			java.sql.Statement st = dbConnection.createStatement();
			int id = 0;
			String querry = "Select identifier from utcn30234_new.user";
			ResultSet rs = st.executeQuery(querry);
			
			while(rs.next()) {
				id = rs.getInt("identifier");
			}
			id++;
			cl.setId(id);
			
			insertStatement = dbConnection.prepareStatement(insertStatementString, Statement.RETURN_GENERATED_KEYS);
			insertStatement.setInt(1, id);
			insertStatement.setString(2, cl.getName());
			insertStatement.setString(3, cl.getUsername());
			insertStatement.setString(4, cl.getPassword());

			insertStatement.executeUpdate();
			System.out.println("User has been added");
		} catch (SQLException e) {
			LOGGER.log(Level.WARNING, "UserDAL:insert " + e.getMessage());
		} finally {
			DatabaseConnection.close(insertStatement);
			DatabaseConnection.close(dbConnection);
		}
	}
	
	public static void delete(User cl) {
		Connection dbConnection = DatabaseConnection.getConnection();

		try {
			String deleteString = "DELETE FROM user WHERE user.identifier = '" + String.valueOf(cl.getId()) + "'";
			PreparedStatement deleteStatement = dbConnection.prepareStatement(deleteString);
			deleteStatement.execute();
			System.out.println("User has been removed");
		} catch (SQLException e) {
			LOGGER.log(Level.WARNING, "UserDAL:delete " + e.getMessage());
		} finally {
			DatabaseConnection.close(dbConnection);
		}
		
	}
	
	public static void edit(User cl) {
		Connection dbConnection = DatabaseConnection.getConnection();

		try {
			String editString = "UPDATE user SET user.name = '" + String.valueOf(cl.getName()) + "', user.username = '" + String.valueOf(cl.getUsername()) + "', user.password = '" + String.valueOf(cl.getPassword()) + "'  WHERE user.id = '" + String.valueOf(cl.getId()) + "'";
			PreparedStatement editStatement = dbConnection.prepareStatement(editString);
			editStatement.execute();
			System.out.println("User has been edited");
		} catch (SQLException e) {
			LOGGER.log(Level.WARNING, "UserDAL:delete " + e.getMessage());
		} finally {
			DatabaseConnection.close(dbConnection);
		}
	}
	
	public static void viewAllDAL(ArrayList<User> listaUseri) {
		Connection conect = DatabaseConnection.getConnection();
		
		try {
			java.sql.Statement st = conect.createStatement();
			String querry = "Select * from utcn30234_new.user";
			ResultSet rs = st.executeQuery(querry);

			while (rs.next()) {
				User cl = new User();
				cl.setId(rs.getInt("identifier"));
				cl.setName(rs.getString("name"));
				cl.setUsername(rs.getString("username"));
				cl.setPassword(rs.getString("password"));
				listaUseri.add(cl);
				
				//afisarea temporara
				System.out.println(cl.getId() + ", " + cl.getName() + ", " + cl.getUsername() + ", " + cl.getPassword());
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	public static void deleteAll() {
		Connection dbConnection = DatabaseConnection.getConnection();

		try {
			String deleteString = "DELETE FROM user";
			PreparedStatement deleteStatement = dbConnection.prepareStatement(deleteString);
			deleteStatement.execute();
			System.out.println("Removed all users");
		} catch (SQLException e) {
			LOGGER.log(Level.WARNING, "UserDAL:deleteAll " + e.getMessage());
		} finally {
			DatabaseConnection.close(dbConnection);
		}
	}
}
