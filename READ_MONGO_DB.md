
### 1 -  What is MongoDB ?
       - open-source NoSQL database written in C++ language.
       - JSON-like documents
       - optional schemas.
       - scalability/cross-platform/document-oriented
       - features : 
                  - secondary indexes
                  - range queries: $gt, $gte, $lt, $lte
                  - sorting,
                  - aggregations,
                  - geospatial indexes.
                  - File storage: It supports an easy-to-use protocol for storing large files and file metadata.
                  - Sharding: Sharding is the process of splitting data up across machines.
                  - TTL(time-to-live ) collections : should expire at a certain time


                 
       - MongoDB is developed by MongoDB Inc. 
       - licensed under the Server Side Public License (SSPL)

### 2 -  MongoDB?
        
        -  document-oriented-data-model.
        -  stores in flexible, JSON-like documents (BSON format)
        -  dynamic schema design (schema-less): 
                                - adapt the schema based requirements
                                - 0 downtime while adapting changes 

### 3 - advantages of MongoDB?

        - queries based on  field, range-based, string pattern matching
        - primary and secondary index on any fields
        - uses JavaScript objects in place of procedures : db.collection.find({ status: "active" })
        - dynamic database schema
        - easy to scale up or down
        - inbuilt support for data partitioning (Sharding).

### advantages of  MongoDB?

        - high performance,
        - high availability,
        - easy scalability,
        - flexible schema,
        - rich query language.


### NoSQL db

        -  non-relational
        -  large-data storage  efficiently.
        -  massive-parallel-data-processing across servers MPP.

### What is BSON (Binary JSON)
        - a way of organizing/packing-up data so can find it quickly.
        - binary representation of JSON-like documents.
        - extends the JSON-model to provide additional data types 
        - efficient for encoding/decoding within different languages.


### collections in MongoDB?

        - group of documents,
        - each document can have a different structure

###  document in MongoDB?

        - record in a collection
        - basic unit of data. 
        - stored in BSON format (similar to JSON objects.)


### How do you start MongoDB?

            - by running the mongod command, which starts the MongoDB server.
        
### replica set in MongoDB?

            - group of MongoDB servers that maintain the same data set,
            - providing redundancy and high availability.

### What is sharding in MongoDB?

            - distributing/dividing  data across multiple machines. 
            - support deployments with large data sets
            - high throughput operations (processing a lot of data very quickly)


 ###  MongoDB handle transactions?

            - via ACID transactions 
            - single ACID transaction with multiple operations on multiple documents


### ACID transaction (Atomicity, Consistency, Isolation, and Durability.)
            - properties for reliable processing of  transaction: 
                 * Atomicity : transaction has to complete entirely or not at all.
                 * Consistency : transaction updates the state successfully  without changing db rules.
                 * Isolation : every transaction is performed independently of one another.
                 * Durability : if transaction is committed, it persists even the system fails

###  indexes in MongoDB?

    - improve the search so database  quickly locate documents.

### create an index in MongoDB?

 - via createIndex method 
        ex: 
        ```
          db.collection.createIndex({ "field_name": 1 })
        ```
### aggregation in MongoDB?
    - it is an operation that will take an array of objects 
    - each object take on the  operations like grouping, filtering, and sorting ...

     ex: 
      ``` 
            db.orders.insertMany( [
                                    { _id: 1, cust_id: "abc", ord_date: ISODate("2012-11-02T17:04:11.102Z"), status: "A", amount: 50 },
                                    { _id: 2, cust_id: "xyz", ord_date: ISODate("2013-10-01T17:04:11.102Z"), status: "A", amount: 100 },
                                    { _id: 3, cust_id: "fjh", ord_date: ISODate("2013-10-12T17:04:11.102Z"), status: "D", amount: 25 },
                                    { _id: 5, cust_id: "abc", ord_date: ISODate("2013-11-12T17:04:11.102Z"), status: "A", amount: 25 }
                              ] )
                              


          db.orders.aggregate( [
                                    { $match: { status: "A" } }, 
                                    { $group: { _id: "$cust_id", total: { $sum: "$amount" } } }, // this will group the same ids and sum the amount 
                                    { $sort: { total: -1 } }
                              ] )

         the result will be : 
                                [
                                    { _id: "xyz", total: 100 },
                                    { _id: "abc", total: 75 }
                                ]
      ```



###  $match stage in aggregation.
                - filters the documents to pass only those that match the specified condition(s) to the next pipeline stage.

###  $group stage in aggregation?

                - groups input documents by a specified identifier expression and applies the accumulator expressions to each group.
                ex
                  ```
                       { $group: { _id: "$cust_id", total: { $sum: "$amount" } } }, // this will group the same ids and sum the amount 
                  ```
### query optimizer?
          -  smart librarian who knows the library (your database) 
          -  figure out the best/fastest way to find data 

          -  determines the most efficient way (query-plan) to execute query based on :
                                                                                      -  indexes
                                                                                      -  statistics
          -  .explain('executionStats'):  is the method to see the detail of the  query-plan  

          -  .getIndexes(): check the indexes on your collection

          ex:
          ```
          db.collection.find({ field: value }).explain("executionStats")
          ```

