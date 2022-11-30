public class BankAccountTest {
    public static void main(String[] args) {
        BankAccount account1 = new BankAccount();
        BankAccount account2 = new BankAccount();

        account1.withdraw("Checking", 100);
        account1.deposit("Checking", 100);
        account1.withdraw("Checking", 50);
        account1.withdraw("Retirement", 500);
        System.out.println(BankAccount.totalAccountCount());
        account1.deposit("Checking", 500);
        account2.deposit("Savings", 300);
        System.out.println(BankAccount.totalAmountCount());
    }
}