package com.joshs.dojosandninjas.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import com.joshs.dojosandninjas.models.Dojo;
import com.joshs.dojosandninjas.models.Ninja;
import com.joshs.dojosandninjas.services.MainService;

@Controller
public class MainController {

	@Autowired
	MainService mainServ;
	
	@GetMapping("/")
	public String home(
			@ModelAttribute("dojo") Dojo dojo,
			Model model)
	{
		List<Dojo> dojos = mainServ.findAllDojos();
		model.addAttribute("dojos", dojos);
		return "/dojo/index.jsp";
	}
	
	@PostMapping("/addDojo")
	public String addDojo(
			@Valid @ModelAttribute("dojo")Dojo dojo,
			BindingResult result,
			Model model)
	{
		if(result.hasErrors()) {
			List<Dojo> dojos = mainServ.findAllDojos();
			model.addAttribute("dojos", dojos);
			return "/dojo/index.jsp";
		} else {
			mainServ.addDojo(dojo);
			return "redirect:/";
		}
	}
	
	@GetMapping("/addNinja")
	public String createNinja(
			@ModelAttribute("ninja") Ninja ninja,
			Model model)
	{
		model.addAttribute("dojos", mainServ.findAllDojos());
		return "/ninja/add.jsp";
	}
	
	@PostMapping("/addNinja")
	public String addNinja(
			@Valid @ModelAttribute("ninja")Ninja ninja,
			BindingResult result,
			Model model)
	{
		if(result.hasErrors()) {
			model.addAttribute("dojo", mainServ.findAllDojos());
			return "/ninja/add.jsp";
		} else {
			mainServ.addNinja(ninja);
			return "redirect:/";
		}
	}
	
	@GetMapping("/edit/{id}/dojos")
	public String edit(
			@PathVariable("id") Long id,
			@ModelAttribute("dojo") Dojo dojo,
			Model model)
	{
		model.addAttribute("dojo", mainServ.findOneDojo(id));
		return "/dojo/edit.jsp";
	}
	
	@PutMapping("/edit/{id}/dojos")
	public String update(
			@PathVariable("id") Long id,
			Model model,
			@Valid @ModelAttribute("dojo") Dojo dojo,
			BindingResult result)
	{
		if(result.hasErrors()) {
			model.addAttribute("dojo", dojo);
			return "/dojo/edit.jsp";
		} else {
			mainServ.updateDojo(dojo);
			return "redirect:/";
		}
	}
	
	@GetMapping("/dojos/{id}")
	public String show(
			Model model,
			@PathVariable("id") Long id
			)
	{
		Dojo dojo = mainServ.findOneDojo(id);
		model.addAttribute("dojo", dojo);
		return "/dojo/show.jsp";
	}
	
//	@DeleteMapping(value="/delete/{id}/dojos")
//	public String delete(@PathVariable("id") Long id) {
//		mainServ.deleteDojo(id);
//		return "redirect:/";
//	}
}
