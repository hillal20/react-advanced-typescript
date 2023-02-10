## 1 ** spring boot 

* framework for RAD (rapid application development)  
* support auto-configuration 
* has web server by default (tomcat or jetty)

## 2 ** changing the port of the server 8080
in 
application.properties file :    server.port=9090


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
  