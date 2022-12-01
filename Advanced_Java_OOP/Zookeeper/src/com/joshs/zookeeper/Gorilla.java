package com.joshs.zookeeper;

public class Gorilla extends Mammal{
	
	public void throwSomething() {
		System.out.println("Gorilla throws something.");
		this.setEnergyLevel(this.getEnergyLevel() - 5);
		this.displayEnergyLevel();
	}
	
	public void eatBananas() {
		System.out.println("Gorilla eats banana.");
		this.setEnergyLevel(this.getEnergyLevel() + 10);
		this.displayEnergyLevel();
	}
	
	public void climb() {
		System.out.println("Gorilla climbs.");
		this.setEnergyLevel(this.getEnergyLevel() - 10);
		this.displayEnergyLevel();
	}
}
