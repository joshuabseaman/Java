package com.joshs.authentication.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.joshs.authentication.models.LoginUser;
import com.joshs.authentication.models.User;
import com.joshs.authentication.services.UserService;

@Controller
public class HomeController {

	@Autowired
	UserService userServ;

	@GetMapping("/")
	public String index(
			Model model) 
	{
		model.addAttribute("user", new User());
		model.addAttribute("loginUser", new LoginUser());
		return "index.jsp";
	}

	@PostMapping("/register")
	public String createUser(
		@Valid @ModelAttribute("user") User newUser,
		BindingResult result,
		HttpSession session,
		Model model
	) {
		User createdUser = userServ.register(newUser, result);
		if (result.hasErrors()) {
			model.addAttribute("loginUser", new LoginUser());
			return "index.jsp";
		}
		session.setAttribute("user_id", createdUser.getId());
		return "redirect:/dashboard";
	}

	@PostMapping("/login")
    public String login(
		@Valid @ModelAttribute("loginUser") LoginUser loginUser, 
        BindingResult result,
        HttpSession session,
        Model model
    ) {
        User user = userServ.login(loginUser, result);
        if(result.hasErrors()) {
            model.addAttribute("user", new User());
            return "index.jsp";
        }
        session.setAttribute("user_id", user.getId());
        return "redirect:/dashboard";
    }
	
	@GetMapping("/dashboard")
	public String dashboard(
			HttpSession session, 
			Model model) 
	{
		if (session.getAttribute("user_id") == null) {
			return "redirect:/";
		}
		Long userID = (Long) session.getAttribute("user_id");
		model.addAttribute("user", userServ.getOneUser(userID));
		return "dashboard.jsp";
	}
	
	@GetMapping("/logout")
	public String logout(
		HttpSession session) 
	{
		session.removeAttribute("user_id");
		return "redirect:/";
	}

}