### MongoDB logs
        - contain information about query performance/plans used
        - /var/log/mongodb/mongod.log


### capped collection in MongoDB?

- fixed-size collection that maintains 
                                 - insertion order 
                                 - automatically overwrites the oldest documents when the fixed size is reached.



##  update a document in MongoDB?

                -  updateOne or updateMany methods
                -  specifying a filter and an update operation.
                        ```
                        ex :
                                db.orders.updateOne({ _id: 1 }, { $set: { name: "New Name" } }).
                                db.employees.updateMany(
                                                          { "department": "Sales" },   
                                                          { $set: { "status": "Inactive" } } 
                                );
                        ```

### $set operator in MongoDB?

                        - used to update the value of a field in a document.

### replaceOne in mongo
           ex: 
           db.users.replaceOne(
                                   { "_id": 1 },               // Filter: Find the document with _id equal to 1
                                   {                           // Replacement document
                                        "_id": 1,
                                        "name": "Alice",
                                        "status": "Inactive",
                                        "email": "alice@example.com"
                                  }
                                );


### different types of indexes in MongoDB?

                                        -  single field,
                                        -  compound:
                                                  ex: db.books.createIndex({ "author": 1, "year": -1 });
                                                     - "author": 1: Sorts books by author in ascending alphabetical order (A to Z).
                                                     - "year": -1: Within each author, sorts books by year in descending order (most recent first).
                                        -  multi-key:
                                                    -  Indexes fields that contain arrays.
                                                    ex: 
                                                        [
                                                                { "_id": 1, "title": "The Great Gatsby", "tags": ["classic", "fiction"] },
                                                                { "_id": 2, "title": "Moby Dick", "tags": ["classic", "adventure"] },
                                                                { "_id": 3, "title": "1984", "tags": ["dystopian", "fiction"] }
                                                        ]

                                                        db.books.createIndex({ "tags": 1 });
                                                        
                                                        db.books.find({ "tags": "fiction" });

  


                                        -  text: 
                                                - perform text searches within string content of documents
                                                
                                                ex: 
                                                [
                                                        { "_id": 1, "title": "The Rise of AI", "content": "Artificial Intelligence is transforming the world." },
                                                        { "_id": 2, "title": "The Future of Technology", "content": "Technology is evolving at a rapid pace." },
                                                        { "_id": 3, "title": "AI in Healthcare", "content": "Artificial Intelligence is making significant impacts in healthcare." }
                                                 ]
                                                
                                                db.articles.createIndex({ "content": "text" });

                                                db.articles.find({ $text: { $search: "AI" } });

             
                                        -  hashed:
                                                 - a hash index is  used specifically for sharding.
                                                 ex:
                                                    sh.enableSharding("yourDatabase");

                                                    sh.shardCollection("yourDatabase.orders", { "order_id": "hashed" });

                                               => Hashing the shard-key ensures that documents are evenly distributed across shards, avoiding hotspots


                                        -  geospatial indexes.


### oplog in MongoDB (operations log)

-  special capped collection that keeps:  
                                     - a record of all operations  modifying the data in databases.
                                     -  It's used for replication.



### Replication  vs Sharding 
                    replication                                                   |                    sharding 

            - ensure high availability and data redundancy.                                 -   used to scale out and distribute large datasets across multiple servers
            

            - creating multiple copies (replicas) of the same data                          -    handle large amounts of data and high traffic
               across different servers

### replication 

              ex :
                  mongo --port 27017
               
               rs.initiate({
                                _id: "myReplicaSet",
                                members: [
                                                { _id: 0, host: "localhost:27017" },
                                                { _id: 1, host: "localhost:27018" },
                                                { _id: 2, host: "localhost:27019" }
                                         ]
                        });

                rs.status();
               
                use myDatabase;
                db.myCollection.insertOne({ name: "Alice", age: 30 });
   
                mongo --port 27018

                use myDatabase;
                db.myCollection.find();


### How does MongoDB ensure data durability?

-  via :
          - write concerns (writeConcern): level of acknowledgment for:   inserts, updates, deletes
                        ex: 
                                // ensure it is acknowledged by a majority of the replica set members
                                db.orders.insertOne({ order_id: 1, product: "Widget" }, { writeConcern: { w: "majority" } })

          - journaling: recording  the-write-operations in a special-log (journal) before  writing them  to the database.

                        ex: 
                                //  ensure it is written to the journal
                                db.collection.insertOne({ name: "Book3" }, { writeConcern: { w: 1, j: true } });


          - replication:
                          - copying data from one server (primary) to other servers (replicas). 
                          - This creates multiple copies of the data for redundancy.

                 ```
                 Unacknowledged (w: 0): No confirmation, no journaling or replication guarantees.

                 Acknowledged (w: 1): Basic confirmation from one server
                        
                 Journaled (j: true): Confirmation that the write has been written to the journal for durability.
                
                 Replica Acknowledged (w: "majority"): Confirmation from the majority of replica set members for high availability and fault tolerance.
                 ```  


