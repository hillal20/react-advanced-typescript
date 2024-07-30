
```
 import java.util.ArrayList;
 import java.util.List;
 import java.util.Collections;
 import java.util.Comparator;
 
 
public class Main
{
    public static void main(String[] args) {
        System.out.println("Welcome to Online IDE!! Happy Coding :)";
        
        List<LapTop> laptops = new ArrayList<>();
        
        laptops.add(new LapTop("dell", 16, 1200));
        laptops.add(new LapTop("apple", 16, 2000));
        laptops.add(new LapTop("hp", 8, 1000));
        
         // this will do the Comparable interface
        //Collections.sort(laptops);
        
        // this will do the Comparator interface
        Comparator<LapTop> priceComparator  = new Comparator<LapTop>(){
           public int compare(LapTop lap1 , LapTop lap2){
               return lap2.getPrice() > lap1.getPrice() ? -1: 1;
           } 
        };
       Collections.sort(laptops, priceComparator);
        System.out.println(laptops);
    }
}

// Comparable is to make the class sortable inside Collections.sort()
class LapTop implements Comparable<LapTop> {
    private String name;
    private int ram;
    private int price; 
    
    LapTop(String name, int ram , int price ){
        this.name = name;
        this.ram = ram;
        this.price = price;
    }
    
    public void setName(String name ){
        this.name = name;
    }
    public void setRam(int ram ){
        this.ram = ram ;
    }
    
    public void setPrice(int price  ){
        this.price = price;
    }
    public int getPrice(){
       return  this.price;
    }
    
    @Override
    public String toString(){
        return "{ name: " + this.name + ",  ram: " + this.ram + ",  price: " + price + " }";
    }
    @Override
    public int compareTo(LapTop laptop){
        return this.getPrice() > laptop.getPrice() ? -1 : 1;
    }
}

```