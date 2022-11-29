import java.util.ArrayList;
public class TestOrders {
    public static void main(String[] args) {
    
        // Menu items
        Item item1 = new Item("Cappucino", 5.5);
        Item item2 = new Item("Mocha", 6.5);
        Item item3 = new Item("Lattee", 4.5);
        Item item4 = new Item("Drip Coffee", 5.0);

        //Create 2 orders for unspecified guests
        Order order1 = new Order();
        Order order2 = new Order();

        //Create 3 orders using the overloaded constructor
        Order order3 = new Order("Anna");
        Order order4 = new Order("Emilie");
        Order order5 = new Order("Coco");

        //Add at least 2 items to each order
        order1.addItem(item1);
        order1.addItem(item2);
        order2.addItem(item3);
        order2.addItem(item4);
        order3.addItem(item1);
        order3.addItem(item3);
        order4.addItem(item2);
        order4.addItem(item4);
        order5.addItem(item1);
        order5.addItem(item4);

        //Implement getStatusMessage method
        System.out.println(order1.getStatusMessage());

        //Test getStatusMessage functionality by setting an order to ready and printing the message
        order1.setReady(true);
        System.out.println(order1.getStatusMessage());

        //Implement and test getOrderTotal method and print
        System.out.println(order1.getOrderTotal());

        //Implement and call the display method on all order
        order1.display();
        order2.display();
        order3.display();
        order4.display();
        order5.display();
    }
}
