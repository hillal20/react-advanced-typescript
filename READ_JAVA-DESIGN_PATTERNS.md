## categories of design patterns
  - Creational 
  - Behavioral 
  - Structural 
  - J2ee

       - all of them a solution for a problem.
       - most of the application are based on one of them 
       - all are tried and tested solutions 
       - save time and effort for development 
       - all for OOPS 

  ## creational : 

               * hide object creation, use the factory to create the obj base on specification 
        
   1 - Factory  pattern (Method Pattern):
                  - the factory class has a method to create objects ex: factory-creation-method
                  - factory-creation-method use the right class to generate the obj base on the param it takes 
                  - the object returned from factory-creation-method is  an Interface type 
                     

          ex 
          ```
             
             interface Job {
                 String print()
             }
             

             class Teacher implements Job {
                @override 
                String print(){
                    return "i am a teacher"
                }
             }
             
             class Driver implements Job {
                @override 
                String print(){
                    return "i am a deriver"
                }
             }
            

            class JobFactory {

                Job createJob(String str){
                    switch(str){
                      case "teacher" -> new Teacher();
                      case "driver" -> new Driver();
                      default {
                        return new Teacher()
                      }
                    }
                }
             
            }
            
            var  factory = new JobFactory();
            Job job = factory.createJob("teacher");   the job is of type Teacher 
          ```

    2 - Abstract factory pattern 
                                - instead of let one factory produce all the objects
                                - we need to  classify the factories  
                                - we need to create a class to give us the right factory (FactoryProducer)
                                - then the right factory will give us the right object 

         ex 
          ```
             
             interface Job {
                 String print()
             }
             
             class Teacher implements Job {
                @override 
                String print(){
                    return "i am a teacher"
                }
             }
             
             class Driver implements Job {
                @override 
                String print(){
                    return "i am a deriver"
                }
             }
            
              class Cop implements Job {
                @override 
                String print(){
                    return "i am a Cop"
                }
             }
             
             class Solder implements  Job {
                @override 
                String print(){
                    return "i am a Solder"
                }
             }
         
            

            interface JobFactory {
                Job  createJob(String str);
            }

            class NonSecurityJobFactory  implements JobFactory {
                Job createJob(String str){
                    switch(str){
                      case "teacher" -> new Teacher();
                      case "driver" -> new Driver();
                      default {
                        return new Teacher()
                      }
                    }
                }
            }

             class SecurityJobFactory  implements JobFactory {
                Job createJob(String str){
                    switch(str){
                      case "cop" -> new Cop();
                      case "solder" -> new Solder();
                      default {
                        return new Teacher()
                      }
                    }
                }
            }
            

            Class FactoryProducer {
                    static Factory isSecurity(Boolean x ){
                         return    !x ?   new NonSecurityJobFactory() : new SecurityJobFactory();
            
                     }
            }

            JobFactory nonSecurityJobFactory =  FactoryProducer.isSecurity(false)
            Job job =   nonSecurityJobFactory.createJob("teacher");   the job is of type Teacher 

          ```


    3- singleton: 

      ```
        class Job {
                private static Job job = new Job();

                private Job(){}

                private static Job  getInstance(){
                    return this.job ;
                }

        }

    4- Prototype:

         * problem: ect "objOne" from Animal class , but no  access  Animal
                    - obj class ???? 
                    - need copy of "objOne" but no access to Animal class 

        * solution :
                    1 -  interface  with one method : clone(), "AnimalPrototype"
                    2 -  abstract Animal class implements AnimalPrototype:
                                                                      - we need the Animal class to populate only the fields
                                                                      - the clone method need to be implemented in the subclasses 
                                                         
                    3 -  private fields to Animal class  
                    4 - un-implemented void method:  
                                                  public AnimalPrototype void();

                    6 -  constructor to Animal class take only one param of type "AnimalPrototype" :
                                                                                               ex: public Animal(AnimalPrototype dog)

                    7 - Animal constructor will populate all private fields from the passed "dog":
                                                                                          ex:   this.color = dog.color
                                                                                                this.hair = dog.hair  

                    8 - 2 classes Dog and Cat have constructor take take one param of type "AnimalPrototype"
                                                                                      ex:
                                                                                         public  Dog(AnimalPrototype dog){
                                                                                                  super(dog) // populate private fields
                                                                                                  
                                                                                         }
                                                                                         public  Cat(AnimalPrototype cat){
                                                                                                 super(dog) // populate private fields 
                                                                                         }
                                                                                          

                    10 - Dog and Cat   override clone() to return  new obj of Animal : "dogClone"
                                ex: 
                                @Override 
                                AnimalPrototype clone() {
                                                     return new Cat(this)  // decide type of Cat for new object 
                               }
        * conclusion: 
                     any  obj "obj1"  has a clone() method 
                              and 
                    of  type   abstract-class  "Animal"
                              is 
                     able  generate new obj with the same data and fields : var dog = obj1.clone()

             --> this will be very helpful in  case we need a copy of a List<Animal> ,
                  we could iterate on it and we create of copies of each  without need to know the exact type of animals ( Dog or Cat)



## structural patterns :

       - Deal with object composition,
       - if one part of a system changes, the entire system doesn't need to change along with it. 

       ex:
             - Adapter: 
                       makes it possible for the two classes, which work with different formats, to function together seamlessly.
             
             - 
             , Decorator, Proxy, Composite, Facade, Flyweight, Bridge 

## behavioral patterns:

         -  Deal with  the assignment and  responsibilities between objects.
         -  one-to-many dependency between objects
         -  if one object changes state, all its dependents get updated automatically.
         -  requests  and  handlers,

         ex:
              Observer, State, Command, Chain of Responsibility , Interpreter , Iterator , Mediator, Memento , Strategy , Template , Visitor


   1- chain of Responsibility pattern: 
                     - several Handlers to process a request in order 
                     - we create an abstract class with non-implemented handleRequest(Request request): "abstract Handler"
                     - Handler class has to have nexHandler field
                     - the constructor of this class take nextHandler as param , we could have more to help  processing
                     - handlerSubClass has to implement handlerRequest either to process the request or to pass it the to next handler 


    2- Command Pattern: 
                      - we have 2 classes, Room and Bathroom with command field
                      - we have another class Command which has light field 
                      - we have another class Light has lightStatus 
                      - the Command class owns the light class 
                      - if we need to turn the light on in the room or the bathroom 
                      - we ask the setter to call the command setter to set the light on in the light object 

                      --> the command class is a commander own the light and manipulate its fields 
                         and the rooms has no light directly 

            example of the code : 
                                "https://replit.com/@hillal20/Behavioral-Desing-pattern-Commander#src/main/java/Command.java"

    3- State pattern:
                    - any object (ex phone, car ...) alter its behavior when its internal state changes 

                    example:

                       a - Phone class has a state (State class)  and setState(), the phone(is called context)  set an initial state in the constructor , let say PhoneOfState 

                       b - Phone class has 4 methods represent the behaviors : 

                                                                            - home() : phone go to home page 
                                                                            - turnOn() : phone turns on of off 
                                                                            - lock() :  phone lock the screen 
                                                                            - unlock() : phone unlock the screen
    


                       c - an abstracted State class owns the phone object, via contractor ,
                                       and let the subState classes  to implements 2
                                         call-backs methods onHomeButton() for home-button ,  onOfOrOnButton() for off-button
                                         corresponding to the phone-buttons responsible to changing the phone-state via clicks: 

                                                                                                           -  onHomeButton(): 
                                                                                                                              * change the phone-state to be one of other 2 since it is already set to one by default
                                                                                                                              * call the best  phone-method (behave) related the upcoming state 
                                                                                                                              * ex: if the current subStateClass is PhoneReadyState (the phone is at the home page),
                                                                                                                                      then the off-button is clicked 
                                                                                                                                      then  method onOfOrOnButton() is called,
                                                                                                                                     this means that we need to set the phone-state to next one, which is PhoneLockedState,
                                                                                                                                     and we need to call the best phone behavior corresponding to that state which is phone.lock()
                                                                                                                                     to turn the screen off 

                                                                                                                              * we know from fact that any phone state follow this order :
                                                                                                                                                        PhoneOfState -> PhoneLockedState -> PhoneReadyState  - PhoneLockedState ...
                                                                                                                              * we know from fact that any phone behave :
                                                                                                                                            phone.turnOn -> Phone.unlock() -> phone.home() -> phone.lock() -> ...
                                                                                                                             
                                                                                                                
                                                                                                           -  onOfOrOnButton(): 
                                                                                                                                * change the phone state on of the other 2 since it is already set to one by default
                                                                                                                                * call the best  phone method (behave ) 
                                                                                                                               
                       
                        d - three subStates: 
                                      - PhoneOffState :  phone is off 
                                      - PhoneReadyState: phone is at home page 
                                      - PhoneLockedState : phone at locked screen

                        
                        f - link for code  https://replit.com/@hillal20/Design-Pattern-State-pattern#src/main/java/Main.java



    4- Observer pattern 
                      -  if an event happened in a store( new arrivals)

                      -  store(object) calls  the publisher  

                      -  the publisher (object) calls the subscribers/listeners  (objects), the  publisher has a List<Listener>
                     
                      - Listener is an interface , because we could have different type of listeners : email , text ...

                      -  then  every listener calls  the client (object)
            

                      - link for code https://replit.com/@hillal20/Java-Design-Pattern-Observer-Pattern#src/main/java/EmailListener.java




## Architectural  patterns:

         ex: 
             Saga 