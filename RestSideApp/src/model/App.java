package model;

public class App {
	private int id;
	private String name;
	private String technologies;
	private double version;
	
	public App() {
		
	}
	
	public App(int id, String name, String technologies, double version) {
		this.id = id;
		this.name = name;
		this.technologies = technologies;
		this.version = version;
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getTechnologies() {
		return technologies;
	}
	public void setTechnologies(String technologies) {
		this.technologies = technologies;
	}
	public double getVersion() {
		return version;
	}
	public void setVersion(double version) {
		this.version = version;
	}
	
}
