package com.joshs.caranddriver;

public class Driver extends Car{
	public void drive() {
		System.out.println("You drive the car.");
		gas --;
		status();
	}
	
	public void boost() {
		if(gas < 3) {
			System.out.println("Not enough gas for boost.");
		} else {
			System.out.println("You use boosters.");
			gas -= 3;
		}
		status();
	}
	
	public void refuel() {
		if(gas > 8) {
			System.out.println("Too much fuel in tank to refuel.");
		} else {
			System.out.println("You refuel.");
			gas += 2;
		}
		status();
	}
}
