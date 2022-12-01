package com.joshs.caresoftclasses;

public class User {
//	member variables
	protected Integer id;
	protected int pin;
	
//	constructor
	public User(Integer id) {
		super();
		this.id = id;
	}

//	get/set
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public int getPin() {
		return pin;
	}
	public void setPin(int pin) {
		this.pin = pin;
	}
}
