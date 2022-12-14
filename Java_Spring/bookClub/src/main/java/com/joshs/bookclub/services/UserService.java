package com.joshs.bookclub.services;

import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.joshs.bookclub.models.LoginUser;
import com.joshs.bookclub.models.User;
import com.joshs.bookclub.repositories.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepo;
	
	public User register(User newUserObject, BindingResult results) {
		if(userRepo.findByEmail(newUserObject.getEmail()).isPresent()) {
    	    results.rejectValue("email", "Taken", "Email is already taken");
    	}
		if(!newUserObject.getPassword().equals(newUserObject.getConfirm())) {
			results.rejectValue("confirm", "ConfirmPassword", "Password and confirm password must match");
		}
		if(results.hasErrors()) {
			return null;
		}
		String hashed = BCrypt.hashpw(newUserObject.getPassword(), BCrypt.gensalt());
		newUserObject.setPassword(hashed);
		return userRepo.save(newUserObject);
	}
    
    public User login(LoginUser newLoginObject, BindingResult results) {
    	if (!this.checkEmail(newLoginObject.getEmail())) {
    		results.rejectValue("email", "Non-existant", "Invalid Credentials");
    	}
        if(results.hasErrors()) {
        	return null;
        }
        User user = userRepo.findByEmail(newLoginObject.getEmail()).orElse(null);
    	if(!BCrypt.checkpw(newLoginObject.getPassword(), user.getPassword())) {
    	    results.rejectValue("password", "Matches", "Invalid Password");
    	}
    	if(results.hasErrors()) {
    		return null;
    	}
    	return user;
    }
    
    public boolean checkEmail(String email) {
    	Optional<User> user = userRepo.findByEmail(email);
    	if(user.isPresent()) {
    		return true;
    	} else {
    		return false;
    	}
    }
    
    public User getOneUser(Long id) {
    	return userRepo.findById(id).orElse(null);
    }
    
}
