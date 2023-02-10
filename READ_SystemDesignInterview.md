

## 1- How would you design a scalable web application?

1 -  traffic  : 
                    1 - Load Balancing,
                    2 - Caching,
                    3 - Auto-Scaling,
                    4 - Content Delivery Network (CDN),
                    5 - Optimizing Database (indexing, sharding,caching)

 2 - availability:
                   2 - Redundancy (making copies of critical components in your system):  servers, storage systems, power supplies.
                   3 - Fault-Tolerance( system keeps  functioning if component failure):
                         * redundant-arrays-of-independent-disks (RAID),
                         * checksums :  data calculation  to verify the integrity of the data (amount sent vs amount received )
                   4 - Automated Failover: backup system take over in case of failure 
                   5 - Monitoring
                   6 - Regular Maintenance : security updates, dependencies upgrades ,  and clean codebase 

3 -  load balancing: 
4 -  scaling:
                  - horizontal (more db servers)
                  - vertical (CPOs, Rams, disks)
                  - sharding : dividing  data to chunks and saved in different database servers.
 5 - caching.


## 2- How would you design a search engine like Google?

1-  crawling  indexing web pages,
2-  Pre-processing and tokenization: 
                                  - pre-processing prepares the text data for tokenization (cleaning characters ...)
                                  - tokenization breaks the text data into smaller units for further analysis.
3-  spell correction
4-  query processing and giving  suggestions: link the query words to the pages 
5-  rank  results : relevance of a web page to the query, importance , popularity  
6-  improve the quality of the results by using user interaction with the result 
7-  Distributed systems : multiple servers working together to handle the query processing and indexing
8-  Result presentation:
9-  advertising.


## 3- How would you design a social network like Facebook

- user profiles,
- friend relationships, 
- news feed,
- notifications,
- messaging,
- advertising.

## 4-How would you design a recommendation system?

1- Define the problem and goal
                              - based  user preferences, purchases 
        
2- Collect data (about users and items) 
3- Choose a recommendation algorithm
4- Train the model (the model can be trained using the data injected in the algorithm)
5- evaluate the performance model 
6- Fine-tune the model (Based on the results of the evaluation)  until get accurate result 
7- Deploy the system
                           

## 5- How would you handle data storage and retrieval for a high traffic website?

-  handle data storage,
-  indexing, 
-  ensure fast access times 
-  high availability.

## 6-How would you design a real-time chat application?

- real-time communication, 
- message delivery,
- scaling for a large number of users.

## 7-How would you design a content delivery network (CDN)?

- distribute content to users,
- caching, 
- load balancing, 
- ensure high availability.

## 8-How would you handle authentication and authorization in a web application?

- authentication,
- authorization for different types of resources and actions,
- secure storage for  sensitive information.

## 9- How would you handle scaling and caching for a database?

-  database scaling, 
-  caching,
-  high availability and fast access times.

## 10- How would you handle data consistency in a distributed system?

- data is consistent across multiple servers, 
- data partitioning, 
- replication and failure recovery.





##### Atlassian system design questions :
 
1- How would you design a scalable, distributed system to handle millions of requests per second?

2- How would you design a system that can handle real-time collaboration between multiple users in a document or code repository?

3- How would you design a system to store and manage large amounts of structured and unstructured data?

4- How would you design a system to monitor and manage the performance and availability of multiple microservices in a distributed system?

5- How would you design a system to handle and process large amounts of data in real-time, such as log data from multiple servers or sensor data from IoT devices?

6- How would you design a system to handle a large number of concurrent users, with fast and consistent performance, for a web-based application?

7- How would you design a system that provides secure and efficient access to shared resources, such as files or databases, across multiple teams and organizations?

8- How would you design a system to store and manage versioned files, with a focus on performance and efficiency, while ensuring that data remains secure and accessible over time?

9- How would you design a system for managing and processing large amounts of time-series data, such as stock prices or weather data?

10- How would you design a system for storing and processing sensitive data, such as financial or personal information, while ensuring that the data remains secure and confidential?

11- How would you design a system for handling and processing large amounts of real-time data from multiple sources, such as social media or sensor data, while ensuring that the data remains up-to-date and accurate?

12- How would you design a system for managing and processing large amounts of images or videos, while ensuring that the data remains secure and easily accessible to authorized users?

13- How would you design a system for storing and processing large amounts of data from multiple sources, such as databases, logs, or APIs, while ensuring that the data remains accurate, up-to-date, and easily accessible to authorized users?

