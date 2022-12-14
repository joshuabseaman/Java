package com.joshs.bookclub.controllers;

import javax.servlet.http.HttpSession;
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

import com.joshs.bookclub.models.Book;
import com.joshs.bookclub.services.BookService;

@Controller
public class BookController {

	@Autowired
	BookService bookServ;
	
	
	@GetMapping("/books/new")
	public String createBook(
			Model model,
			HttpSession session)
	{
		Long id = (Long) session.getAttribute("user_id");
		model.addAttribute("id", id);
		model.addAttribute("book", new Book());
		return "/book/newBook.jsp";
	}
	
	@PostMapping("/books/new")
	public String addBook(
			@Valid @ModelAttribute("book") Book newBook,
			BindingResult results,
			Model model)
	{
		if(results.hasErrors()) {
			return "/book/newBook.jsp";
		} else {
			bookServ.addBook(newBook);
			return "redirect:/books";
		}
	}
	
	@GetMapping("books/{id}")
	public String showBook(
			Model model,
			@PathVariable("id") Long id)
	{
		Book book = bookServ.findOneBook(id);
		model.addAttribute("book", book);
		return "/book/show.jsp";
	}
	
	@GetMapping("/books/{id}/edit")
	public String editBook(
			@PathVariable("id") Long id,
			@ModelAttribute("dojo") Book book,
			Model model, 
			HttpSession session)
	{
		Long sessionId = (Long) session.getAttribute("user_id");
		model.addAttribute("id", sessionId);
		model.addAttribute("book", bookServ.findOneBook(id));
		return "/book/edit.jsp";
	}
	
	@PutMapping("books/{id}/edit")
	public String updateBook(
			Model model,
			@PathVariable("id") Long id,
			@Valid @ModelAttribute("book") Book book,
			BindingResult results)
	{
		if(results.hasErrors()) {
			model.addAttribute("book", book);
			return "/book/edit.jsp";
		} else {
			bookServ.updateBook(book);
			return "redirect:/books";
		}
	}
	
	@DeleteMapping(value="/books/{id}/delete")
	public String deleteBook(
			@PathVariable("id") Long id)
	{
		bookServ.deleteBook(id);
		return "redirect:/books";
	}
}
