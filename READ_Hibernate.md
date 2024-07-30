## Hibernate is an implementation to JPA 
      - jpa provides interfaces and hibernate provide the class and implementations 


## things needed from hibernate to plug it to spring boot 
     - hibernate-core
     - hibernate-entitymanager
     - mysql-connector-java 
     - spring-boot-starter-data-jpa

## why we use hibernate over JDBC 

           - hides jdbc  boiler-plate code 
           - HQL (hibernate query language) which is more Object-oriented 
           - transaction management 
           - JDBCException of HibernateException 
           - support cache
    
## ORM ( object-relational mapping)

    - link java object POJO to database table 


## How Hibernate connect java objects to database tables 

             - via  JPA annotation 



             - via  XML configuration 


## Hibernate interfaces :

     - SessionFactory: 
                    - gives session object 
                    - every session object is for unique DB : MYSQl or Postgres or Oracle ...

     - Session: 
              - gives transaction object 
              - connecting application with persistence store (database)
              - get physical connection with db 
              - provides CRUD methods operations


        ex 
        ```    SessionFactory sessionFactory = metadata.getSessionFactoryBuilder().build()
               Session session = sessionFactory.openSession();
               Transaction tx = session.beginTransaction();

        
                MyEntity entity = new MyEntity();
                session.save(entity);

                tx.commit();
                sessionFactory.close();
                session.close();
        ```



     - Transaction : this the smallest unit of work 


##  hibernate cache 
          - faster performance 
          - reduce the number of db queries 


           first level                               |             second level

        - Session object  only, cant not be                 - SessionFactory level and shared between sessions 
           share between sessions 

        - enabled by default                                - disabled by default 
      
        - can not be disabled                               - can be enabled 

        - closed one the session is closed                  - closed when the app is restarted 
                                                            
                                                            - EHCache is the best implantation of hibernate second level cache 

                                                            - to add EHCache to your project :
                                                                                     - add dependency : hibernate-ehcache
                                                                                     - create your-cache.xml file 
                                                                                     - add some line of codes to the hibernate xml config file 
                                                                                      ```
                                                                                      <!-- Enable second-level cache -->
                                                                <property name="hibernate.cache.use_second_level_cache">true</property>
                                                                <property name="hibernate.cache.region.factory_class">org.hibernate.cache.jcache.JCacheRegionFactory</property>
                                                                <property name="hibernate.javax.cache.provider">org.ehcache.jsr107.EhcacheCachingProvider</property>
                                                                <property name="hibernate.cache.provider_configuration_file_resource_path">ehcache.xml</property>
                                                                                      ```


                                                                                     - add the url of your-cache.xml file to hibernate xml file 
                                                                                     - add the needed code to your-cache.xml 
                                                                                     - usually the best place to store teh cache data is java is "java.io.tmpdir/ehcache"
### cache annotation 
            ```
            @Entity
            @Cacheable
            @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
            public class Student {

                @Id
                @GeneratedValue(strategy = GenerationType.IDENTITY)
                private Long id;
                private String name;
                //getters and setters
            }
            ```

  ##  some Hibernate annotation 
         - @Entity : for class of the db table 

         - @Table : it has to be used with Entity to name the table 

         - @Access :  
                - it is for the class 
                - give the access type : 
                            - it has to be   AccessType.PROPERTY or AccessType.FIELD 
                            - the default one is  AccessType.FIELD 
                            - AccessType.FIELD :
                                   - access the entity’s data directly through its fields
                                    ex: 
                                        ```
                                        @Entity
                                        @Access(AccessType.FIELD)  // Access data directly through fields
                                        public class MyEntity {

                                            @Id
                                            private Long id;  // Field-level annotation

                                            private String name;  // Field-level annotation
                                        }
                                        ```
                            - AccessType.PROPERTY : 
                                    - access the entity’s data through getter and setter methods.
                                    - needed when the data need to be played with

                                     ex: 
                                        ```
                                        @Entity
                                        @Access(AccessType.PROPERTY)  // Access data through getters/setters
                                        public class MyEntity {

                                            private Long id;  // Field itself is private, no annotation here

                                            @Id
                                            public Long getId() {  // Getter with annotation
                                                return id;
                                            }

                                            public void setId(Long id) {  // Setter with annotation
                                                this.id = id;
                                            }

                                            private String name;  // Field itself is private

                                            public String getName() {  // Getter with annotation
                                                return name;
                                            }

                                            public void setName(String name) {  // Setter with annotation
                                                this.name = name;
                                            }
                                        }
                                        ```
        - @PrimaryKeyJoinColumn : it for class, to define the field for the foreign key ,
                                 - map the primary-keys of the subclass-tables to the primary-key of the parent table.
                                ex: 
                                 ```
                                    @Entity
                                    @Inheritance(strategy = InheritanceType.JOINED)
                                    public class Person {

                                        @Id
                                        @GeneratedValue(strategy = GenerationType.IDENTITY)
                                        private Long id;
                                        private String name;

                                        // Getters and setters
                                    }



                                    @Entity
                                    @PrimaryKeyJoinColumn(name = "student_id")
                                    public class Student extends Person {

                                        private String course;

                                        // Getters and setters
                                    }




                                    @Entity
                                    @PrimaryKeyJoinColumn(name = "employee_id")
                                    public class Employee extends Person {

                                        private String department;

                                        // Getters and setters
                                    }

                                    *** in this example hibernate will take the primary key of Person (Person.id) , and will create 
                                     a field in Student  table called "student_id" (Primary Key, Foreign Key referencing Person.id) , 
                                     and create the same thing for Employee table  employee_id (Primary Key, Foreign Key referencing Person.id)  
                                 ```
                       

         - @Id : generate the primary key 

         - @EmbeddedId: generate composite primary key ( more then one field is contributing to the primary key)

         - @Column : define the column name in the table 

         -  @GeneratedValue :  define strategy of the primary key generation : AUTO, IDENTITY, SEQUENCE

         - @Cascade : cascading actions between bean entities 

         - @Transient: to skip this field while sending or  fetching the data from or to the db table 

