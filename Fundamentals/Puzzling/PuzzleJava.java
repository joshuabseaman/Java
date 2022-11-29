import java.util.Random;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.ArrayList;


public class PuzzleJava {
    private Random randMachine;

    public PuzzleJava() {
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("HHmmss");
        int currentTime = Integer.parseInt(simpleDateFormat.format(new Date()));
        randMachine = new Random();
        randMachine.setSeed(currentTime);
    }

    public ArrayList<Integer> getTenRolls() {
        ArrayList<Integer> intArray = new ArrayList<Integer>();
        for (int i=0; i<10; i++) {
            intArray.add( randMachine.nextInt(20) + 1 );
        }
        return intArray;
    }

    public char getRandomLetter() {
        char[] alphabet = {'A', 'B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'};
        int randomInt = randMachine.nextInt(26);
        if (randomInt % 2 == 0) {
            return (char) Character.toLowerCase(alphabet[randomInt]);
        }
        return alphabet[randomInt];
    }

    public String generatePassword() {
        String password = "";
        for (int i=0; i<8; i++) {
            password += this.getRandomLetter();
        }
        return password;
    }

    public ArrayList<String> getNewPasswordSet(int numPassword) {
        ArrayList<String> passwordSet = new ArrayList<String>();
        for (int i=0; i<numPassword; i++) {
            passwordSet.add(this.generatePassword());
        }
        return passwordSet;
    }
}