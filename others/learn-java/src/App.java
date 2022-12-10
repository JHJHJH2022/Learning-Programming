import java.util.HashMap;

public class App {
    public static void main(String[] args) throws Exception {
        int a = 'y' - 'b';
        System.out.println(isIsomorphic("rr","ea").get("r"));
    }

    public static void printArr(int[] intArr){
        try{
            System.out.println("Your lucky number is: " + intArr[1]);
        }catch(Exception e){
            System.out.println("Your input seems to be empty! Please check again");
        }
    }

        public static HashMap isIsomorphic(String s, String t) {
            HashMap<Character,Character> hm = new HashMap<Character,Character>();
            for (int i=0; i<s.length();i++){
                hm.put(s.charAt(i),t.charAt(i));
            }
            return hm;
        }

}
