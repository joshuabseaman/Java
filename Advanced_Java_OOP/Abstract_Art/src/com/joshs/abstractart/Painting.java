package com.joshs.abstractart;

public class Painting extends Art{
	
	protected String paintType;
	
	public Painting(String title, String author, String description, String paintType) {
		super(title, author, description);
		this.paintType = paintType;
	}

	@Override
	public void viewArt() {
		System.out.println("Title: " + this.getTitle());
		System.out.println("Author: " + this.getAuthor());
		System.out.println("Description: " + this.getDescription());
		System.out.println("Paint Type: " + this.getPaintType());
	}

	public String getPaintType() {
		return paintType;
	}
	public void setPaintType(String paintType) {
		this.paintType = paintType;
	}
}
