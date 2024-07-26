### aws

## S3 1 \*\* : Amazon simple storage Service :

provides General object storage to store or retrieve
it store all the different versions of the objects to ease the recovery

there many storage classes :
1- S3 standard : for general storage of active data
2- S3 standard infrequent access : long lived storage but less active data
2- S3 amazon glacier : long term archive

it offers configurable policies to manage data storage and migrate it to the right storage
without changes to the applications

## 1 \*\* Buckets

buckets: folders
Objects : the content stored in the bucket ex: video, txt , image , json , sdk, jar ... 5 tera max

to access the object via url
https://AMAZON_URL/Bucket_NAMe/ObjectName

or via code see the doc for node js

## 2 \*\* EC2 : Elastic Compute Cloud :

provide compute instances as Cloud servers to host applications

## 3 \*\* Aws Lambda:

it is service to run the backend code and response to events:

- objects uploads to S3 buckets
- update DynamoDb tables (nonrelational db at any scale )
- data in Kinesis streams (real data processing at any scale )
- in app activity (user use the app )

it handles capacity , scaling , patching , monitor performance via metrics and logs and provide them to amazon cloud watch

the code runs in lambda is called function (upload it as zip file or design it in management console in aws or select from the pre-built functions )

once the function is ready and loaded, just select which event to monitor

## AWS lambda executing 
     - via : 
               * lambda console
               * lambda API
               * AWS SDK
               * AWS CLI
               * AWS toolkit  

## AWS Lambda limitation :
    - deployment package size 50 MB
    - disk space 512 MB
    - memory 128 MB to 10,240 MB
    - execution time timeout 15 minutes or you could solve that by chaining multiple lambdas
       and everyone print the output to the next one  


## AWS Lambda layering :
    - layers to manage common code and dependencies separately 

    - easy to update one layer which contains small code (zip),  and let lambda use it it without touching 
       the rest of the component of lambda 


## AWS Lambda main components :

         -  Handler Function (lambda-function):
                        The main function that gets executed. contains the main code (java ... )

         -  Event Source:
                         Triggers/invoke the Lambda function (e.g., API Gateway, S3, DynamoDB).

         -  Environment:
                          The runtime environment (e.g., Python, Node.js) where your code executes.

## Lambda function handler has always  2 params ( event, context)

     - event: 
               - contains  data  passed to the Lambda function when it is invoked. 
                   * HTTP request
                   * S3 event 
                   * DynamoDB event 
                   * Kinesis records  ( live data processing )
                   * SQS message 
                   * SNS notifications (Simple Notification Service)
                   * Cognito triggers (Identity Federation : social sign-in or SAML integration )
          
   

     - context : 
                   - Monitor  Lambda function meta-data
                        * request ID.
                        * name/version of  Lambda-function.
                        * configuration details.
                        * Logging functions for CloudWatch Logs.
                        * Methods  manage to timeouts Logs

       
## SAML Integration:
        Integrate with enterprise identity systems using SAML (Security Assertion Markup Language) 2.0.

## 4 \*\* amazon redshift :

data warehouse which provides analytics at scale

## 5 \*\* ElasticSearch :

it is an analytic and search engine used for searching the logs and monitoring them

AWS ElasticSearch : is a service to deploy, use and scale the ElasticSearch in the cloud, and also to monitor nodes and its configuration

## 6 \*\* openSearch :

service for logs analytics , monitor apps , website search ...

## 7 \*\* BeanStalk :

service to deploy and scale web apps and docker on the servers

## 8 \*\* aws codePipeline :

continuous delivery service to automate the steps to release a software

## 9 \*\* Aws CICD :

github => codeBuild => codedeploy => S3 storage

## 10 \*\* Top Products Categories of aws

1- security
2- computing : EC2, Elastic Beanstalk , Lambda , lightSat
3- storage : s3, glacier , elastic block storage , elastic file system
4- database : denamoDb , redis
5- networking : route 53 , cloudFront (content delivery network CDN )
6- HA architecture
7- analytics

## 11 \*\* the key components of aws

1- Elastic Compute EC2 : remote computers
2- Route 53 : DNS web service
3- Simple storage Device S3 : store objects , pictures
4- Elastic Block store : store constant volumes of data
5- cloud watch : watching and troubleshooting
6- simple email service : notifications

