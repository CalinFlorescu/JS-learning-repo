package controllers;

import java.util.ArrayList;

import dao.AppUserDAL;
import model.AppUser;

public class AppUserBLL {
	public void insertAppUser(AppUser a) {
		AppUserDAL.insert(a);
	}
	
	public void deleteAppUser(AppUser a) {
		AppUserDAL.delete(a);
	}
	
	
	public void viewAllBLL(ArrayList<AppUser> listaAppUser) {
		AppUserDAL.viewAllDAL(listaAppUser);
	}
}
