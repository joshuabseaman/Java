package com.joshs.booksapi.controllers;

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
import org.springframework.web.bind.annotation.RequestMethod;

import com.joshs.booksapi.models.Book;
import com.joshs.booksapi.services.BookService;

@Controller
public class BookController {
	
	@Autowired
	BookService bookService;
	
	@GetMapping("/")
	public String home(Model model) {
		return "redirect:/books";
	}
	
	@GetMapping("/books")
	public String index(Model model) {
		
		List<Book> books = bookService.allBooks();
		
		model.addAttribute("books", books);

		return "index.jsp";
	}
	
	@PostMapping("/books")
	public String create(
			@Valid @ModelAttribute("book") Book book,
			BindingResult result) 
	{
		if(result.hasErrors()) {
			return "new.jsp";
		}
	    bookService.createBook(book);
	    return "redirect:/books";
	}
	
	@GetMapping("/books/new")
	public String newBook(@ModelAttribute("book") Book book) {
		return "new.jsp";
	}
	
	@GetMapping("/books/{id}")
	public String show(Model model, @PathVariable("id") Long id) {
		Book book = bookService.findBook(id);
		model.addAttribute("book", book);
		return "show.jsp";
	}
	
	@GetMapping("/books/{id}/edit")
    public String edit(@PathVariable("id") Long id, Model model) {
        Book book = bookService.findBook(id);
        model.addAttribute("book", book);
        return "edit.jsp";
    }
	
	@PutMapping(value="/books/{id}")
    public String update(
    		@Valid @ModelAttribute("book") Book book, 
    		BindingResult result) {
        if (result.hasErrors()) {
            return "/books/edit.jsp";
        } else {
            bookService.updateBook(book);
            return "redirect:/books";
        }
    }
	
	@DeleteMapping(value="/books/{id}")
    public String destroy(@PathVariable("id") Long id) {
        bookService.deleteBook(id);
        return "redirect:/books";
    }
}
