### 1 \*\* core java interview questions

java is not 100 OOP because it has :
boolean , char , int ,float , double , long , short , byte

## 2 \*\* pointer are not allowed in java :

because unsafe , increase the complexity , the JVM is responsible for the memory

## 3 \*\* JIT in java :

in jdk :
javac compiler compile source code ===> to byte codes

in JRE :
interpreter + JIT compiler (just in time compiler ) => read the byte code and convert it to machine language

## 4 \*\* why String is immutable in java

- because the String pool to protect the shared reference
- and for security since string is shared in lot of places : file system , networking, db ...

## 6 \*\* Marker Interface

is an empty interface to tell the compiler this either cloning or serializing

## 7 \*\* we can not override static or private methods in java because

- the private key work make the method not accessible outside the class. in the child class you could create a new method with the same name
- static key word make the properties of class reachable only via the class itself and not form the objects

## 8 \*\* finally key word

    not always work in case the System.exit() or  system crash

## 9 \*\* the object has methods :

clone(), equals() , finalize() use by the garbage collector , getClass() , hashCode(), toString() ...

## 10 \*\* to make the class immutable :

- make the class finale with the final key word
- all the fields private
- all the fields final, once it is initiated can not reassign
- the initialization only via constructor
- make the cloning only in the getter to return a copy of the object rather than the object reference
- no setters

## \*\* 11 singleton class gives only one instance of object in one jvm,

via making the constructor private and we create a private and static field to hold the single instance of that class
and we make a static method to generate an object of the class itself

## 12 \*\* pojo in java is a normal class

## 13 \*\* Bean in java the class has to implements Serializable class

and all the fields are private , and no argument constructor
and always setters and getters public

## ** 14 ** tight coupling

means in one class there somewhere the need to another class to run

## 15 \*\* loosely coupled

means we have an interface and 3 implementations of it , the fourth class has the choice of choosing from 3 class to run it code .

## 16 \*\* Sorting in java using Comparable interface (comparTo)

Collections.sort(list<LapTop>) , the list has to be a list of primitive types.
if the list has objects then we can not sort , we need to have the LapTop of the list implements Comparable<LapTop>, and we @override the comparTo method

```
@Override
public int compareTo(LapTop laptop){
    // this will represent the first object
        return this.price > laptop.price ? -1 : 1;
    }
Collections.sort(list<LapTop>)

```

## 17 ** Sorting in java using Comparator interface (compare )
 we use the Comparator interface 
 ```
 Comparator<LapTop> priceComparator  = new Comparator<LapTop>(){
           public int compare(LapTop lap1 , LapTop lap2){
               return lap2.getPrice() > lap1.getPrice() ? -1: 1;
           } 
        };
       Collections.sort(laptops, priceComparator);
```
## 18 ** Implements and extends in java 

interfaces can extends themselves 
classes can extends themselves 

but class can only implements interface 


## 19 ** Collections in Java 

1 -  Collection framework  Hierarchy : has a main  Collection  interface which is the root. It contains 4 extended  interfaces : 
                                                     List ,
                                                     Queue,
                                                     Set,
                                                     Map 

2 - List , Queue and Set extends Collection interface 

3 - Map does not extends  the Collection interface  

4 - List interface gives classes : 
                                  ArrayList,
                                  LinkedList,
                                  Vector , 
                                  Stack (coming form vector)
5 - Set interface gives classes :
                                  HashSet 
                                  LinkedHashSet 
            and one  interface : 
                                  SortedSet , which gives a class : 
                                                                   TreeSet

6 - Queue Interface gives classes : 
                                   PriorityQueue 
                and one interface : 
                                   DeQueue , which gives class: 
                                                             ArrayDeQue 
7 - Map interface gives classes :
                                 HashMap 
                                 hashTable 
                and on interface :
                                 SortedMap, which gives class:
                                                              TreeMap 
                                                              

## 20 ** Map interface does not extends Collection interface 
 because : 
          1- map has key/value pairs structure while collection store objects with specified access mechanism 
          2- Collection.add(value) method never store key/value like 
          Map.put(key,value)

## 21 ** Fail-fast and fain-safe Iterators 
- fail-fast Iterator : 
                       - throw ConcurrentModificationException while  iterating a collection if a modification happens 
                       - throw immediate Exception in case of failure 
- fail-safe Iterator : 
                       - does not throw an error in case the collection is   modified during iteration 
                       - it is operating on a clone collection instead of the original 
## 22 ** BlockingQueue interface  in Java 
 java.util.concurrent.BlockingQueue   is a  queue,

 it is a ThreadSafe means Multiple threads can add and remove elements at the same time 

 it is capable to block a thread (add or remove element )  and wait until the needed  element is available for the thread.

