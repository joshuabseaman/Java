package com.joshs.zookeeper;

public class Bat extends Mammal{
	
	public Bat() {
		super();
		this.energyLevel = 300;
	}
	
	public void fly() {
		System.out.println("The sound of a bat taking off.");
		this.setEnergyLevel(this.getEnergyLevel() - 50);
		this.displayEnergyLevel();
	}
	
	public void eatHumans() {
		System.out.println("Bat eats humans.");
		this.setEnergyLevel(this.getEnergyLevel() + 25);
		this.displayEnergyLevel();
	}
	
	public void attackTown() {
		System.out.println("The sound of a town on fire.");
		this.setEnergyLevel(this.getEnergyLevel() - 100);
		this.displayEnergyLevel();
	}
}
