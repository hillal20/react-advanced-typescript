### Python is interpreted language 
  - execute code line by line, if an error it exits 
  - data type error are check during the execution on the fly 
  - no compiles needed 
  - easy to debug 


### built-in data types 
  - String and Texts :
                      str 
  - Numeric :
             int, float , complex numbers
  - Sequence : 
             list , tuple , range 
  - Map (key-value pairs data structure) :
        dictionary
  - Set : 
        set , forzenset
  - Boolean : 
             bool
  - Binary :
            bytes, bytearray, memoryview
  - None : 
         NoneType 
            
            ======> to see the type of the data use : type(str) or type(arr)

#### Sets 
    - sets :
           my_set = { "2", 3 , "hello world , true}
           - unordered , no indexes 
           - no duplicate values 
           
### Tuples and Lists 
                           list                 |           Tuple
                        
                        - mutable                         - immutable 
                        - use [ ]                         - use () 
                        - more memory                     - less memory and faster 


### Arrays 
     - arrays are not build in python out the box 
     - we could import  NumPy package or array module
           ex:
            ```
              import array as my_arr

              arr = my_arr.array('i', [1,2,3,4])  // i means integer 
                




### Module and Package 

                           Module                 |         Package 
                    
                        - file with .py                   - is a collection of modules (Folder)
                        - could be imported               - it has extra module called _init_.py
                        - import  file.py                 - __init__.py is the one who tells Python this folder is a package 
### iterable 
           - any object is called iterable if it has the ability of to return one of its elements at a time. 
           - it it traversable object, we could traverse all its element via for loops 
           - this mean a loop could iterate over the object and access any element in the object 
    
### indexing 
           - positive indexing : 0,1,2,3 ....
           - negative indexing : ...-3,-2,-1

### Logical operators 
           - and , or , not 

### lambda expression:
            - not-named function 
            - it has only one line of code 

## Slice in python 
            - my_list = [ 1,3 , "hello word", True , 9 , "OH"]
            - sliced_list = my_list[1,4]
              sliced_list ====> [ 3, "hello world", True]
            - my_list[:] = [1,3 , "hello word", True , 9 , "OH"]
            

#### mutable and immutable objects in python 
            - strings are immutable in python

### Pass key world 

            - it is does nothing 
            - it place holder 

### Generators 

          - produce one element at a time as needed
          - it use yield to give value 
          - example : 

             ```
                def nElement(n):
                    num = 0
                    while num < n:
                        yield num
                        num += 1
                        

                 /// the generator function always gives a list if it is called 
                for x in nElement(10):
                    print("x => ", x)
             ```


## shallow copy and deep copy 
     - shallow :
       let say ob1 = {'name': 'hill', 'age': 39}
       obj2 = obj1  ===================> this will shares only the difference of the obj1

     - deep : 
         ```
            <!-- import copy

            obj1 = { "name" : "hilal" , "age" : "20" }
            obj2 = copy.deepcopy(obj1)
            obj3 = obj1

            obj1["name"] = "ali"
            obj2["name"] = "ahmed"
            obj3["name"] = "kheld"

            print("obj1 => ", obj1)
            print("obj2 => ", obj2)
            print("obj3 => ", obj3)

            obj3 and obj1 are always the same  -->
        ```

### Inheritance 
      - single 
            * inherit everything from ONE  single parent class 
      - multiple 
                ```
                    class Parent1:
                        def __init__(self):
                            self.name = "Parent1"
                        
                        def method1(self):
                            print(f"Method1 from {self.name}")

                 
                    class Parent2:
                        def __init__(self):
                            self.name = "Parent2"
                        
                        def method2(self):
                            print(f"Method2 from {self.name}")

                
                    class Child(Parent1, Parent2):
                        def __init__(self):
                            Parent1.__init__(self)
                            Parent2.__init__(self)
                            self.name = "Child"
                        
                        def method3(self):
                            print(f"Method3 from {self.name}")

               
                    child_instance = Child()

            
                    child_instance.method1()  # This will call method1 from Parent1
                    child_instance.method2()  # This will call method2 from Parent2
                    child_instance.method3()  # This will call method3 from Child
                ```     


### exception handling
       it uses : try , except , else , finally 

        ```
            def divide(a, b):
                try:
                    result = a / b

                except ZeroDivisionError as e:
                    print(f"Error: {e}")
                    return None


                except TypeError as e:
                    print(f"Error: {e}")
                    return None


                else:
                    print("Division successful!", result)
                    return result


                finally:
                    print("Execution completed.")

   
    
                print(divide(10, 2))  # Should print the result of 10 / 2
                print(divide(10, 0))  # Should handle the ZeroDivisionError
                print(divide(10, "a"))  # Should handle the TypeError
        ```

### Decorators 
       - special function that  add extra functionality:
                * it takes a function as a param 
                * the param function is nothing but the original function that we need to invoke 
                * it has a wrapper function inside and it return it 
                * inside that wrapper function , we invoke the param function 
       - if start with @ annotation like in java , it placed above the original function 
       ex: 
       ```
            def my_decorator(func):

                def wrapper():
                    print("beginning of decorating")
                    func()  # Call the original function say_hello
                    print("end of decorating")

                return wrapper



            @my_decorator
            def say_hello():
                print("Hello! word ")


            # Calling the decorated function (original function)
            say_hello()
        ```
### Default assignment in a function in python
       - the default element  inside  a function will be accessed in all the function calls
       - all the default element will be in : 
                                            ex: my_function.__defaults__
       ```
        def func(x, arr=[]):
                arr.append(x)
                return arr


        listOne = func(56)
        print(listOne) // this will print [56]

        listTwo = func(78)
        print(listTwo) // this will print [56, 78]
        ```

### range in a for loop 
         for i in range(2,8)
             print(1)   // 2 will be included but  8 will not be included 