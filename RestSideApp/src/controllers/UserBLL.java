package controllers;

import java.util.ArrayList;

import dao.UserDAL;
import model.User;

public class UserBLL {
	public void insertUser(User user) {
		UserDAL.insert(user);
	}
	
	public void deleteUser(User u) {
		UserDAL.delete(u);
	}
	
	public void editUser(User u) {
		UserDAL.edit(u);
	}
	
	public void viewAllBLL(ArrayList<User> listaUseri) {
		UserDAL.viewAllDAL(listaUseri);
	}
	
	public void deleteAllBLL() {
		UserDAL.deleteAll();
	}
}
