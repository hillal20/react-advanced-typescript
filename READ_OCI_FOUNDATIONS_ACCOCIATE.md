## Complete cloud Infrastructure platform:

- 7 major categories:
                         - core infrastructure:
                                         - storage: 
                                                   - NVMe
                                                   - Block
                                                   - File
                                                   - Object
                                                   - Archive
                                                   - Data transfer

                                         - networking: 
                                                     - VCN 
                                                     - LB
                                                     - Service Gateway
                                                     - FC
                                                     - VPN
                                                     - CLuster networking
                                         - compute: 
                                                   - Bare metal servers
                                                   - VM 
                                                   - CPUs
                                                   - GPUs
                                                   - HPC

                                         - containers : 
                                                         - containers 
                                                         - kubernetes
                                                         - service mesh 
                                                         - registry 

                                         - OS , VMware: 
                                                       - Autonomous Linux
                                                       - OS Management service 
                                                       - MarketPlace 



                         - database Services: 
                                              - Oracle DB:
                                                        - ATP 
                                                        - ADW
                                                        - DBCS
                                                        - VM/BM
                                                        - JSON
                                                        - Dedicated
                                                        - Exadata
                                                        _ Exadata c@C

                                               - NoSQL and MySQL 


                         - data and AI :
                                          - Big sata : 
                                                       - Big Data 
                                                       - Data flow
                                                       - Data integration
                                                       - Data Catalog 
                                                       - Golden Gate 
                                           - AI services 
                                                       - Data science 
                                                       - Digital Assistant

                                           - messaging:
                                                       - streaming 
                                                       - queueing
                                                       - service connector

                                            
                         - analytics:
                                    - Business analytics :
                                                      - Analytics Cloud
                                                      - Fusion analytics 

                         - governance and administration: 
                                                          - Cloud Ops:
                                                                      - AIM 
                                                                      - compartment tagging 
                                                                      - Console
                                                                      - Cost advisor
                                                          
                                                          - Security:
                                                                      - Cloud Guard 
                                                                      - Security Zones
                                                                      - Vault
                                                                      - KMS
                                                                      - Data safe 
                                                                      - DDos
                                                                      - WAF 

                         - Observability:
                                         - Monitoring 
                                         - Logging 
                                         - Logging Analytics 
                                         - Notifications
                                         - Events
                                         - Operations Insights
                                         - APM
                                         - Management Cloud 
                                                                   
                                                                      
                            
                         - developer services :
                                               - Low Code:
                                                          - APEX
                                               - APPdev: 
                                                         - Visual builder
                                                         - GraalVM
                                                         - Helidon
                                                         - Sql Developer 
                                                         - Shell
                                                         - APIs/CLI/SDKs/Docs

                                               - Infrastructure as Code:
                                                         - resource management
                                                         - Terraform 
                                                         - Ansible 
                                                                            

                         - application services:
                                                 - Serverless: 
                                                              - Events 
                                                              - Functions
                                                              - API gateway

                                                 - APP integration:
                                                                  - integration cloud 
                                                                  - Workflow
                                                                  - Notifications
                                                                  - Email delivery

                                                 - business & industry SaaS:
                                                                           - ERP
                                                                           - HCM
                                                                           - SCM
                                                                           - Sales 
                                                                           - Marketing
                                                                           - Service 
                                                                           - Vertical Industry 


## OCI architecture 

     - Regions : 
             region is a localized geographic area comprising of one or more availability domains

     - availability domains :   
                 - are one or more fault-tolerant Data Centers 
                 - located within a region 
                 - connected to each other by a low latency high bandwidth Network 
      
     - fault domains:
                   - grouping of hardware and infrastructure within an Availability Domain to provide anti-affinity 
                   - anti-affinity :
                                - refers to the practice of ensuring that certain types of resources or services are not placed on the same physical or logical nodes
                                - to avoid  a single point of failure or performance bottleneck could affect multiple critical components or services.
                   -  think about these as logical data centers


