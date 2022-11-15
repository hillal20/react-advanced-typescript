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

- because the Sting pool to protect the shared reference
- and for security since string is share in lot of places : file system , networking, db ...

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
   
        

                      
                       
    
                                
                                
                                
                            

   