## 23 **  Synchronized Collection VS Concurrent Collection 
 - both thread safe 
 - only the performance and the scalability differs
 - synchronized collections (hashmap) are slower  then Concurrent collections 
   like ConcurrentHashMap 
 - in synchronized collection only one thread modify a element, the rest they wait for the collection to be free 
 - in Concurrent , the other threads can access to the non-touched elements instead of waiting 

 ## 24 ** how HashMap works in Java internally 
 ```
   Map<Employee, string >  map = new HashMap<>();
  
   - the initial capacity of map is 16 , start from 0 to 15 bucket 
   - every bucket will have one or more nodes and every node has :
                                                  key , value , hash , next 
   - every node is considered linkedList 
   - map is the hashMap object 
   - let say we have 4 employee objects e1, e2, e3 , e4
   - map.put(e1, "hill"), map.put(e2, "fill"), map.put(e3, "bill") ...
   - inside the put method there is a method called hash ,  this hash method  will take the employee object (e1) and passe it as a param to the hash method 
   - the hash method will create an index = 6 , this mean it will store the data in the bucket 6 : 
                         e1, "hill", 10101101 , null
   - let say it will do the same for e2  in the bucket index = 9 :
                         e2, "fill" , 83383838 , null   
   - let sat in saving e3 the hash function  generated index = 6 
     which the same as the index of e1 
   - in this case the Map go to check e1.equals(e3), if they are not equal the 
     the Map will store it in the bucket 6 as well but the next of e1 will not 
     be null anymore, it will pointing to e3 
   - having more then one node in the same bucket is called hashing collision 
   - if the key is null , the Map will put the node in the index = 0 bucket 
             ex: Map.put(null, 'girl')


 ```

## 25 ** private keyword 
the field is accessed only from the same package    

##  26 ** passed by value VS passed by reference 
    - java is passed by value for the primitive types,  and by reference for the objects and arrays  reference
    - pass by value meaning is giving  the value of a variable to another variable to act as a copy,
    ex: 
    let say we pass a value to a function , the param of that function is nothing but another variable holding the same value passed to function in the invocation.
    But : 
     the object is different. we are passing the object reference as a value 
     (memory address)

- pass by reference means giving  the address of variable containing that value 

## 27 ** Equals and hashCode in objects 
    Employee e1 = new Employee("hil", 44)
    Employee e2 = new Employee("hil", 44)

        - shallow comparison is   e1 == e2 // this will evaluate to false , because it is comparing the address reference 

        - deep comparison is e1.equals(e2)  // this will evaluate to false as well 

 - to make equals() check for deep comparison we must override it :

```
public boolean equals(Object object ){

// 1 -  we cast the object passed to Laptop one 
LapTop laptop = (LapTop) object 


// 2 -  checking if it is a valid object and it is coming from the right class 
if(laptop == null || this.getClass() != laptop.getClass()){
    return false;
}


// 3 -   checking the address reference 
if(this == laptop ) return true ;

// 4 - checking if the values are the same 
if( this.name.equals(laptop.getName()) && this.ram == laptop.getRam()){
    return true;
}

return false;

}

```

## 28 ** HashCode in java 

  class Employee {
       private int id ;
       private String name;
       
        Employee(String name){
          this.name = name 
        }

       public int hashCode(){
           return this.id 
       }
  }
    Employee emp1 = new Employee("bill" )
     Employee emp2 = new Employee("bill" )

     - If 2 objects are equal based on  equals()   function as the example 27  , then the hashCode must be the same. because the hashCode is generated based on the value of field in the object.            
    
     - but there is one thing , if the hashCode is the same it is not necessary that the objects are the same. the hashCode means only the  number of the bucket in the hashTable in java . the bucket can have more that one node 

     - the same object always return the same hashCode                          
                                
## 29 ** we can not reduce the visibility of a method inherited  from parent 

if a method in the parent class is public , if we override the method  in the child class we can not make it less (protected , default , private )

## 30 ** public  access modifier form everywhere  

## 31 ** protected  access modifier is only from the package , or within a subClass regardless their package   

## 32 ** default access modifier is ony from the package  

## 33 ** private access modifier is only from inside the class 

## 34 ** shadowing of static methods
if a class is the parent and it has a child class extended from it ,
and the child  overrode one method of the parent 

if we generate an object from  the child , and even if the type of the obj was the parent class, if we call the overrode method , the child method will be called

but if we supply the overrode method with the static key word in both parent and child , and if we call the overrode method from the obj , then  the parent method will be invoked instead 

## 35 ** Association , aggregation and composition 
- aggregation : is a weak association (loose coupling)
       ex : 
           class Driver {
                Car car = new Car(); // the car could be null and the driver will stay 
           }
        the car will stay a car even if there is no driver, and vise versa 

- Composition : is a strong association (tight coupling )
     ex: 
         class Car {
            Engin engin = new Engine(); // the car can not exist without engine 
         }


## 36 ** Covariant return type 
the overrode method in the child has to have the same return type  as the parent method , or a child of it
     ex : parent return type Object 
          child return type String 
          String is a child of Object 



   