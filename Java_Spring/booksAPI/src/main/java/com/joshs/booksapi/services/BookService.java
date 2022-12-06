package com.joshs.booksapi.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.joshs.booksapi.models.Book;
import com.joshs.booksapi.repositories.BookRepository;

@Service
public class BookService {
	
	@Autowired
	BookRepository bookRepository;
	
	// returns all the books
    public List<Book> allBooks() {
        return bookRepository.findAll();
    }
    // creates a book
    public Book createBook(Book b) {
        return bookRepository.save(b);
    }
    // retrieves a book
    public Book findBook(Long id) {
    	return bookRepository.findById(id).orElse(null);
    }
    // updates a book
    public Book updateBook(Book book) {
    	return bookRepository.save(book);
    }
    //deletes a book
    public void deleteBook(Long id) {
    	bookRepository.deleteById(id);
    }
}