14- How would you design a system for managing and processing large amounts of data from multiple sources, while ensuring that the data remains accurate and consistent, even in the face of failures or errors in the underlying systems?

15- How would you design a system for storing and processing large amounts of data, while ensuring that the data remains secure, available, and accessible to authorized users, even in the event of failures or disasters?







## example : 

A consumer can schedule a request to https://myservice.com/api/items/_delete to be executed on Sunday at 1am. On Sunday at 1am the scheduling system must execute the HTTP request.

Requirements

The system must:

Provide an interface for scheduling HTTP requests at a specified time.
Execute an HTTP request at a specified time.
Initial release expects 10 scheduling requests per minute.
FR -

Provide an interface for scheduling HTTP requests at a specified time.
Execute an HTTP request at a specified time.
Initial release expects 10 scheduling requests per minute.
NFR
Scalling, availability, reliable - Only discussion

There are many follow up questions, few are below which I remember.

How the back-end will interact with Front-end (GUI), json request & response body
How will you handle different timezones?
How users will know the GUI timezone and what would be the timezone in the backend system.
How will you handle if the system crash and restart to avoid duplicate requests.

### Answer :

How the back-end will interact with Front-end (GUI): The front-end (GUI) can send a scheduling request to the back-end in the form of a JSON payload over HTTP. The JSON payload will include the URL to be requested, the desired execution time, and any other relevant parameters. The back-end system can then parse the JSON payload and schedule the request accordingly. When the specified time arrives, the back-end system can execute the HTTP request and return a response to the front-end, again in the form of a JSON payload.

How will you handle different timezones: One approach to handle different timezones is to store the desired execution time in the scheduling request as UTC time and convert it to the local time zone of the back-end system when scheduling the request. This way, the back-end system can execute the HTTP request at the correct time, regardless of the time zone of the user or front-end system.

How users will know the GUI timezone and what would be the timezone in the backend system: The GUI can display the current time zone and allow the user to select their desired time zone. When scheduling a request, the GUI can convert the selected time to UTC and send it as part of the JSON payload to the back-end system. The back-end system can then convert the UTC time to its local time zone for scheduling purposes.

How will you handle if the system crash and restart to avoid duplicate requests: One approach is to persist the scheduled requests in a durable data store, such as a database, and periodically checkpoint the system state to ensure that any scheduled requests are not lost in the event of a system crash or restart. Additionally, when the system starts back up, it can check the data store for any pending requests and reschedule them as needed.




## what metrics are you using to measure performance and growth ? 

1- User-engagement : 
                   user engagement with  product:
                                                  user count,
                                                  session duration,
                                                  click-through rate.

2- Revenue : 
            measure  total revenue,
            average revenue per user (ARPU),
            lifetime value of a customer (LTV).

3- Conversion : 
              effectiveness of a product in achieving its goals:
                                                                conversion rate,
                                                                sign-up rate, 
                                                                purchase rate.

4- Traffic : 
            measure traffic to a product:
                                       unique visitors,
                                       page views, 
                                       bounce rate(visitor leaves the website after visiting only one page)

5- Technical performance :
                            measure the technical performance of a product:
                                                                          page load time,
                                                                          response time,
                                                                          error rate.

6- Customer satisfaction:
                        measure how satisfied customers are with a product:
                                                                           net promoter score (NPS)
                                                                           customer support response time.

7- Social media : 
                 the impact of a product on social media: 
                                                         the number of shares,
                                                         likes,
                                                         followers.


## how these metrics align with your team and  company growth strategy ?

1- Align with company goals: The metrics used to measure performance and growth should directly align with the company's overall goals. For example, if the company's goal is to increase revenue, then the metrics used to measure performance should be focused on revenue-related metrics such as total revenue, ARPU, and LTV.

2- Reflect the growth strategy: The metrics used to measure performance and growth should also reflect the company's growth strategy. For example, if the company's growth strategy is to acquire new users, then metrics such as sign-up rate, user acquisition cost (CAC), and churn rate should be closely monitored.

3- Focus on key performance indicators (KPIs): The metrics used to measure performance and growth should be focused on key performance indicators (KPIs) that are closely tied to the company's goals and strategies. These KPIs should be regularly reviewed and analyzed to determine the effectiveness of the company's growth strategy.

4- Regular review and adjustment: The metrics used to measure performance and growth should be regularly reviewed and adjusted as needed, as the company's goals and strategies evolve over time. This will ensure that the metrics continue to align with the company's overall goals and growth strategy.


