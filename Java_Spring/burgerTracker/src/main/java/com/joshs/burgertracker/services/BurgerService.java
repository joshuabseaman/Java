package com.joshs.burgertracker.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.joshs.burgertracker.models.Burger;
import com.joshs.burgertracker.repositories.BurgerRepository;

@Service
public class BurgerService {

	@Autowired
	BurgerRepository burgerRepo;
	
	public List<Burger> allBurgers() {
		return burgerRepo.findAll();
	}
	
	public Burger addBurger(Burger burger) {
		return burgerRepo.save(burger);
	}
}
