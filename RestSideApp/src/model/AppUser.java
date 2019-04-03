package model;

public class AppUser {
	private int appID;
	private int userID;
	
	public AppUser(int appID, int userID) {
		this.appID = appID;
		this.userID = userID;
	}
	
	public AppUser() {
		
	}
	
	public int getAppID() {
		return appID;
	}
	public void setAppID(int appID) {
		this.appID = appID;
	}
	public int getUserID() {
		return userID;
	}
	public void setUserID(int userID) {
		this.userID = userID;
	}
	
}