###  @OneToOne : define one to one mapping between to classes (beans)
                     
                     ex : 
                     ```
                        @Entity
                        public class UserProfile {

                            @Id
                            @GeneratedValue(strategy = GenerationType.IDENTITY)
                            @JoinColumn(name = "profile_id", referencedColumnName = "id")
                            private Long id; // this field will be named profile_id in the table 

                            private String address;
                            private String phoneNumber;

                            @OneToOne
                            @MapsId
                            private User user;  // this field wont be appearing in the table , it is mentioned for mapping only

                            // Getters and setters
                        }

                        @Entity
                        public class User {

                            @Id
                            @GeneratedValue(strategy = GenerationType.IDENTITY)
                            private Long id;

                            private String username;

                            @OneToOne(cascade = CascadeType.ALL, mappedBy = "user")
                            private UserProfile userProfile; // this field wont be appearing in the table ,it is mentioned for mapping only 

                        
                            // Getters and setters
                        }

                        Ex: SQL 
                         
                            CREATE TABLE User (
                                    id BIGINT AUTO_INCREMENT PRIMARY KEY,
                                    username VARCHAR(255) NOT NULL
                           );
                           
                           INSERT INTO User (username) VALUES ('john_doe');
                           INSERT INTO User (username) VALUES ('jane_smith');

                            CREATE TABLE UserProfile (
                                profile_id BIGINT PRIMARY KEY,
                                address VARCHAR(255),
                                phoneNumber VARCHAR(255),
                                FOREIGN KEY (profile_id) REFERENCES User(id)
                            );

                           INSERT INTO UserProfile (profile_id, address, phoneNumber) VALUES (1, '123 Main St', '555-1234');
                           INSERT INTO UserProfile (profile_id, address, phoneNumber) VALUES (2, '456 Elm St', '555-5678');

                         * user.id will always be the same like profile_id , 
                            because the UserProfile schema  is saying that:
                                                                        * profile_id is primary key for UserProfile table 
                                                                        * profile_id is a foreign key for the User table, so the primary key of User Table 
                                                                         is the same as profile_id in the UserProfile table 
                     ```

        


###  @ManyToOne map the class to  a list of objects of another class 
                       ex: 
                          ```
                            @Entity
                            public class Author {

                                @Id
                                @GeneratedValue(strategy = GenerationType.IDENTITY)
                                private Long id;

                                private String name;

                                @OneToMany(mappedBy = "author")
                                private Set<Post> posts;

                                // Getters and setters
                            }

                            @Entity
                            public class Post {

                                @Id
                                @GeneratedValue(strategy = GenerationType.IDENTITY)
                                private Long id;

                                private String title;
                                private String content;

                                @ManyToOne
                                @JoinColumn(name = "author_id")
                                private Author author;

                                // Getters and setters
                            }
                           
                            CREATE TABLE Author (
                                id BIGINT AUTO_INCREMENT PRIMARY KEY,
                                name VARCHAR(255) NOT NULL
                            );

                            CREATE TABLE Post (
                                id BIGINT AUTO_INCREMENT PRIMARY KEY,
                                title VARCHAR(255) NOT NULL,
                                content TEXT,
                                author_id BIGINT,
                                FOREIGN KEY (author_id) REFERENCES Author(id)
                            );

                            * the foreign key in one table is the primary in other table 
                          ```