### the use of write concerns in MongoDB (writeConcern).

                - specify the level of acknowledgment  for write-operations
                - allowing control over the durability of the data.

###  MongoDB Atlas?

          - cloud database service provided by MongoDB, Inc.,
          -  scalable and secure MongoDB deployment 


### benefits of using MongoDB Atlas?

          -  automated backups,
          -  scaling,
          -  monitoring,
          -  security,
          -  easy deployment across  cloud providers.

### How do you perform a bulk insert in MongoDB?

        - insertMany([{}])

        ex : 
           db.orders.insertMany([{ name: "John" }, { name: "Jane" }])

###  $lookup operator in aggregation?

        -  performs a left-outer-join to an unsharded collection in the same database
        -  filter in documents from the joined-collection


        ex: 
        
        ```
           // orders 
             [
                { "_id": 1, "item": "apple", "quantity": 5, "customerId": 1 },
                { "_id": 2, "item": "orange", "quantity": 10, "customerId": 2 },
                { "_id": 3, "item": "banana", "quantity": 15, "customerId": 1 }
             ]

            // customers
             [
                { "_id": 1, "name": "Alice", "address": "123 Apple St" },
                { "_id": 2, "name": "Bob", "address": "456 Orange Ave" },
                { "_id": 3, "name": "Charlie", "address": "789 Banana Blvd" }
             ]

          db.orders.aggregate([
                                {
                                        $lookup: {
                                                    from: "customers", // the collection to join
                                                    localField: "customerId", // the field from the orders collection
                                                    foreignField: "_id", // the field from the customers collection
                                                    as: "customer_info" // the name of the new array field to add the matching customer documents
                                               }
                                }
                           ])


          result ===> 
                     [
                                {
                                        "_id": 1,
                                        "item": "apple",
                                        "quantity": 5,
                                        "customerId": 1,
                                        "customer_info": [
                                                        { "_id": 1, "name": "Alice", "address": "123 Apple St" }
                                                        ]
                                },
                                {
                                        "_id": 2,
                                        "item": "orange",
                                        "quantity": 10,
                                        "customerId": 2,
                                        "customer_info": [
                                                        { "_id": 2, "name": "Bob", "address": "456 Orange Ave" }
                                                        ]
                                },
                                {
                                        "_id": 3,
                                        "item": "banana",
                                        "quantity": 15,
                                        "customerId": 1,
                                        "customer_info": [
                                                { "_id": 1, "name": "Alice", "address": "123 Apple St" }
                                                ]
                                }
                    ]
        ```

###  $unwind and $group in aggregation.

       -  $unwind stage deconstructs an array field from the input documents to output a document for each element,
       -  $group stage groups documents by a specified key and performs aggregations.
         
         ex :
          ``` let stay orders is an array:
                
                [
                        {
                                "_id": 1,
                                "customerName": "Alice",
                                "items": [
                                        { "product": "Widget", "quantity": 4 },
                                        { "product": "Gadget", "quantity": 2 }
                                ]
                        },
                        {
                                "_id": 2,
                                "customerName": "Bob",
                                "items": [
                                        { "product": "Thingamajig", "quantity": 1 }
                                        ]
                        }
                ]

                db.orders.aggregate([
                                      { $unwind: "$items" }
                                   ])
                ==> it will create new  copies of document but each element of the array 
          ```

###  MongoDB handle concurrency?

                        - multi-granularity locking levels: 
                                                        - database-level :  only one transaction can modify the database at a time, while others must wait
                                                        - collection-level : only one transaction can modify the collection at a time, while others must wait
                                                        - document-level locks: only one transaction can modify document at a time, while others must wait

                        -  WiredTiger Storage Engine:
                                                   - allowing multiple operations to be processed concurrently
                                                   - Document-level:
                                                                   - document-level locking
                                                                   - concurrency: writes to different documents can occur simultaneously without conflict

                        - optimistic-concurrency-control approach via $isolated: 
                                                                                multiple operations can usually complete without conflict.
                                                                              

                        - multi-document transactions are supported by  ensuring ACID           

### storage engine in MongoDB?

                - the component of the database responsible for managing how data is stored,
                -  both in memory and on disk
                ex : 
                        WiredTiger and In-Memory.

###  benefits of the WiredTiger storage engine?

                   - document-level concurrency control,
                   - data compression
                   - larger amounts of data in RAM.


### back up a MongoDB database?

                - using methods such as mongodump:
                                                 - create a binary-backup of db
                        ex: 
                        mongodump --uri="mongodb://localhost:27017/myDatabase" --out=/backups/myDatabaseBackup


                - file system snapshots,
                - MongoDB Atlas automated backups.


