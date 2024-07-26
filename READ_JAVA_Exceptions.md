

### Hierarchy of Exceptions and Errors 


1- java.lang.Throwable
                 - he base class for all errors and exceptions.


                  - subclass:

                        *  java.lang.Exception
                                - Represents conditions that a program should catch.


                                        * Checked Exceptions:

                                            -1  java.lang.RuntimeException:
                                                                            - Represents exceptions that occur during runtime and are unchecked.

                                                                            - Common Subclasses:
                                                                                                java.lang.NullPointerException
                                                                                                java.lang.ArrayIndexOutOfBoundsException
                                                                                                java.lang.IllegalArgumentException
                                                                                                java.lang.ArithmeticException
                                                                                                java.lang.ClassCastException


                                        * Other Checked Exceptions:

                                                - java.io.IOException:
                                                                    - Signals that an I/O exception of some sort has occurred.
                                                                    - Subclasses:
                                                                                java.io.FileNotFoundException
                                                                                java.io.EOFException
                                                                                java.io.IOException
                                                    - java.sql.SQLException:
                                                                        -Provides information on a database access error or other errors.

                                                                        -Subclasses:
                                                                                java.sql.SQLSyntaxErrorException
                                                                                java.sql.SQLDataException
                                                                                java.sql.SQLTimeoutException



                                                    - java.lang.ClassNotFoundException:
                                                                                    Thrown when an application tries to load a class through its string name and the class cannot be found.
                                                                                    
                                                    - java.lang.NoSuchMethodException :
                                                                                    Thrown when a particular method cannot be found.


                                                    -  java.lang.InstantiationException: 
                                                                                    Thrown when an application tries to create an instance of an abstract class or an interface.
