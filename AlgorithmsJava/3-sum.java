//firs one lets to create the main class
import java.util.*;

import javax.security.sasl.SaslException;
public class ThreeSum{
    //lets create a funtion 
    
    public static int count(int[] a){
        int N = a.length;
        int count = 0;
        for(int i = 0;i<N;i++){
            for(int j = i+1;j<N;j++){
                for(int k =j+1;k<N;k++){
                    if(a[i]+a[j]+a[k]==0){
                        count++;
                    }
                }
            }
        }
        return count;
    }
    public static void main(String[] args){
        Scanner src = new Scanner(System.in);
        int[] a = new int[10];
        for(int i = 0;i<a.length;i++){
            System.out.println("ingrese numero de indice: "+i+1);
            int j = src.nextInt();
            a[i]=j;
        } 
        System.out.println(count(a));
    }
}