### challenges of sharding in MongoDB?

                -  effective shard key
                -  managing data distribution
                -  query performance,
                -  complexity of a distributed system: 
                                                      - Uneven distribution can lead 
                                                      - the bigger number of shards  the more complexity of queries grow
                                                      -  system failures lead to data loss 
                                                      - latency  slow down the communication between shards,
        
### shard key
          -  field  to determine how data is distributed across the shards
          -  Sharding is for horizontal scaling
          -  data  is partitioned across multiple machines (shards)
          -  handle large datasets
          -  high throughput.

### MongoDB Server (Standalone Instance):
                                        - a single instance of the MongoDB database running on a server
                                        - development, testing, or small-scale applications

### A MongoDB replica set

                -  group of servers maintains the same data (copies)
                -  work together to ensure data:
                                                - redundancy,
                                                - availability
                                                - reliability.

### The key features of a replica set are:

                                - Primary Server: 
                                                 - all write operations and reads, by default.
                                                 - the main server where all changes are made.

                                - Secondary Servers:
                                                   - replicate the data from the primary server.
                                                   -  They keep a copy of the primary server’s data (redundancy).
                                                   - If the primary server fails, one of the secondary servers can be promoted to primary.

                                - Oplog: 
                                         - primary server keeps a special log called the oplog (operation log) that records all the write operations.
                                         - Secondary servers use this log to replicate changes and stay up-to-date with the primary.
                                
                                - Automatic Failover (cure):
                                                            - If  primary fails,replica set automatically elects a new primary from the secondary servers.
                                                            -  database remains available even if one server goes down.

                                - Read Preferences:
                                                   - By default, reads go to the primary.
                                                   - You can configure how reads are distributed between the primary and secondary servers.
                                                   - you can configure the system to read from secondary servers to balance the load or reduce latency


###  change stream 

             -  allows applications to receive notifications about changes  in db.
             -  provide a way to react to these changes in real-time.
             -  Real-Time Data Access
             -  No Oplog Tailing Needed
             -  Reliable and Efficient
             -  Flexible Notifications
             -  Resume Capability: If connection is lost, you can resume from the last known position, which helps in maintaining continuity.
             

             ex: 
             ```
                       const MongoClient = require('mongodb').MongoClient;

                    
                        MongoClient.connect('mongodb://localhost:27017/mydb', (err, client) => {
                                if (err) throw err;

                                const db = client.db('mydb');
                                const collection = db.collection('mycollection');

                              
                                const changeStream = collection.watch();

                              
                                changeStream.on('change', (change) => {
                                       console.log('Change detected:', change);
                                });

                         
                                changeStream.on('error', (error) => {
                                     console.error('Error in change stream:', error);
                                });
                        });
               ```

###   handle schema design in MongoDB?

                - Understand Your Query Patterns: 
                                -  understanding how your application will query the data.
                                -  MongoDB is  flexible and support various schema designs
                                        

                - Denormalization: 
                                -  embedding related data in one document rather  separate tables.
                                -  no need for joins and improve read performance.

                - Embedded Documents and Arrays:
                                        - Embedded Documents:
                                                - related-data stored in a single document

                                        - Arrays:
                                                - Use arrays to store lists of items or values.

                - Normalization (when necessary): 
        
                                        - if data is frequently updated
                                        -  when embedding would lead to duplication and inconsistent data. For example,
                                        -  if many documents need  a common data
                                        -  store  in a separate collection and reference them by ID.

                - Document Size:
                                -  document size limit (16 MB).
                                - If embedding would lead to very large documents, consider using references instead.

                - Indexing:
                          -  create indexes on fields that are frequently used in : 
                                                                                  - queries
                                                                                  - sorting,
                                                                                  - filtering.

                -Schema Flexibility:
                        - allows for flexible schema designs.
                        - no need to define a schema upfront,
                        - documents in the same collection can have different structures.
                        - maintaining some level of consistency in document structure can be beneficial for application stability.


### Load Data into MongoDB

   ```
   mongoimport --db your_db --collection your_collection --file /path/to/your_file.json --jsonArray
   ```

## default primary index 
         -  "_id" the default primary index. 

### Secondary indexes
      - optimize the retrieval of documents based on fields other than the primary key, 


### compound index  
        - indexing based on 2 or more fields 

         ex:
             db.users.createIndex({ age: 1, name: 1 })

            

### Geospatial indexes

      - handle queries related to geographic locations
      - finding documents near a specific location
      - within a certain area,
      - or along a path

### Types of Geospatial Indexes 
      1- 2dsphere Index:
                        - Used for spherical (Earth-like) coordinate systems.
                        - data stored in GeoJSON format.
                        - complex queries, including those involving points, lines, and polygons.
                        - queries that need to consider the curvature of the Earth.

             ex: 
             ```
                 db.address.createIndex({ location: "2dsphere" })
             ```
              

      2- 2d Index:
                 - Used for flat, Cartesian coordinate systems.
                 - Supports simple 2D data, such as points on a flat plane.
              
               ex : 
                     db.address.createIndex({ location: "2d" })