## choosing a region 
            base on :
                     - location
                     - data residency and compliance 
                     - service availability
## Availability domain 
          - has 3 fault domains 
          - every fault domain never share the same hardware failure 
          - the application and  DB have to be cloned in every fault domain
          - for data sync between availability domain, we could use 'Data Guard'

## High availability design 
            - availability domain has 3 fault domains 
            - region has multiple availability domains 
            - region pair where in every country at least 2 data centers 


## OCI (Oracle Cloud infrastructure) Distributed Cloud (DC)
            - Public Cloud:
                            - more then 100 cloud services 
                            - in more then 48 countries and governments
            - Multi-cloud :
                             - OCI lets you combine cloud services from multiple clouds 
                             - to optimize cost and functionality and performance 
                             - Services include Oracle DB@Azure , Oracle Interconnect for azure , MySQL Heatwave on aws ..
            - Hybrid cloud: 
                            - the widest range of hybrid cloud services
                            - from portable devices on the edge
                            - to cloud services in customer data centers and services here
                            - include Oracle roving Edge infrastructure Oracle Cloud at customer and others

            - dedicated cloud:
                            - dedicated region it's a complete oci Cloud region in your data center
                            -  offers the agility scalability and economics association 
                            -   granular control security and predictability of an on-premises infrastructure
                           


## Oracle DB@Azure
               -   use Oracle database services directly inside Azure
               -   we create these child sites and these are running Oracle managed infrastructure
               -   we can run Oracle database at Azure services, like extra data database service and Anonymous database service
               -   we create a direct private Network link between these oci child sites in the Azure Data Center and as your network so far and they can access these Services 



## Autonomous Database
                        - Self-Driving:
                                      - automates database-management-tasks such as:
                                                                                      - provisioning,
                                                                                      - tuning,
                                                                                      - backups,
                                                                                      - scaling,
                                      - reducing the need for manual intervention.

                        - Self-Securing:
                                      -  uses built-in security features like: 
                                                                            - encryption,
                                                                            - patching,
                                                                            - vulnerability management to protect against threats.

                        - Self-Repairing: 
                                       - It detects issues before they cause downtime 
                                       - applies automated fixes,
                                       - ensuring high availability with minimal downtime (up to 99.995% availability).



## Oracle Exadata : 
                  -  fine-tuned-hardware-and-software system  to maximize the performance and efficiency of Oracle Database workloads. 
                  -  built to handle the demands of large-scale, mission-critical databases with features that are customized to run Oracle software at peak performance.




##  Hybrid cloud : 
                - Exadata cloud@customer:
                                      - brings Oracle's Exadata-database-platform directly to a customer's data center
                                      - designed for organizations that want the performance, scalability, and automation of Oracle's cloud database services 
                                      - but need to maintain their databases on-premises for regulatory, security, or latency reasons


                - Autonomous database on  Exadata cloud@customer :
                                        - combines the benefits of Oracle’s Autonomous Database technology with the Exadata Cloud@Customer infrastructure,
                                        - all hosted in a customer’s own data center.
                                        - It allows organizations to take advantage of Oracle's self-managing, self-securing, and self-repairing database capabilities
                                        -  without moving data to the public cloud.
                                        - owned and managed remotely by Oracle  

                - Roving Edge Infrastructure:
                                        - A physical device that brings the cloud to edge locations,
                                        - enabling local processing of data.
                                        - This is useful for applications that are latency-sensitive or need to operate without continuous cloud access.
                                        - a physical Edge device that enables your latency and connectivity sensitive applications to process data generated in Edge locations
                                        - provides compute and storage for remote disconnected environments
                                        - process and store data at the edge, especially where connectivity is limited or unavailable.

                - Oracle cloud VMware :
                                       - Native VMware on OCI in public cloud 
                                       - VMware software defined data center running in oci 
                                       - have full admin access and control of this VMware software defined data center just like your own premises environment 
                                       - can use it for use cases such as:
                                                                         - data center migration
                                                                         - data center expansion
                                                                         - disaster recovery 
                     
