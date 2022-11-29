import java.util.HashMap;
import java.util.Set;

public class MapOfTheHashmatique {
    public static void main(String[] args) {
        HashMap<String, String> trackList = new HashMap<String, String>();
        trackList.put("Coding", "Everyday I'm coding and getting better.");
        trackList.put("Party", "I want to party all night long.");
        trackList.put("Mondays", "The worst day of the week.");
        trackList.put("Ice Cream", "I scream, you scream, we all scream for ice cream.");

        System.out.println("Coding :" + trackList.get("Coding"));

        Set<String> keys = trackList.keySet();
        for(String key : keys) {
            System.out.println(key + " : " + trackList.get(key));
        }
    }
}