###  Geospatial Query Operations

            - $near : Finding Points Near a Location

            - $geoNear: Finding Points Within a Shape

            - $geoIntersects: Finding Points on a Path

            ex: 
            ```
            // $near:
            db.address.find({
                                        location: {
                                                        $near: {
                                                                        $geometry: {
                                                                                      type: "Point",
                                                                                      coordinates: [longitude, latitude]
                                                                        },
                                                                        $maxDistance: distance_in_meters
                                                        }
                                        }
                                   })
            ```


            ex: 
            ```
            //$geoWithin
            db.address.find({
                                        location: {
                                                        $geoWithin: {
                                                                        $geometry: {
                                                                                      type: "Polygon",
                                                                                      coordinates: [[[lng1, lat1], [lng2, lat2], [lng3, lat3], [lng1, lat1]]]
                                                                        }
                                                        }
                                        }
                                })
            ```

            ex:
            ```
            // $geoIntersects
            db.address.find({
                                        location: {
                                                       $geoIntersects: {
                                                                         $geometry: {
                                                                                        type: "LineString",
                                                                                        coordinates: [[lng1, lat1], [lng2, lat2]]
                                                                         }
                                                       }
                                        }
                                })
            ```


###  Map-Reduce operations in mongo 
      - supports Map-Reduce operations where JavaScript functions are used to map and reduce data.
      -   mapReduce(pr1,pr2,pr3) :
                               - pr1: is a function to do the mapping 
                               - pr2: is a function to do the reduce
                               - pr3: is a object to output the name of the field of the counts 
     
      ex: 
         ```
         db.buildings.mapReduce(

                                function() { emit(this.category, 1); }, // Map function , the value of this.category in the document is the key ,  1 is the value for each document of that category

                                function(key, values) {
                                         return values.reduce((total, value) =>  {
                                                                   return total + value;
                                                              }, 0);

                                 }, // Reduce function, it summing the total of the values declared in previous function 

                                { out: "category_counts" },  // Output to "category_counts" collection
                                )
               ex: 
                 [
                        { "_id": 1, "category": "A", "value": 10 },
                        { "_id": 2, "category": "B", "value": 20 },
                        { "_id": 3, "category": "A", "value": 30 },
                        { "_id": 4, "category": "C", "value": 40 },
                        { "_id": 5, "category": "B", "value": 50 }
                 ]


              ===>  The result stored in the category_counts collection will be:
                         
                         [
                                { "_id": "A", "value": 2 },
                                { "_id": "B", "value": 2 },
                                { "_id": "C", "value": 1 }
                         ]           
         ```



### scaling in mongoDb 
        -  horizontally and vertically,
        
        1. Horizontal Scaling (Sharding)
                a - distributing data across multiple servers
                                                        - splits data  across servers (shards).
                                                        - each holds a subset of the data,
                                                        - distribution is  based on a shard key( fields in the documents)
                                                        - The key determines how the data is partitioned across shards.
                                                        - config servers to keep metadata about the cluster's structure and the location of data chunks.
                                                        - Query Routers (mongos) route client requests to the appropriate shard or shards

                b - automatically balances data across shards  to ensure an even load.
        

        2. Vertical Scaling
                - adding more resources (CPU, RAM, storage) to a server to improve performance.
                        ex: 
                        -  more RAM to better for in-memory operations,
                        -  CPU for concurrency and processing speed.


### data types in MongoDB
              - Documents in MongoDB are similar to objects in JavaScript.

     
       1- Null: 
                 {"x" : null}

       2- Boolean
                {"x" : true}

       3- Number
                {"x" : 4}

       4- String
                {"x" : "foobar"}

       5- Date
                {"x" : new Date()}

       6- Regular expression
                {"x" : /foobar/i}

       7- Array
                {"x" : ["a", "b", "c"]}

       8- Embedded document 
                {"x" : {"foo" : "bar"}}

       9- Object ID
                {"x" : ObjectId()}

       10- Binary Data
                Binary data is a string of arbitrary bytes.

       11- Code
                {"x" : function() { /* ... */ }}

### most used query methods :

         ex: 
         db.users.find({"age" : 24})

         .find({}) 
         .deleteOne({"_id":  3})
         .deleteMany()
         .updateOne()
         .updateMany()
         .replaceOne({
                        "_id" : ObjectId("4b2b9f67a1f631733d917a7a"),
                        "name" : "alice",
                        "friends" : 24,
                        "enemies" : 2
                     })

        .insertOne({"title" : "Start With Why"})
        .insertMan()

### storing LargeFiles (more than 16MB)
        - using GridFS.
        - GridFS divides a file into smaller parts (chunks of size  255KB)
        - chunks are stored in a collection called "fs.chunks"
        - each chunk is stored as a separate document within a collection
        - file-metadata is stored in a collection called "fs.files" : filename, upload date, file type ,  user information...
        - Each document in "fs.files"  references  the file  chunks 


