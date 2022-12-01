package com.joshs.abstractart;
import java.util.ArrayList;

public class Museum {

	public static void main(String[] args) {
		
		ArrayList<Art> museum = new ArrayList<Art>();
		
		museum.add(new Painting("Painting 1", "Painter 1", "The first painting.", "Oil"));
		museum.add(new Painting("Painting 2", "Painter 2", "The second painting.", "Watercolor"));
		museum.add(new Painting("Painting 3", "Painter 3", "The third painting.", "Acrylic"));
		
		museum.add(new Sculpture("Sculpture 1", "Sculpter 1", "The first sculpting", "Marble"));
		museum.add(new Sculpture("Sculpture 2", "Sculpter 2", "The second sculpting", "Bronze"));
		
		for(Art work : museum) {
			work.viewArt();
		}
	}

}
