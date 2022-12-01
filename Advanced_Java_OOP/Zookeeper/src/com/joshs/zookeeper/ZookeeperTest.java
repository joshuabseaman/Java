package com.joshs.zookeeper;

public class ZookeeperTest {

	public static void main(String[] args) {
		
		Gorilla gorilla = new Gorilla();
		Bat bat = new Bat();
		
		gorilla.throwSomething();
		gorilla.throwSomething();
		gorilla.throwSomething();
		
		gorilla.eatBananas();
		gorilla.eatBananas();
		
		gorilla.climb();
		
		bat.attackTown();
		bat.attackTown();
		bat.attackTown();
		
		bat.eatHumans();
		bat.eatHumans();
		
		bat.fly();
		bat.fly();
	}

}