###  config servers
   -  store metadata about the sharded cluster's structure


### mongos 
      -  a routing service used to serve shards within a cluster
      -  handle large amounts of data and high throughput.

      - an interface between client applications and the sharded cluster.
      - When a client sends a request (like a query or an update),
      - mongos routes the request to the appropriate shard(s) based on the data distribution and the shard key.

      -  balance the load evenly across the shards to

      - collects data from each shard to send the total result to client.

      - communicates with the config servers to determine the current configuration and routing rules.


###  Mongo Shell
             - shell that allows interaction with a MongoDB instance from the command line

             ```
             $ mongod
             $ mongo

             ex:
                // to active the server 
               mongod --dbpath /mydata --port 27018 --logpath /mylogs/mongod.log


             // to run javascript myfile
             myfile.js :
                                print("Connecting to the database...");

                                // Perform operations on the database
                                db.books.find().forEach(function(doc) {

                                   printjson(doc);

                                });

                                print("Finished executing script.");

              //in the mongo shell connect to db 
              mongo --host remotehost --port 27017 --username yourUsername --password yourPassword --authenticationDatabase admin
              
              //then load the js file 
              load("/path/to/myfile.js");
             ```
### reserved collection names in mongo 

   -  admin 
   -  local
   -  config


####  Transactions in mongodb 
   -  processing-mechanism  includes one or more operations (read or write)
   -  ensure data consistency/integrity enforcing ACID properties
   -  MongoDB provides 2 APIs to use transactions:
                                                -  Core API
                                                -  Callback API.


             A- Core API 
                  
                  ```
                       const session = client.startSession();

                        session.startTransaction();

                        try {
                   
                                db.collection('mycollection').insertOne({ a: 1 }, { session });
                                db.collection('mycollection').updateOne({ a: 1 }, { $set: { b: 2 } }, { session });

                                session.commitTransaction();

                        } catch (error) {
                    
                                  session.abortTransaction();
                        }
                         finally {
                                   session.endSession();
                        }

                  ```
                
                b- Callback API:
                  ```
                      const { MongoClient } = require('mongodb');
                      const client = new MongoClient('mongodb://username:password@remotehost:27017/mydatabase', 
                                                       {
                                                        useNewUrlParser: true,
                                                        useUnifiedTopology: true
                                                        }
                                                      );

                       const transactionOptions = {
                                                        readConcern: { level: 'snapshot' },
                                                        writeConcern: { w: 'majority' },
                                                        readPreference: 'primary'
                                                };

                         await client.connect();
                         const db = client.db('mydatabase');

                        client.withSession(session => {

                                    session
                                    .withTransaction(
                                                      async () => {
                                                                        await db.collection('mycollection').insertOne({ a: 1 }, { session });
                                                                        await db.collection('mycollection').updateOne({ a: 1 }, { $set: { b: 2 } }, { session });

                                                                   },
                                                     transactionOptions
                                                    );

                        });
                   ```

## transaction options :
    ex :
           const transactionOptions = {
                                         readConcern: { level: "snapshot" },
                                         writeConcern: writeConcern,
                                         readPreference: "primary"
                                    };


### writeConcern Levels
    ex:   writeConcern: { w: 'majority' },

               -  { w: 0 } :  means No acknowledgment: 

                                    - write-operation is sent to the server,
                                    - client does not wait for any acknowledgment from the server.
                                    - no guarantee that the write operation was successful.

                            ex : 
                                 scenarios where performance is critical and data loss is acceptable.

               -  { w: 1 }: Acknowledgment from the primary.

                                    - acknowledgment that the write-operation has been written to the memory of the primary server.

                             ex : 
                                  ensure that the write has reached the primary, providing a balance between performance and reliability.


                - { w : 'majority' } : Acknowledgment from the majority of the replica set members.

                                        - acknowledgment that the write operation has been written to the memory of a majority of the nodes in the replica set.
                                
                            ex :
                                  Ensures high data durability and consistency across the replica set.
                                  most production scenarios to avoid data loss in the event of  primary failure.


                -  { w : 9  }:   Acknowledgment from a specified number of replica set members.

                                        -  acknowledgment from 9  nodes, including the primary.

                            ex :
                                  Allows fine-tuning of write durability requirements based on specific needs.

                - { w: <tag set> } : Acknowledgment from members with specific tags.

                                        -  acknowledgment from replica set members that match the given tag set.
                                
                             ex: : 
                                    Useful for geographically distributed deployments where you want to ensure acknowledgment from nodes in specific data centers or regions.
                         

