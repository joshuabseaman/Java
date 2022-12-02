package com.joshs.hoppersreceipt.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {

    @RequestMapping("/")
    public String index(Model model) {
        
        String name = "Mike Tyson";
        String itemName = "Edible Ears";
        double price = 10.75;
        String description = "A chewy snack for those who are partly cannibal.";
        String vendor = "Oddities, Novelties, and more!";
    
    	model.addAttribute("name", name);
    	model.addAttribute("itemName", itemName);
    	model.addAttribute("price", price);
    	model.addAttribute("description", description);
    	model.addAttribute("vendor", vendor);
    
        return "index.jsp";
    }
}
