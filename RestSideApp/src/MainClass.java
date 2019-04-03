import model.*;
import dao.*;

import java.util.ArrayList;

import controllers.*;
import connection.DatabaseConnection;

public class MainClass {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		User userOne = new User();
		userOne.setName("Calin");
		userOne.setPassword("1234qaz");
		userOne.setUsername("Agronum");
		
		UserBLL userController = new UserBLL();
		userController.deleteAllBLL();
		userController.insertUser(userOne);
		
		ArrayList<User> usersList = new ArrayList<User>();
		userController.viewAllBLL(usersList);
		
		userController.deleteUser(userOne);
		
		ArrayList<User> usersList2 = new ArrayList<User>();
		userController.viewAllBLL(usersList2);
		
		
		
	}
	
	
}