### tag set in mongoDB 

             -  mechanism used to direct read/write operations to specific-replica-set-members based tags. 

             ex: 
             ```
             rs.initiate({
                           _id: "myReplicaSet",
                           members: [
                                        { _id: 0, host: "primary.example.net:27017", tags: { "dc": "east", "use": "production" } },
                                        { _id: 1, host: "secondary1.example.net:27017", tags: { "dc": "west", "use": "reporting" } },
                                        { _id: 2, host: "secondary2.example.net:27017", tags: { "dc": "west", "use": "production" } }
                                  ]
                        });

                 const readPref = { mode: "secondary", tags: [{ "dc": "west" }, { "use": "reporting" }] };

                const client = new MongoClient("mongodb://username:password@remotehost:27017/mydatabase",
                                                {
                                                        useNewUrlParser: true,
                                                        useUnifiedTopology: true,
                                                        readPreference: readPref
                                                }
                                             );


        
             ```


### readConcern  Levels 
      - consistency/isolation  of data
      - data  meets certain consistency


       ex : 
              readConcern: { level: "snapshot" },


      - { level : "local" }  (Default):

                        -  Reads data from the node's memory, including uncommitted data.
                        -  consistency only for the node's current state.


      - {level: "available"}:

                        - available data regardless of its recency.
                        - some data no  replicated in all  nodes.



      - { level :"majority" }:

                        - data is acknowledged by a majority of the replica-set members (nodes).
                        - strong consistency, 
                        - data replicated to majority of nodes.



      - {level "linearizable"}:

                        - data the most recent acknowledged
                        -  highest level of consistency,
                        - reading the most up-to-date data
             




        - {level : "snapshot" } :

                        - a point-in-time snapshot of  data.
                        - all transaction reads  get  consistent snapshot of data.


### readPreference 
          - from where the reading retrieve data.
        ex: 
           { mode: 'secondary' };

        levels : 
               
           - {mode : "primary"}: (Default):
                                - Reads from the primary node.
                                - reads are up-to-date with the latest writes.




          - {mode : "primaryPreferred" }:
                                        - Prefers reading from the primary
                                        - falls back to secondaries if the primary is unavailable.
                                      

          - {mode : "secondary" }:
                                -  Reads from a secondary node.
                                -  reduce load on the primary 
                                -  improve read scalability
                                -  may return stale data.

          - {mode : "secondaryPreferred"}:
                                        - Prefers reading from a secondary
                                        - but falls back to the primary if no secondary is available.
                                        - applications prioritize read scalability over consistency.



         - { mode : "nearest" }:
                              - Reads from the member with the lowest network latency, regardless of whether it is a primary or secondary.
                              - geo-distributed applications to reduce read latency.



 #### MongoDB Charts
              - tool in MongoDB for data visualization.
                          - MongoDB Charts PaaS (Platform as a Service)
                          - MongoDB Charts Server


### Aggregation Framework in MongoDB
          - set of analytics tools wallow  analytics on documents in one or more collections.
          - based on the concept of a pipeline


### pipeline in the MongoDB aggregation framework.

            - takes stream of documents one at a time, 
            - processes each one 
            - produces stream of documents one at a time 

### Replication Architecture in MongoDB.

         - let say a replica-set-cluster
                                        - only three server nodes 
                                        - one primary node 
                                        - two secondary nodes:

           - the PRIMARY node/server is the only active replica-set-member  receives write operations from lients. 
           - The PRIMARY database saves data changes in the Oplog.
           - data is  saved in the order that they are received and executed. 

           - The SECONDARY database is querying the PRIMARY database for new changes in the Oplog.
           -  If there are any changes, then Oplog entries are copied from PRIMARY to SECONDARY as soon as they are created on the PRIMARY node.

           - SECONDARY database applies changes from the Oplog to its own datafiles. 
           - Oplog entries are applied in the same order they were inserted in the log.
           -  datafiles on SECONDARY are kept in sync with changes on PRIMARY. 

           - SECONDARY databases copy data changes directly from PRIMARY.
           -  Sometimes a SECONDARY database can replicate data from another SECONDARY (Chained Replication)
           - Chained Replication is a two-step replication process. 
           - Chained replication is useful in certain replication topologies, and it is enabled by default in MongoDB.

### Replication topologies
                    - the structure and arrangement of:
                                                       - how data is copied
                                                       - distributed,
                                                       - and synchronized across different nodes (servers, databases) in a network



#### utilities for backup and restore in MongoDB:
                - mongoimport, mongoexport, mongodump, and mongorestore 
                -  part of the MongoDB Database Tools suite (brew install mongodb-database-tools)
                - separate from the MongoDB Shell (mongosh). 
                - not included by default with MongoDB or MongoDB Shell installations,
                - install them separately on your Mac.


               ex: 
                 mongoimport --host localhost --port 27017 --username <your-username> --password <your-password> --authenticationDatabase admin --db mydatabase --collection mycollection --file data.json --jsonArray


### connect to mongoDb instance and start mongo shell
              1-  install mongodb : 
                                  -   brew tap mongodb/brew
                                   -  brew install mongodb-community
                                   -  rew services start mongodb/brew/mongodb-community

              2- Install MongoDB Shell (mongosh)
                                   
                                    - brew install mongosh


              3- start monog shell and  verify login :
                                    - mongosh --host localhost --port 27017 --username <your-username> --password <your-password> --authenticationDatabase admin


             4 - inside the shell type : 
                                   - use mydatabase;
                                   - db.mycollection.find().pretty();






