package com.joshs.caresoftclasses;
import java.util.ArrayList;
import java.util.Date;

import com.joshs.carsoftinterfaces.HIPAACompliantAdmin;
import com.joshs.carsoftinterfaces.HIPAACompliantUser;

public class AdminUser extends User implements HIPAACompliantUser, HIPAACompliantAdmin {

	private Integer employeeID;
	private String role;
	private ArrayList<String> securityIncidents;
	
	public AdminUser(Integer id, String role) {
		super(id);
		this.role = role;
		this.securityIncidents = new ArrayList<String>();
	}
	
	public void newIncident(String notes) {
	    String report = String.format(
	        "Datetime Submitted: %s \n,  Reported By ID: %s\n Notes: %s \n", 
	        new Date(), this.id, notes
	    );
	    securityIncidents.add(report);
	}

	public void authIncident() {
	    String report = String.format(
	        "Datetime Submitted: %s \n,  ID: %s\n Notes: %s \n", 
	        new Date(), this.id, "AUTHORIZATION ATTEMPT FAILED FOR THIS USER"
	    );
	    securityIncidents.add(report);
	}
	
	@Override
	public ArrayList<String> reportSecurityIncidents() {
		return this.getSecurityIncidents();
	}

	@Override
	public boolean assignPin(int pin) {
		String pinLength = Integer.toString(pin);
		if (pinLength.length() < 6) {
			return false;
		}
		this.setPin(pin);
		return true;
	}

	@Override
	public boolean accessAuthorized(Integer confirmedAuthID) {
		if (confirmedAuthID != this.getId()) {
			this.authIncident();
			return false;
		}
		return true;
	}
	
	public Integer getEmployeeID() {
		return employeeID;
	}
	public void setEmployeeID(Integer employeeID) {
		this.employeeID = employeeID;
	}
	
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	
	public ArrayList<String> getSecurityIncidents() {
		return securityIncidents;
	}
	public void setSecurityIncidents(ArrayList<String> securityIncidents) {
		this.securityIncidents = securityIncidents;
	}

}