## Dedicated Regions 
                  - a fully managed service from Oracle that includes:
                                                                     - Hardware
                                                                     - software
                                                                     - cloud services
                                                                     - support
                                                                     - and others all together

                 - it's a shared responsibility model between Oracle and the customer
                 - customer responsible for:
                                            -  the data center uptime
                                            -  physical compliance of the facility
                                            -  ensure power and cooling for all the racks
                                            -  within the Oracle secure area 

                -  Oracle supports all:
                                      - the physical activities required within this facility
                                      - that houses the article all Computing and networking equipment
                                      - trouble shoot and resolve  issues within this secure area

## Reasons to choose Dedicated regions : 
                                      
                                      1- Data Residency: 
                                                      - you can choose the physical location of your dedicated region
                                                      - to enable all data to be stored on prep
                                                      - and meet your governance Regulatory Compliance
                                                      - and data privacy requirements
                                      2- Low latency applications: 
                                                      -  maintain single digit millisecond latencies
                                                      -  the databases/AI-machine-learning-workloads
                                                      -  with no requirement to connect to the public Cloud


## AuthN 
        -  who are you ?
        - user and password 
        -  you provide your username and password to access some of the content
        -  you are being authenticated there are other ways to do authentication
        -  the the one common for cloud: 
                
                  - API signing keys: 
                                     -  for API calls your your whether you're using the SDK or the CLI
                                     -  you would use the API signing Keys
                                     - RSA key pair: use a public/private key pair to authenticate these API calls
                
                  -  Auth tokens:
                                -  are Oracle generated strings 
                                -   you can authenticate a third party apis which don't support oci authentication model

   









## AuthZ
       - what permission do you have ?
       - allows a user to be assigned one or more predetermined roles
       - each role comes with a set of permissions 
       -  IAM policies are  human readable statements
       -  to define granular permission 
      
        ex: 
           Allow <group_name> to <verb> <resource_type> in <location> where <conditions>

           Allow group MyAdmins to manage instances in tenancy where request.region = 'us-ashburn-1'

           Allow group DataScientists to read buckets in compartment MyCompartment where request.networkSource.name = 'trusted_network'


##  AuthZ and Location 
          - refers to the scope or geographical region where a policy or resource is applied
          ex: 
             - Tenancy : 
                        - The entire cloud account (all regions and compartments) of a user 
                         ===>  Allow group MyGroup to manage all-resources in tenancy

             - Compartment: 
                         - A logical group of OCI resources, which can be used to isolate and control access to resources.
                         ==> Allow group MyGroup to manage instances in compartment MyCompartment
             -  Region:
                       - A specific geographic area where OCI services and resources are deployed.
                          Each region has at least one availability domain.
                        ==> Allow group MyGroup to manage all-resources in tenancy where request.region = 'us-ashburn-1'

                       - regions can be a condition using the where clause, like:
                       ===> Allow group MyGroup to manage instances in tenancy where request.region = 'us-phoenix-1'
         
             - Availability Domain (AD):
                       -  A fault-independent, isolated data center within a region.
                           Some policies might be scoped to specific availability domains
                       ===> Allow group MyGroup to use instances in compartment MyCompartment where target.ad = 'WvTB:US-ASHBURN-AD-1'
## verbs 
     - there are 4  levels of verb
                                 - manage
                                 - use
                                 - read 
                                 - inspect 
     
## Identity domain
         - a container for your: 
                                - users 
                                - groups

         -  a construct which represents:
                                       - user population in oci
                                       - Associated configurations
                                       - security settings 

## Policies 
           - contains roles for the groups 

