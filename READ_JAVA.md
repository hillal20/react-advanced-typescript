### 1 \*\* core java interview questions

java is not 100 OOP because it has :
boolean , char , int ,float , double , long , short , byte

## 2 \*\* pointer are not allowed in java :

  - because unsafe ,
  - increase the complexity ,
  - the JVM is responsible for the memory

## 3 \*\* JIT in java :

in jdk :
         * javac compiler compile source code ===> to byte codes

in JRE :
interpreter + JIT compiler (just in time compiler ): 
                                     *  read the byte code 
                                     *  convert it to machine language

## 4 \*\* why String is immutable in java

-  To protect the shared reference
-  For security since string is shared in lot of places : file system , networking, db ...

## 6 \*\* Marker Interface

_ Empty interface :
                  * to tell the compiler this either cloning or serializing
             

## 7 \*\* we can not override static or private methods in java because

- the private key work make the method not accessible outside the class. in the child class you could create a new method with the same name
- static key word make the properties of class reachable only via the class itself and not form the objects

## 8 \*\* finally key word

    not always work in case : 
                             * the System.exit() 
                             * system crash

## 9 \*\* the object has methods :

  - clone(),
  - equals() ,
  _ finalize() use by the garbage collector ,
  _ getClass() , 
  _ hashCode(), 
  _ toString() ...

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

## 13 \*\* Bean in java the class has to