#### A data lake 
                - centralized repository  to store data as-is at any scale. 
          

#### MongoDB Atlas Data Lake 
                       -  query data across  databases , S3, ...
                       -  via MongoDB Language (MQL).
                       -  access data(different formats/locations) on-the-fly without load/transform to  a specific format/structure


### How to Use MongoDB Atlas Data Lake:
                                        - In  MongoDB Atlas UI, set up a Data-Lake by specifying the data-sources.
                                       -  Use the MongoDB shell  to write MQL queries to access data across sources.
                                        - Visualize  data via Atlas Charts or third-party tools.
### Kafka and MongoDB 
                        - Kafka Connect: tool to stream data from MongoDB to Kafka or vice versa.
                        ex: 
                           changes in a MongoDB collection can be published to a Kafka topic, and a downstream service can consume and process this data.

                        - handle real-time data processing and storage.
                        - Kafka handles streaming and distribution of data,
                        - MongoDB is storage for  data.

### ETL 
       - stands for Extract, Transform, Load,
       - processes  to move and prepare data for analysis and reporting.

### managing large-scale data migrations with mongodb 
                                        -  while maintaining system uptime,
                                        -  implementing strategies like "phased migrations"
                                        -  using tools like mongomirror"


### Phased migrations
                       - moving data from one system or environment to another in stages,
                       - minimize risk, manage complexity, and ensure data consistency 
                       - useful for large-scale data migrations 
                       - transitioning between different versions or configurations of MongoDB


### mongomirror
                - facilitate migration of data from an existing MongoDB deployment to MongoDB Atlas
                - useful for migrating ensuring minimal downtime and data consistency.
                - initial sync of the data involves copying the existing data to Atlas.
                - continuously replicates changes from  the source MongoDB  to  Atlas cluster
                - Once data is ynchronized and MongoDB Atlas is ready 
                - pointing your application to the new MongoDB Atlas cluster.


### mongotop tool (for performance)
                 -  track time spent reading and writing data in collections.
                 -  real-time statistics on  MongoDB instance 

                 ex: 
                 // in terminal 
                    mongotop 5      // 5 mean refresh data every 5 seconds

### mongostat  tool ( statistic)
             -  high-level overview of the status of a MongoDB instance.
             -  displays statistics :  number of operations per second, memory usage, and network traffic.
             ex :
                   mongostat 5 // 5 mean refresh data every 5  seconds

        
### A federated query 
                     - retrieve/combine data from multiple data sources
                     -  data is stored across various systems 
                     - analyze/report on the combined-data without moving it all into one place.


###  Components of MongoDB Query API
                  -Basic CRUD Operations:
                         - insertOne, insertMany
                         - find, findOne 
                         - updateOne, updateMany, replaceOne
                         - deleteOne, deleteMany


                   - Query Operators:

                        Comparison Operators ($eq, $ne, $gt, $lt, $gte, $lte): Compare values in documents.

                        Logical Operators ($and, $or, $not, $nor): Combine multiple query conditions.

                        Element Operators ($exists, $type): Query based on the existence or type of fields.

                        Array Operators ($in, $nin, $all, $size, $elemMatch): Work with arrays in documents.

                        Evaluation Operators ($regex, $expr, $mod, $text, $where): Perform more complex evaluations, such as regular expressions and JavaScript expressions.

                   - Aggregation Framework:

                        MongoDB provides a powerful aggregation framework for performing data aggregation operations like filtering, grouping, and transforming data. It uses a pipeline model where documents pass through multiple stages (e.g., $match, $group, $sort, $project) to produce the desired result.

                   - Indexes:

                        The Query API allows you to create and manage indexes (createIndex, dropIndex) to optimize query performance. Indexes help speed up the retrieval of documents by providing efficient access paths to the data.

                   -Text Search:

                        MongoDB supports full-text search queries through the $text operator, allowing you to search for documents that match a specified text string.
                        ex: 
                            db.articles.find({ "$text": { "$search": "mongodb query" } })
                            => =searches in articles  that match the phrase "mongodb query".



                   - Geospatial Queries:

                        MongoDB supports geospatial queries with operators like $geoWithin, $geoIntersects, and $near, which are used to query documents based on geographical locations.

                   - Projection:

                        Projections allow you to specify which fields to include or exclude in the result set of a query (find). This helps in optimizing performance by only retrieving the necessary data.

                   - Sorting:

                        Queries can be sorted using the sort method, which allows you to order the results by one or more fields.
                        
                   - Limits and Skips:

                        MongoDB allows you to control the number of documents returned using limit, and to skip a specified number of documents using skip.


### background true 
         - if there a mongo operation running , even if the user kill the mongodb connection, the operation will continue 
         - long running queries