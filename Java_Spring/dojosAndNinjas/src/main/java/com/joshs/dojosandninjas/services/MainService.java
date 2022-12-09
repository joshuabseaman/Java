package com.joshs.dojosandninjas.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.joshs.dojosandninjas.models.Dojo;
import com.joshs.dojosandninjas.models.Ninja;
import com.joshs.dojosandninjas.repositories.DojoRepository;
import com.joshs.dojosandninjas.repositories.NinjaRepository;

@Service
public class MainService {

	@Autowired
	DojoRepository dojoRepo;
	
	@Autowired
	NinjaRepository ninjaRepo;
	
	public List<Dojo> findAllDojos() {
		return dojoRepo.findAll();
	}
	
	public Dojo findOneDojo(Long id) {
		Optional<Dojo> optionalDojo = dojoRepo.findById(id);
		if(optionalDojo.isPresent()) {
			return optionalDojo.get();
		} else {
			return null;
		}
	}
	
	public Dojo addDojo(Dojo dojo) {
		return dojoRepo.save(dojo);
	}
	
	
	public Dojo updateDojo(Dojo dojo) {
		return dojoRepo.save(dojo);
	}
	
	public void deleteDojo(Long id) {
		Optional<Dojo> optionalDojo = dojoRepo.findById(id);
		if(optionalDojo.isPresent()) {
			dojoRepo.deleteById(id);
		}
	}
	
	
	public List<Ninja> findAllNinjas() {
		return ninjaRepo.findAll();
	}
	
	public Ninja findOneNinja(Long id) {
		Optional<Ninja> optionalNinja = ninjaRepo.findById(id);
		if(optionalNinja.isPresent()) {
			return optionalNinja.get();
		} else {
			return null;
		}
	}
	
	public Ninja addNinja(Ninja ninja) {
		return ninjaRepo.save(ninja);
	}
	
	
	public Ninja updateNinja(Ninja ninja) {
		return ninjaRepo.save(ninja);
	}
	
	public void deleteNinja(Long id) {
		Optional<Ninja> optionalNinja = ninjaRepo.findById(id);
		if(optionalNinja.isPresent()) {
			ninjaRepo.deleteById(id);
		}
	}
}
