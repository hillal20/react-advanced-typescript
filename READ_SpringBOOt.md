## 1 ** spring boot 

* framework for RAD (rapid application development)  
* support auto-configuration 
* has web server by default (tomcat or jetty)
* this is server is called embedded servlet container as well 
* this container allows hot reload for developers 

## 2 ** changing the port of the server 8080
in 
application.properties file :    server.port=9090

## ingress 
it is for routing and load  balancing 

## embedded servlet container 
    - is known as tomcat or jetty 
    -  it is not helpful in this scenarios :
                                   - high traffic 
                                   - complex  deployment 
                                   - heavy weight applications
                                   - integration with legacy system
                                   - specialized protocols (networking)


## externalization the configuration properties for springBoot
    -  we use : application.properties (or yml file) in :  src/main/resources 
                - let say we have this property : 
                                                my.custom.property=SETTARA

                - we use annotation to inject the data inside the java code ( Spring bean) :
                                                                                                @Value({$my.custom.property })
                                                                                                String myCustomProperty           
        
    - we could ENV variables :
                      - in itellij 
                         it the headers/Tabs click :
                                                    run -> edit configurations 
                                                                             -> click on the name of application ->
                                                                                                                   -  in the right side choose Environment variables 
                                                                                                                   - or click on Modify options then add them VM options as well 
                                                                                                                      but wth -D at the begging 
                                                                                                                             ex: -Dserver.port=9090 
    - in the terminal 
                    ex : java -jar my.application.jar  --server.port=8080 --my.custom.argument=SETTARA
    

    - via a config file "config.properties" :
                    ex :
                            java -jar my.application.jar  --spring.config.location=/path/to/config.properties
                                                                                            
                                                            

                                                    
                                 
               


### JDBC (Java Database Connectivity)
    - API  provides classes/interfaces for connecting to databases and executing SQL queries.
    - Developers need to manually handle all aspects of database interactions:
                                                                   - opening connections
                                                                   -  preparing statements,
                                                                   -  executing queries,
                                                                   -  closing resources.
    - No additional overhead from an ORM framework.

### JPA (Java Persistence API)
     - API provides a higher-level ORM approach to database interactions.
     - Annotation-based
     - Vendor-neutral 
     - it is only a specification , we HAVE  to use an ORM that implement the JPA  

### Hibernate
    - Its a JPA implementation 
    - ORM framework implements the JPA specification.
    - complex mappings, caching, and performance optimizations.


## Lazy Loading:
    loading resources on demand instead at once 


## terminal properties VS  application.yml VS application.properties 
      - 1 command line argument (terminal properties)
      - 2 environment variables 
      - 3 application.yaml 
      - 4 application.properties 

## spring boot automatically use the hibernate implementation of the JPA (Default)
    - via "spring-boot-starter-data-jpa" dependency 
  
## hot reloading (it is coming from development tools "spring-boot-devtools")

   - update the java classes
   - update the configuration files
   - sometimes the dependencies like libraries 
   - this involve : reloading, modifying and comping classes and reinitialize the application
   - in application.properties  add "spring.devtools.restart.enabled" to true
   - in  application.properties  add "spring.devtools.livereload.enabled" to true , this will refresh the browser 

   !!! important : if you need springBoot to watch external files to be hot_reloaded as well just add this 
      in application.properties add : "spring.boot.restart.additional-paths=ABSOLUTE_PATH_TO_THAT_FILE

## enabling hot reload in itellij 
   - settings -> compiler -> check the box "build project automatically"

##  3 ** the springBoot boiler code 

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication 
public class MyApplication{

    public void static main(String[] args){

       SpringApplication.run(MyApplication.class, args);

    }

}

## 4 ** Controllers 
@Controller 
@RequestMapping("/user")
public class {

 @Autowired 
 User userService 


 @PostMapping("/save")
 public User saveUser(@RequestBody User user){}

 @GetMapping(value = "/all")
 public List<User> getAllUsers(){}

 @GetMapping("/{id}")
 public Optional<User> getUserById(@PathVariable  String id){}



## 5 ** service 

import java.util.List;
import java.util.Optional;


@Component
public class UserService {

    @Autowired
    UserRepo userRepo;