_  implements Serializable class
_  all the fields are private , 
-  no argument constructor
-  setters and getters public

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
 we use the Comparator interface  , 
 ```
 Comparator<LapTop> priceComparator  = new Comparator<LapTop>(){
           public int compare(LapTop lap1 , LapTop lap2){
               return lap2.getPrice() > lap1.getPrice() ? -1: 1;
           } 
        };
       Collections.sort( list<LapTop> , priceComparator);
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
  
   - the initial capacity of map is 16 buckets , start from 0 to 15 bucket 
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


## 37 ** Access modifiers hierarTchy 
- public: 
       * anywhere

protected: 
         * the same class,
         * any subclass,
         * the same package.

default (package-private):
                       * A member with no access modifier 
                       * the same package.

private:
        * the same class 


## 38  Thread safe 
   - multiple threads could work on the same code/Object  at the same time (simultaneously)
   - data is the same 
   - operations are performed correctly  in a concurrent environment.

## 39 HashMap in multi-threaded env
  - if the microservice (let say rest api ) has only GET request , no data modification
  - hashMap doest like concurrent modification 
                ex: one thread is reading and another thread is modifying 
  - we could use ConcurrentHashMap 

## 40  HashMap VS HashTable vs ConcurrentHasMap
   - HashMap:
            - Not synchronized / not thread-safe / not be used in concurrent applications (rest api) / single threaded envs / Allows one null key and multiple null values.
            - fail-fast and  throw ConcurrentModificationException 


   - HashTable: 
              - Synchronized / thread-safe  / used in multithreaded envs / not allow null keys or values.
              - fail-fast and  throw ConcurrentModificationException 




   - ConcurrentHashMap :
              - thread-safe / better performance than HashTable / multithreaded environments / not allow null keys or values.
              - fail-safe not  throw ConcurrentModificationException 

  ## 41 fail-fast vs fail-safe 

     - the behavior of iterators when a collection is modified concurrently
     - fail-fast : throw ConcurrentModificationException rapid 
    

  ##  creating String Literal vs creating string using new() 

        String str1 = "hello"; // Creates a string literal
        String str2 = "hello"; // Uses the existing string literal from the pool
         
         - Performance: Efficient / Immutable 


        String str3 = new String("hello"); // Creates a new String object in the heap
        String str4 = new String("hello"); // Creates another new String object in the heap

        - Performance: Less efficient / Immutable


    ##   Java memory management : handled by the Java Virtual Machine (JVM),
         - Heap Memory:  
                     - storing objects/arrays in runtime
                     - Managed by the garbage collector.
                     - All objects created using the new keyword 

         - Stack Memory:
                     - storing local-variables/method-call information.

         - Method Area (Non-Heap Memory):
                    - Stores class structures (metadata)/method information / static variables / constant pool.
                    - Shared among all threads 
                    - Classes and methods loaded by the JVM are stored in the method area.

         - Program Counter (PC) Register:
                    - thread has its own program counter
                    - Stores the address of INSTRUCTIONS executed by a thread.
  
         - Native Method Stack:
                    - methods written in a language other than Java,
                    - Stores information for native method calls.
                    ex : System.loadLibrary("NativeLibrary"); // NativeLibrary.dll (on Windows) or libNativeLibrary.so (on Unix/Linux)


   ## String pool (part of the Heap memory) :
             - store unique instances of string literals.
             - Strings in the string pool are immutable




   ## Java 8 

      - lambda expression
      - stream api
      - default methods in interfaces 
      - static methods
      - Functional Interface 
      - Optional
      - Method References 
      - Date Api
      - Nashorn, JavaScript engine


## Optional 
     - to prevent null-pointer-exception "NullPointerException"
       ```
        String str = null;
        Optional<String> optionalStr = Optional.ofNullable(str);
        
        System.out.println(optionalStr.orElse("Default Value"));
        ```

## Spring boot mini dependency 
      -it is : "spring-boot-start-web"

## Spring boot actuator 
  - monitor and manage  the app in  multiple envs 
  - provide end-points to display info :
                                      -  health 
                                      -  metrics 
                                      -  ENV  variables 

## Spring profiles @Profile  in ( dev , impl, prod , test,  uat ...)
      - map components and beans in every evn 
         ex:
               * in application.properties : 
                                              spring.profiles.active=dev 
               * or in JVM system parameter:
                                              -Dspring.profile.active=dev

               * or in spring boot entry Application: 
                                              SpringApplication.setAdditionalProfiles("dev")
                          
            ```
            @Configuration
            @Profile("dev")
            public class DevConfig {

                @Bean
                public MyService myService() {
                    return new MyService("Development Service");
                }
            }
            ```
            ```
              @Configuration
              @Profile("test")
              public class TestConfig {

                  @Bean
                  public MyService myService() {
                      return new MyService("Test Service");
                  }
              }
            ```

            ```
              public class MyService {
                private String message;

                public MyService(String message) {
                        this.message = message;
                    }

                    public String getMessage() {
                        return message;
                    }
              }
            ```
            then u can add this to any class : 
                                   ```
                                   @Autowired
                                   private MyService myService;
                                   ```

### AOP (Aspect Oriental Programming)
           - programming paradigm 
                                   to segregate cross-cutting concerns : 
                                               logging, security , profiling , transaction management ... 
                                               ( re-used classes that could be used in different layers in the app )
                                   to use them in :  
                                                    business logic layer,
                                                    ui layer,
                                                    data access layer 


           - Terms in AOP
           
                        Aspect:  helper that adds  "Hello!" and "Goodbye!" 

                        JoinPoint: when  you can add"Hello!" and "Goodbye!" It could be before, after, or even during 

                        Advice: "Hello!" or  "Goodbye!"

                        Pointcut: in case only one method need to be modified  , shows that method 

                        Weaving:   The process of applying the aspect to the target method, done by Spring AOP at runtime using a proxy.


          - add   spring-boot-starter-aop   as a dependency
           ```
                @Aspect
                public class GreetingAspect {
                    
                    @Before("execution(* Robot.*(..))")
                    public void sayHello() {
                        System.out.println("Hello!");
                    }

                    @After("execution(* Robot.*(..))")
                    public void sayGoodbye() {
                        System.out.println("Goodbye!");
                    }
                }
           
                public class Robot {
                    public void walk() {
                        // Walk code
                    }

                    public void talk() {
                        // Talk code
                    }

                    public void dance() {
                        // Dance code
                    }
                }
              

              - if u need to target only one method let say talk (Pointcut) :

              
              @Aspect
              @Component
              public class GreetingAspect {

               
                  @Pointcut("execution(* Robot.talk(..))")
                  public void talkMethod() {}

                  @Before("talkMethod()")
                  public void sayHello() {
                      System.out.println("Hello!");
                  }

                  @After("talkMethod()")
                  public void sayGoodbye() {
                      System.out.println("Goodbye!");
                  }
              }
             ```
### @Value 
       used in class to access any field in application.properties 

### Robust and Fault tolerant 
    external libraries provides extra features
                        - circuit breakers 
                        - rate limiters 
                        - retries 
                        - bulkheads 
  
  - Resilience4j
  - Hystrix


  ### JDK VS JRE 
   ```
      JDK : 
            - JRE:
                  * JVM
                  * Core Libraries
                  * Other Components
          
            - Development Tools:
                  * (compiler, debugger, etc.)
    ```


### CLASSPATH in java 

   ex: 
          - let say i have java app (Projects/my-app) and i have these classes,
             each class is randomly located :

                                     Lib/hilal/user.java
                                     store/aissani/books.java
                                     playground/settara/milia.java

          - first make sure java home  is added to the PATH :
                                                              export PATH=$PATH:/usr/lib/jvm/java-11-openjdk/bin

          - compile the Java classes. From the root directory of your project :
              ex: 
                 javac -d . Lib/hilal/user.java store/aissani/books.java playground/settara/milia.java
          
          - This will compile the Java files and place the compiled .class files in the corresponding directories.

          - fix the application  CLASSPATH:

                      this could be done via 2 ways : 
                                               1- by adding all the new .class to the existing app CLASSPATH
                                               ```
                                                 export CLASSPATH=$CLASSPATH:/Usr/my-app/Lib/hilal:/Usr/my-app/store/aissani:/Usr/my-app/playground/settara
                                               ```

                                     or 
                                               2- you can set the CLASSPATH directly when RUNNING  your Java application:

                                               ```
                                               java -cp /Usr/my-app/Lib/hilal:/Usr/my-app/store/aissani:/Usr/my-app/playground/settara YourMainClass 
                                               ```

                                                   mainClass : public static void main(String[] args)
                                                   -cp or -classpath : means the classpath 

  ### The default CLASSPATH
        - This means that if you do not explicitly set the CLASSPATH,
        - Java will look for classes in the directory from which you are running the Java command (java)
        - the default CLASSPATH is represented with "." 
        - "." represent in fact the location where you are running the java command 
                 ex: 
                     java -cp .:/path/to/other/class:/path/to/other/another-class mainClass


  ### Overriding classpath and compiling external java classes in gradle :
          ```
            sourceSets {
            main {
                java {
                    srcDirs = ['src/main/java', '/path/to/other/source', '/another/path/to/source']
                }
              }
            }

            task run(type: JavaExec) {
            main = 'com.example.MainApp'
            classpath = files(sourceSets.main.runtimeClasspath, '/path/to/other/classes', '/another/path/to/classes')
           }
          ```

### derived method in java 
       - method in a subclass that overrides the one in  superclass.

### shadowing variable:
       ```
         int x = 10; // Outer variable

        void method() {
            int x = 20; // Inner variable, shadows the outer 'x'
            System.out.println("Inner x: " + x); // Prints the value of inner 'x'
        }
       ```


## Generics in java  
   * classes : 
         ex: class Dog<T> {

         }
     - generics doest work with primitive types : int, float , double 
     - let say we have Animals class, <T> could be <T extends Animals>, so this genetic type could be valid for all classes (subclasses) that extends Animals 
     - this generic type :  <T extends Animals >  is called "bounded genetic"
     - If Animals is an interface ,  extends also is excepted : <T extends Animals>
     - T could extends 2 at the same time, one  Class  and one interface only , the class has to come first then the interface  :  <T extends Animals & Serializable>

   * methods: 
        ex:   
           private <T,C> void my_method(T param1, C param2 ){
            // code 
           }

        or if there is a return :

         private <T,C> D my_method(T param1, C param2 ){
            
            return  "the return has to be of type D 
           }
    

    * wild cards:
                  * in case of methods you could do the following :

                        private  List<?> sortMyList(List<?> myList){
                          // sorting logic 

                          return mySortedList; 
                        }

                        !IMPORTANT: 
                                    we could not pass  List<Integer>  to the method that expecting List<Object> as param
                                    because List<Integer> is not a subclass of List<Object> , even though Integer is a subclass of Object 
                                     


                  * in case of the normal variables you could go with Object type but never use the primitives types 
                      List<Object> myList = new ArrayList<>();
                      Object is the superClass of all java classes : String , Boolean, Integer 

## sealed class  ===> java 17:
   - no to give the permission to to anyone to use it 

    ex :
        ```
         sealed interface Shape permits Circle , Rectangle {
            double area()
         }
         

         final class Circle implements Shape  {

         }
        ```

## pattern matching  ===> java 17:

    ``
     Object value = "Hello world" 
        if(value instanceof String str){
          System.out.print("str  ===>"+ str )
        }
    ``



### switch case   ==>  java 17 

         ````
           Object  str = "hello"
           switch(str){
            case String s -> System.out.print("string");
            case Integer i -> System.out.print("integer");
            default -> {
              System.out.print("default")
            }
           }
         ````

### switch expression  ==>  java 17 

         ````
           int number = 10
           switch(number){
            case 10,11 ->  yield 100;
            case 20 -> yield 1000;
            default -> yield 1 ;
           }
         ````
###  Interpreter (JVM interpreter) VS JIT (just-inTime-interpreter )
     Initial Run:  
            - JVM Interpreter  INTERPRET  all (.class) bytecode to machine node (native code) on-the-fly and EXECUTE it.
            - JVM Interpreter detect hot-spots (the most useful bytecode) 
            - JIT Compiler  INTERPRET hot-spots detected to machine-code (Optimized-Native-Code)
            - One JVM Interpreter reach a place contain hot-spots it EXECUTE  directly Optimized-Native-Code without interpreting it 


### .clone() in java 

      ```
      class Person implements Cloneable {
                      private String name;
                      private int age;

              public Person(String name, int age) {
                        this.name = name;
                        this.age = age;
              }

              @Override
              public Person clone() {
                  try {
                      return (Person) super.clone();  // Shallow copy by default
                  } catch (CloneNotSupportedException e) {
                      throw new RuntimeException("Cloning not supported", e);
                  }
              }

              @Override
              public String toString() {
                          return "Person{name='" + name + "', age=" + age + "}";
              }
          }



          public class Main {
              public static void main(String[] args) {
                              Person original = new Person("John Doe", 30);
                              Person clone = original.clone();
                              System.out.println("Original: " + original);
                              System.out.println("Clone: " + clone);
              }
          }
        
   ```

### .copy() 

         ```
           class Address {
                private String city;

                public Address(String city) {
                    this.city = city;
                }

                // Custom copy method
                public Address copy() {
                    return new Address(this.city);  // Assuming shallow copy for simplicity
                }

                @Override
                public String toString() {
                    return "Address{city='" + city + "'}";
                }
            }



            public class Main {
                public static void main(String[] args) {
                    Address original = new Address("New York");
                    Address copy = original.copy();
                    System.out.println("Original: " + original);
                    System.out.println("Copy: " + copy);
                }
           }
        ```

  


  
