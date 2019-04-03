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
import model.App;

public class AppDAL {
	protected static final Logger LOGGER = Logger.getLogger(AppDAL.class.getName());
	private static final String insertStatementString = "INSERT INTO application (identifier,name,technologies,version)" + " VALUES (?,?,?,?)";

	private final static String findStatementString = "SELECT * FROM application where identifier = ?";
	
	
	public static void insert(App ap) {
		Connection dbConnection = DatabaseConnection.getConnection();

		PreparedStatement insertStatement = null;
		try {
			
			java.sql.Statement st = dbConnection.createStatement();
			int id = 0;
			String querry = "Select identifier from utcn30234_new.application";
			ResultSet rs = st.executeQuery(querry);
			
			while(rs.next()) {
				id = rs.getInt("identifier");
			}
			id++;
			ap.setId(id);
			
			insertStatement = dbConnection.prepareStatement(insertStatementString, Statement.RETURN_GENERATED_KEYS);
			insertStatement.setInt(1, id);
			insertStatement.setString(2, ap.getName());
			insertStatement.setString(3, ap.getTechnologies());
			insertStatement.setDouble(4, ap.getVersion());

			insertStatement.executeUpdate();
			System.out.println("Application has been inserted");
		} catch (SQLException e) {
			LOGGER.log(Level.WARNING, "AppDAL:insert " + e.getMessage());
		} finally {
			DatabaseConnection.close(insertStatement);
			DatabaseConnection.close(dbConnection);
		}
	}
	
	public static void delete(App ap) {
		Connection dbConnection = DatabaseConnection.getConnection();

		try {
			String deleteString = "DELETE FROM application WHERE application.identifier = '" + String.valueOf(ap.getId()) + "'";
			PreparedStatement deleteStatement = dbConnection.prepareStatement(deleteString);
			deleteStatement.execute();
			System.out.println("Application has been removed");
		} catch (SQLException e) {
			LOGGER.log(Level.WARNING, "AppDAL:delete " + e.getMessage());
		} finally {
			DatabaseConnection.close(dbConnection);
		}
		
	}
	
	public static void edit(App ap) {
		Connection dbConnection = DatabaseConnection.getConnection();

		try {
			String editString = "UPDATE application SET application.name = '" + String.valueOf(ap.getName()) + "', application.technologies = '" + String.valueOf(ap.getTechnologies()) + "', application.version = '" + String.valueOf(ap.getVersion()) + "'  WHERE application.id = '" + String.valueOf(ap.getId()) + "'";
			PreparedStatement editStatement = dbConnection.prepareStatement(editString);
			editStatement.execute();
			System.out.println("Application has been edited");
		} catch (SQLException e) {
			LOGGER.log(Level.WARNING, "AppDAL:delete " + e.getMessage());
		} finally {
			DatabaseConnection.close(dbConnection);
		}
	}
	
	public static void viewAllDAL(ArrayList<App> listaAplicatii) {
		Connection conect = DatabaseConnection.getConnection();
		
		try {
			java.sql.Statement st = conect.createStatement();
			String querry = "Select * from utcn30234_new.application";
			ResultSet rs = st.executeQuery(querry);

			while (rs.next()) {
				App ap = new App();
				ap.setId(rs.getInt("identifier"));
				ap.setName(rs.getString("name"));
				ap.setTechnologies(rs.getString("technologies"));
				ap.setVersion(rs.getDouble("version"));
				listaAplicatii.add(ap);
				
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