## compartment 
           - when you get open an account in oci you you get a tenancy  (an account)
           - also give you a root compartment
           - as this logical construct where you can keep all your Cloud resources
               ex: 
                   - Network Compartment ( VCN, Load balancer..)
                   - Storage compartment (Block storage, File storage , Object storage)
                   - ...
           - policies are scoped to a compartment (tenancy or  account)
           - resources are available within a compartment
           - compartments are to isolate resources
           -  each resource belongs to a single compartment
           -  a virtual machine for example it goes a to compartment a it cannot go to another compartment 
           -  compartment for  controlling access and isolation 
           - compartment are not  used by everyone 
           -  used only by the compute admins and storage admin
           -  they can access these resources in this in this compartment
           - do not put all your resources in the root compartment 
           - create resource specific compartments or whichever way you want to divide your tendencies


## Resources interact within compartments
          - resources in compartment can interact with resourcing another compartment
              ex: 
                 -  a virtual Cloud network (in compartment A )  and Virtual Machine  (in compartment B ) 
                 -  these are in two different compartments so this is absolutely supported 


## One compartment could be use in different regions 
        -   the compartments are Global constructs like everything in identity
        -   resources from multiple regions can be in the same compartment 
     
         ex: 
            -  when you go to Phoenix you see this compartment existing
            -  you go to Ashburn you see the same compartment
            -  now you can write policies to prevent users from accessing resources in a specific region 
            -  but keep in mind all  the compartments are  global
            -  they are available in every region you have access to


## Compartment could be nested
          -  compartments can also be nested
          -   up to six levels nesting provided by compartments
          -   this can mimic your current design whether it's your organizational design or whether it's your ID hierarchy you could create your design clean

## compartment could be budgeted 
        -  you could set quarters and budgets on compartment 
        -  so you could say that my particular compartment you cannot create a bare metal machine
        -  or you cannot create an accelerator resource
        -   you could also create a budgets on compartment
        -  so you could say that if the usage in a particular compartment goes beyond $1,000 it gets flagged 
        -   and you get notified 

## compartments VS  identity domains 
     - compartments are nothing but logical containers for your resources
     - identity domains you can think of them as containers for your users groups and security configuration
               
## Resources (cloud objects ):
                              - Block storage , Object Storage , file storage , DB system , Virtual Machine , Virtual Cloud Network , 
                                load balancer , storage gateway , buckets , autonomous DB, Containers, Containers Engine For Kubernetes , Service gateway , internet gateway,
                                autoscaling , instance pool, dynamic routing , route table 
                                functions , container registry , security lists 
        
## Resource Unique identifier  (OCID)
                           - Oracle-assigned identifier:
                                                         Oracle cloud ID (OCID)

            syntax :
                      ocid1.<RESOURCE_TYPE>.<REALM>.[REGION][.FUTURE USE].<UNIQUE_ID>
                      
                           - REALM:
                                   set of regions that share the same characteristic 
                              ex : 
                                  commercial realm , government realm ...


                           - RECOURSE_TYPE: 
                                          compute instance , block storage ....

            ex:
                        - Compute Instance OCID:      
                                   ocid1.instance.oc1.phx.abcdefg1234567890

                                    - instance:  is the resource type
                                    - oc1: indicates the realm (Oracle Cloud).
                                    - phx: is the region (Phoenix).
                                    - abcdefg1234567890:  is the unique identifier

                        - Block Storage Volume OCID:
                                    ocid1.volume.oc1.iad.1234567890abcdef

                                    volume: is the resource type.
                                    oc1: indicates the realm.
                                    iad: is the region (Ashburn).
                                    1234567890abcdef:  is the unique identifier.


                                  
                    

## Principal 
        - IAM  entities that are  allowed to interact with oci resources 
        - there are 3  kinds of principles: 
                           1- AIM users : 
                                       -  people who are logging on to your console
                                       -  users using your CLI 
                                       -  sdks users  using your Cloud resources
                                       
                           2-  Resource Principals: 
                                                 - recourses could be principals
                                                 -  an instance principle
                                                 -  which is actually an instance
                                                 -  which becomes a principle 
                                                 -  which means that it can make API calls against other oci services like like storage 
                           
                           3- groups :
                                      -  are basically collection of users who have the same type of access requirements to resources
                                        ex: 
                                            a storage admin group where you could group all human beings who are storage administrators 