### @ManyToMany mapping in hibernate 
                    ```
                    @Entity
                    public class Student {

                        @Id
                        @GeneratedValue(strategy = GenerationType.IDENTITY)
                        private Long id;

                        private String name;

                        @ManyToMany
                        @JoinTable(
                            name = "student_course",
                            joinColumns = @JoinColumn(name = "student_id"),
                            inverseJoinColumns = @JoinColumn(name = "course_id")
                        )
                        private Set<Course> courses = new HashSet<>();

                        // Constructors, getters, and setters
                    }


                    @Entity
                    public class Course {

                        @Id
                        @GeneratedValue(strategy = GenerationType.IDENTITY)
                        private Long id;

                        private String name;

                        @ManyToMany(mappedBy = "courses")
                        private Set<Student> students = new HashSet<>();

                        // Constructors, getters, and setters
                    }


                    
                    CREATE TABLE Student (
                        id BIGINT AUTO_INCREMENT PRIMARY KEY,
                        name VARCHAR(255) NOT NULL
                    );

                  
                    CREATE TABLE Course (
                        id BIGINT AUTO_INCREMENT PRIMARY KEY,
                        name VARCHAR(255) NOT NULL
                    );

                    
                    CREATE TABLE Student_Course (
                        student_id BIGINT NOT NULL,
                        course_id BIGINT NOT NULL,
                        PRIMARY KEY (student_id, course_id),
                        FOREIGN KEY (student_id) REFERENCES Student(id),
                        FOREIGN KEY (course_id) REFERENCES Course(id)
                    );
                    ```



### Native query in hibernate 

     var my_name = "hilal"

      Query q =  session.createSQLQuery("select * from table_A where table_A = :name")
               .addEntity(Employee.class)
               .setParameter("name", my_name)

      List result =  q.list()



### Hibernate configuration file 
     - the file name is "hibernate.cfg.xml"in the recourses folder 
     - get the db connection : password , user, Driver ...

###  Hibernate mapping file

    - "className.hbm.xml"   
                      - must have html elements: 
                                              <hibernate-mapping>
                                                  <class ="className" table="tableName">
                                                       <id name="id">
                                                        <generator class="assigned">
                                                       </id>
                                                       <property name="name"> </property>

     

### steps to configure hibernate in java projects 

          1- create a java class (persistent POJO ) , most likely it is used only by hibernate to create the table 
          2- create mapping file 
          3- create configuration file for db connection and getting the session 
          4- create class for storing or retrieve data ( to avoid using the one used hibernate to create the table )
          5- run the app and see the result 


 ### get()   vs load()
            
            get                                       |                               load
        - load the data as soon as it called                                   - return  a proxy object 
                                                                               - load data only when it is required 
                                                                               - load is better,  it support lazy loading 
                                                                               - it used if the data exist only 
                                                                               - throw exception when there is not data in db 
        - it support eager loading                                                                       
        - it is used if we make sure the data 
          exists 

### lazy loading vs eager loading 
     - are 2 strategies used when ManyToMany and OnToMany mapping 

     - Lazy Loading:
                     - Defers the loading of related entities until they are accessed,
                        which can save resources and improve performance if the related entities are not always needed.
                     - this helps in case of embedded  classes (entities)

     - Eager Loading:
                  -  Loads related entities immediately with the parent entity, 
                     which can be useful when you know you will need the related data and want to avoid additional queries.
                   - this is not good in case of embedded entities 

                ex: 
                   ```
                    @ManyToOne(fetch = FetchType.LAZY)
                    private Department department;

                    @OneToMany(mappedBy = "student", fetch = FetchType.EAGER)
                    private Set<Course> courses;
                   ```

###  Data Access Object (DAO)


### showing logs for each sql query of hibernate 
      - add this line to application.properties :
                                                spring.jpa.show-sql=true


### session Factory
       - every single session factory is for db only : mysql sessionFactory, oracle sessionFactory ...

### session :
        - it is generated by sessionFactory 
        - it contains : 
                 transaction , persistence_context ( owned by the first level cache of hibernate)
    


### Entity lifecycle 
             - new state : once the object need to be save is created 
             - managed state : once the persistence_context of the session store the  already-saved-object-in-the-db for future fast access 
             

                           