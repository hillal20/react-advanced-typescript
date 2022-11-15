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

it is service to run the backend code and response to events: - objects uploads to S3 buckets - update DynamoDb tables (nonrelational db at any scale ) - data in Kinesis streams (real data processing at any scale ) - in app activity (user use the app )

it handles capacity , scaling , patching , monitor performance via metrics and logs and provide them to amazon cloud watch

the code runs in lambda is called function (upload it as zip file or design it in management console in aws or select from the pre-built functions )

once the function is ready and loaded, just select which event to monitor

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

github => code Build => code deploy => S3 storage
