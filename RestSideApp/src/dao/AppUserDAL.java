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
import model.AppUser;

public class AppUserDAL {
	protected static final Logger LOGGER = Logger.getLogger(AppDAL.class.getName());
	private static final String insertStatementString = "INSERT INTO application_user (application_identifier,user_identifier)" + " VALUES (?,?)";
	
	
	public static void insert(AppUser au) {
		Connection dbConnection = DatabaseConnection.getConnection();

		PreparedStatement insertStatement = null;
		try {
			
			
			insertStatement = dbConnection.prepareStatement(insertStatementString, Statement.RETURN_GENERATED_KEYS);
			insertStatement.setInt(1, au.getAppID());
			insertStatement.setInt(2, au.getUserID());

			insertStatement.executeUpdate();
			System.out.println("Inserted");
		} catch (SQLException e) {
			LOGGER.log(Level.WARNING, "AppUserDAL:insert " + e.getMessage());
		} finally {
			DatabaseConnection.close(insertStatement);
			DatabaseConnection.close(dbConnection);
		}
	}
	
	public static void delete(AppUser au) {
		Connection dbConnection = DatabaseConnection.getConnection();

		try {
			String deleteString = "DELETE FROM application_user WHERE application_user.application_identifier = '" + String.valueOf(au.getAppID()) + "'" + " AND application_user.user_id = '" + String.valueOf(au.getUserID()) + "'";
			PreparedStatement deleteStatement = dbConnection.prepareStatement(deleteString);
			deleteStatement.execute();
			System.out.println("Deleted");
		} catch (SQLException e) {
			LOGGER.log(Level.WARNING, "AppUserDAL:delete " + e.getMessage());
		} finally {
			DatabaseConnection.close(dbConnection);
		}
		
	}
	
	
	
	public static void viewAllDAL(ArrayList<AppUser> listaAppUser) {
		Connection conect = DatabaseConnection.getConnection();
		
		try {
			java.sql.Statement st = conect.createStatement();
			String querry = "Select * from utcn30234_new.application_user";
			ResultSet rs = st.executeQuery(querry);

			while (rs.next()) {
				AppUser au = new AppUser();
				au.setAppID(rs.getInt("application_identifier"));
				au.setUserID(rs.getInt("user_identifier"));
				listaAppUser.add(au);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
