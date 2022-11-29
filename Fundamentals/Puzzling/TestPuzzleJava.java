public class TestPuzzleJava {
    public static void main(String[] args) {

        PuzzleJava generator = new PuzzleJava();

        System.out.println("Get Ten Rolls: " + generator.getTenRolls());
        System.out.println("");

        System.out.println("Get Random Letter: " + generator.getRandomLetter());
        System.out.println("");


        System.out.println("Generate Password: " + generator.generatePassword());
        System.out.println("");

        for (String password : generator.getNewPasswordSet(8)) {
            System.out.println("Generate New Password Set: " + password);
        }
    }
}