package controllers;

import java.util.ArrayList;

import dao.AppDAL;
import model.App;

public class AppBLL {
	public void insertApp(App app) {
		AppDAL.insert(app);
	}
	
	public void deleteApp(App app) {
		AppDAL.delete(app);
	}
	
	public void editApp(App app) {
		AppDAL.edit(app);
	}
	
	public void viewAllBLL(ArrayList<App> listaAplicatii) {
		AppDAL.viewAllDAL(listaAplicatii);
	}
}
