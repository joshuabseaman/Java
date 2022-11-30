public class BankAccount {
    private double checkingbalance;
    private double savingsbalance;
    private static int numOfAccounts = 0;
    private static int totalAmount = 0;

    public BankAccount() {
        this.checkingbalance = 0.0;
        this.savingsbalance = 0.0;
        numOfAccounts ++;
    }
    public BankAccount(double checkingbalance, double savingsbalance) {
        this.checkingbalance = checkingbalance;
        this.savingsbalance = savingsbalance;
        numOfAccounts ++;
    }

    public double getCheckingBalance() {
        return this.checkingbalance;
    }
    public void setCheckingBalance(double checkingbalance) {
        this.checkingbalance = checkingbalance;
    }

    public double getSavingsBalance() {
        return this.savingsbalance;
    }
    public void setSavingsBalance(double savingsbalance) {
        this.savingsbalance = savingsbalance;
    }

    public static int totalAmountCount() {
        return totalAmount;
    }

    public static int totalAccountCount() {
        return numOfAccounts;
    }

    public void deposit(String accountType, double amount) {
        if(accountType == "Checking") {
            this.checkingbalance += amount;
            totalAmount += amount;
        } else if(accountType == "Savings") {
            this.savingsbalance += amount;
            totalAmount += amount;
        } else {
            System.out.println("Please enter a vaild account type.");
        }
    }

    public void withdraw(String accountType, double amount) {
        if(accountType == "Checking") {
            if(this.checkingbalance < amount) {
                System.out.println("Insufficient Funds");
            } else {
                this.checkingbalance -= amount;
                totalAmount -= amount;
            }
        } else if (accountType == "Savings") {
            if(this.savingsbalance < amount) {
                System.out.println("Insufficient Funds");
            } else {
                this.savingsbalance -= amount;
                totalAmount -= amount;
            }
        } else {
            System.out.println("Please enter a vaild account type.");
        }
    }

    public double getAccountsTotal() {
        return this.checkingbalance + this.savingsbalance;
    }
}