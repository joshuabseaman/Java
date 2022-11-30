import java.util.ArrayList;

public class CoffeeKiosk {
    private ArrayList<Item> menu = new ArrayList<Item>();
    private ArrayList<Order> orders = new ArrayList<Order>();

    public CoffeeKiosk() {}

    public void addMenuItem(String name, double price) {
        Item newItem = new Item(name, price);
        menu.add(newItem);
        int index = menu.indexOf(newItem);
        newItem.setIndex(index);
    }

    public void displayMenu() {
        for(Item i: this.menu) {
            System.out.println(i.getIndex() + " " + i.getName() + " -- $" + i.getPrice());
        }
    }

    public void newOrder() {
        System.out.println("Please enter customer name for new order.");
        String name = System.console().readLine();
        Order newOrder = new Order(name);
        displayMenu();
        System.out.println("Please enter a menu item index or q to quit:");
        String itemNumber = System.console().readLine();
        while(!itemNumber.equals("q")) {
            int i = Integer.parseInt(itemNumber);
            if(i < this.menu.size()){
                Item orderItem = menu.get(i);
                newOrder.addItem(orderItem);
            } else {
            System.out.println("Sorry we do not have it");
            }
            System.out.println("Please enter the index of the coffee you would like to order, or press q to exit");
            itemNumber = System.console().readLine();
        }
        newOrder.display();
        this.orders.add(newOrder);
    }

    public void addMenuItemByInput(){
        String isCompleted = "y";
        while(isCompleted.equals("y")) {
            System.out.println("Please enter the name of the product:");
        String itemName = System.console().readLine();
        while(itemName.isEmpty()){
            System.out.println("Please enter a valid name");
            itemName = System.console().readLine();
        } 
        System.out.println("Please enter the price of the product:");
        String itemPrice = System.console().readLine();
        while(itemPrice.isEmpty()){
            System.out.println("Please enter a valid price");
            itemPrice = System.console().readLine();
        }
        double price =  Double.parseDouble(itemPrice);

        addMenuItem(itemName, price);
        System.out.println("Do you want to add another product? y/n");
        isCompleted = System.console().readLine().toLowerCase();
        }
    }
}