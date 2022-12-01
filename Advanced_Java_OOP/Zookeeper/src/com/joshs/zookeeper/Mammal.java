package com.joshs.zookeeper;

public class Mammal {
	
	protected int energyLevel;
	
	public Mammal() {
		this(100);
	}
	public Mammal(int energyLevel) {
		super();
		this.energyLevel = energyLevel;
	}
	
	public void displayEnergyLevel() {
		System.out.println("Current Energy Level: " + this.getEnergyLevel());
	}
	
	public int getEnergyLevel() {
		return energyLevel;
	}
	public void setEnergyLevel(int energyLevel) {
		this.energyLevel = energyLevel;
	}
}