   public User saveUser(User user){
       return  userRepo.save(user);

    }

   public List<User> findUsers(){
       return  userRepo.findAll();
    }


    public Optional<User> findUser(int id ){
       return  userRepo.findById(id);

    }

}




## 6 ** models 
import javax.persistence.Entity;
import javax.persistence.Id;



@Entity
public class User {
    @Id
    int id;
    String name;
    String job;

    public User(int id, String name, String job) {
        this.id = id;
        this.name = name;
        this.job = job;
    }

    public User() {}

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getJob() {
        return job;
    }

    public void setJob(String job) {
        this.job = job;
    }


## 7 ** Repository 

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

// Integer is the type of User.id with the annotation @Id 
public interface UserRepo extends JpaRepository<User, Integer> {

}


## 8 **  Resources Folder 
application.properties :

   server.port=8085

   spring.datasource.url=jdbc:mysql://localhost:3306/spring_db?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC

   spring.datasource.username=aissani
   spring.datasource.password=aissani
   spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver



   ##  Java annotations 

      to  build costumed annotation  we need to use @interface as a type for the class instead of class keyword 
       ```
            import java.lang.annotation.ElementType;
            import java.lang.annotation.Retention;
            import java.lang.annotation.RetentionPolicy;
            import java.lang.annotation.Target;

            // Step 2: Specify Retention Policy
            @Retention(RetentionPolicy.RUNTIME) // 99% will be 

            // Step 3: Specify Target
            @Target(ElementType.METHOD) // METHOD for methods of the class , TYPE for class, FIELD for fields of the class 

            // Step 1: Define the Annotation
            public @interface MyCustomAnnotation {

                String value() default "Default Value";     this will be used like @MyCustomAnnotation(value="hello", number=10) in the top of the method annotated 
                int number() default 0;

                }
       ```
  
  
## Difference between @Bean and @Component 
                                         @Bean                                        |                 @Component
             - has to be over a method in a Class annotated with @Configuration                 - it has to be used in the top of class 
    
             - Not created automatically   by  spring boot                                      - it is automatically created 

##  Inversion of Control (IoC) and Dependency Injection (DI)

        - (IoC) is a principle in programming control/manage  creation of objects management  transferred from the application code to a  container or framework
        - Spring IoC container manages the lifecycle and configuration  objects.
        - Dependency Injection (DI) is a design pattern used to implement IoC. I

### In Spring Boot @Transactional

    - if the data need to be saved in the db , this annotation make sure that execution of the code 
        has no errors before saving in in the db 

        ```   
              @Transactional
              void saveUser(employee){
            
                   var result =  employeeRepo.save(employee);
                   if(!result.ok){
                    new Exception()
                   }
                    metaDataRepo.save(employee.id, employeee.age)
              }
        ```

        @Transactional will prevent metaDataRepo from saving if there is an error , it make sure that there is no error and if the employee fail 
           the metaDataRepo wont save as well



###  Features of Spring

         1- Ioc (inversion of control) 
            - Ioc Container manages objects/beans 
            - promote loose coupling 
            - the code is more modular an maintainable

         2- Dependency Injection DI
            - it is an implementation of Ioc 
            - inject dependencies into components directly 
            - easy to test the components and mock data 

         3- Aspect Oriented Programming (AOP)
            - isolate cross-cutting concerns ( logging, security , transaction management... )
            - APO integrate seamlessly with core spring 

         4- Data access
            - support dbs via JDBC and ORM modules 
            - offers integration with popular ORMs like hibernate 
         
         5- Transaction management 
            - provide declarative transaction management with no low-level code ex: @Transaction 
        
         6- Spring Security 
            - provide authentication and authorization and protection 
        
         7- Spring Data 
            - provide integration with with DataBase 
            - provide API for data sources : MongoDb , SQL ...
         
         8-Spring integration 
            - integrate  with systems/applications via messaging , event-driven architectures and other integration-patters
         
         9- Spring Cloud 
            - provides  tools for building distributed systems  and microservices : service discovery , configuration management , circuit breakers ...


         10 - Testing 
             - offers support for testing : Spring Test framework 
        
         11- Internationalization and localization 
            -  provide support for multiple languages and regions 

         
      


    
