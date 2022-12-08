package com.joshs.savetravels.controllers;

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

import com.joshs.savetravels.models.Expense;
import com.joshs.savetravels.services.ExpenseService;

@Controller
public class MainController {

	@Autowired
	ExpenseService expenseService;
	
	@GetMapping("/")
	public String home(
			@ModelAttribute("expense") Expense expense,
			Model model)
	{
		List<Expense> expenses = expenseService.allExpenses();
		model.addAttribute("expenses", expenses);
		return "index.jsp";
	}
	
	@PostMapping("/addExpense")
	public String addExpense(
			@Valid @ModelAttribute("expense") Expense expense,
			BindingResult result,
			Model model)
	{
		if(result.hasErrors()) {
			List<Expense> expenses = expenseService.allExpenses();
			model.addAttribute("expenses", expenses);
			return "index.jsp";
		} else {
			expenseService.addExpense(expense);
			return "redirect:/";
		}
	}
	
	@GetMapping("/edit/{id}")
	public String edit(
			@PathVariable("id") Long id,
			@ModelAttribute("expense") Expense expense,
			Model model)
	{
		model.addAttribute("expense", expenseService.findExpense(id));
		return "edit.jsp";
	}
	
	@PutMapping("/edit/{id}")
	public String update(
			@PathVariable("id") Long id,
			Model model,
			@Valid @ModelAttribute("expense") Expense expense,
			BindingResult result)
	{
		if(result.hasErrors()) {
			model.addAttribute("expense", expense);
			return "edit.jsp";
		} else {
			expenseService.updateExpense(expense);
			return "redirect:/";
		}
	}
	
	@GetMapping("/expenses/{id}")
	public String show(
			Model model,
			@PathVariable("id") Long id
			)
	{
		Expense expense = expenseService.findExpense(id);
		model.addAttribute("expense", expense);
		return "show.jsp";
	}
	
	@DeleteMapping(value="/delete/{id}")
	public String delete(@PathVariable("id") Long id) {
		expenseService.deleteExpense(id);
		return "redirect:/";
	}
}
