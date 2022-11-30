package com.joshs.caranddriver;

public class Car {
	public int gas = 10;
	
	public void status() {
		if(gas < 1) {
			System.out.println("Game Over.");
		} else {
			System.out.println("Gas remainin: " + gas + "/10");
		}
	}
}