## 12 \*\* regions , zones , edge location

region : contain providers
zones : contain data centers
edge location : services provided

## 13 \*\* AMI 

Amazon Machine Image  :
provide information to launch instance (operating system )

## 14 \*\* aws auto-scaling :

responsible to launch new instances based on demand

## 15 \*\*  amazon VPC 
amazon private cloud : 
       control private cloud , contains EC2, database, networking ...

## 16 ** steps to create a CloudFormation Solution (CS):

it is a service that help do the following :

      - model and set up your Amazon Web Services resources 
      - spend less time managing those resources 
      - create, update and delete a collection of resources by simply 
      - creating, updating and deleting stacks.

       A stack is a collection of AWS resources that you can manage as a single u

## 17 ** Amazon Queueing service  SQS
    it is a messaging service used  between applications 
      - stander queues : unlimited number of transaction with at least one message is delivered 
      - FIFO queues :  the order of messages is preserved , all the messages are delivered 

## 18 ** dynamoDB 
   serverless-key-value-nonSql-database  

## 19 ** s3 Glacier 
   used for data archiving , has 3 types:
       - instant retrieve 
       - flexible retrieve 
       - deep archive 

## 20 ** redshift 
 - data warehouse service ,
 -  It is used for storing and analyzing large amounts of data


## 21 **  elastic load balancing ELB 
   directs incoming traffic for the application between instances 

## 22  ** elastic beanStalk 
 service to:
  -  deploy and manage application in the cloud 
  -  scale the application on demand 
  -  provide the type of EC2 

## 23 ** CloudWatch 

  - used to monitor and give insights 
  - track the status of the app 

## 24 ** snowBall & Snowball Edge
 -  used only for moving large amounts of data in and out of the Cloud
 - the edge provide storage and and compute capability  as well 
  
## 25 ** cloudTrail 
 -  monitor user activity and record it 

## 26 ** ElasticCache
  caching service 

## 27 ** Lambda 
    - server-less and event driven service 
    - run the app code  virtually without provisioning or managing servers 


## 28 ** ECS (Elastic Container Service) 
           - manage containers orchestration and lifecycle 

           - managing microservices 

           - managing batch processing jobs, 

 ## ECR (Docker container registry)
           - store, manage, and deploy Docker container images.


##  AWS Fargate : 
               -  Deploying Docker containers without managing server infrastructure.

##  EC2 vs AWS Fargate 

                                     EC2                                        |                      Fargate 

                            - full control over  infrastructure                         -  abstracts infrastructure management, 

                          
                            


## 29 ** Amazon EFS
elastic file system :
   add and remove files within EC2 

## 30 **  Aurora , MySql , Postgres
     
it is the Sql database  managed by RDS 

## Redis 
       -  in-memory data-structure-store that can be used as a database, cache, and message broker.


## 31 **  RDS (Relational Database Service)

- provides a managed relational database service that supports a variety of database engines : Aurora , MySQL , Postgres 


## 32 ** Route 53 
  - Cloud Domain Name System (dns)
  - connect users to EC2 , load balancing , s3 bucket 

## 33 ** Kinesis streams (real data processing at any scale )



## 34 ** key-pairs (private and public keys )



## 35 ** Elastic transcoder 
   support devices with resolutions : tablets , pc , phones 



## 36 **  EMR 
 Amazon  MapReduce : manage big data processing 



 ### How to Get Started with ECS
            - Set up a Cluster:
                               Using the ECS Console, create a new cluster. Choose between EC2 (where you manage instances) or Fargate (serverless).
                               Create a Task Definition:


            - Define your task:
                               using JSON or through the ECS Console. Specify container details, such as image, resource requirements, and networking settings.
                               Run a Task or Service:

            - Start a task:
                              directly or create a service to maintain the desired number of task instances.
                              Configure Networking and Security:

            - Set up VPC:
                              subnets, security groups, and load balancers to manage the network access and security of your tasks and services.
                              Monitor and Scale:

            - Use CloudWatch: 
                             to monitor your tasks and services. You can scale your services manually or automatically using ECS Service Auto Scaling.