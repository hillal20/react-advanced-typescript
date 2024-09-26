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







## Tenancy 
        - the person who create account 
            ex : 
                 hilalaissani
        - 
## OCI admin 
         -  admin for  day-to-day operations
         -  can be a set of users not just one person
         -  group the admin users in one group : OCI-ADMIN-GROUP
         - write policies for this group 
         - let them operate in a specific compartment

## OCI admins best practices 
         - don't use the tendency administrator account for day-to-day
         - create dedicated compartments to isolate resources : 
                                                            ex 
                                                                  - production
                                                                  - development
                                                                  - or a business unit or could be a region based compartment
        - compartments are available across all regions 
        - use MFA  to verify a user's identity 
      

## famous policies for OCI-Admin-group
     

      -     Allow group MyAdmins-group to manage all-resources in tenancy
       -      Allow group MyAdmins-group to manage domains in tenancy
         -      Allow group MyAdmins-group to manage users in tenancy
           -      Allow group MyAdmins-group to manage groups in tenancy
             -      Allow group MyAdmins-group to manage dynamic-groups in tenancy
               -      Allow group MyAdmins-group to manage policies in tenancy
                 -      Allow group MyAdmins-group to manage compartments in tenancy


## Topology in VCN : 
                   - the arrangement or layout of various elements (like nodes, devices, or connections) within a network. 
        
                - please look at the image : 
                                             /Users/hilalaissani/Desktop/OCI-VCN-Topology.png


## Internet Gateway :
            - allow communication from/and to the VCN and the internet 

## NAT gateway 
           - allow the communication from the VCN to the internet 


## Service gateway  (Dynamic Routing Gateway (DRG))
          - allow communication from/and to the VCN and an Oracle Services Network (contains: Object Storage ...)


## Route Table 
    -  send traffic out of the VCN to the internet
    -  send traffic out of the VCN to on premises networks
    -  send traffic out of the VCN to peered VCNand
    -  consist of a set of Route rules
    -  each rule specifies:
                          - destination CIDR block:
                                                    - stands for:  Classless Inter-Domain Routing
                                                    - represents a range of IP addresses
                                                    - defines the destination network to which the rule applies
                                                    - Traffic destined for any IP address within this CIDR block will follow the rule specified in the route table

                                ex: 
                                 - a CIDR block like 10.0.0.0/16
                                 - could represent all IP addresses between 10.0.0.0 and 10.0.255.255
                                                
                          -  route Target: 
                                         -  specifies the next hop(target) where traffic should be forwarded 
                                                   when it matches the destination CIDR bloc.
                                         - Common route targets include:
                                                                        - Internet Gateway: Used to route traffic to and from the internet.
                                                                        - NAT Gateway: Allows only outbound traffic from private directly to the  internet.
                                                                        - Dynamic Routing Gateway (DRG): route traffic between your VCN and  on-premises networks through 
                                                                                                             a VPN or FastConnect.
                                                                        - Local Peering Gateway (LPG): Routes traffic between Virtual Cloud Networks (VCNs) that are peered.

## Peering in VCN
             -  multiple networks how do they talk to each other ?
             - so there are 2 ways 
                         
                         1- local Peering:
                                          -  VCNs  are within the same oci region 
                                          -  talk to each other through a mechanism called local peering
                                          -  each VCN has a Local Peering Gateway (LPG) 
                                          -  a Virtual Router which lets you manage that communication  
                                          - the traffic goes thru LPG1 in VCN1 to reach LPG2 in VCN2
                                          - and vice versa
                                       
                          2- remote peering:
                                        - IF VCNs are in different regions
                                        -  then  it's a remote peering
                                        -  using the Dynamic Routing Gateways (DRG)
                                        - each VCN has its DRG 
                                        -  enabling communication between networks in different regions

             - VCN peering in OCI is not VPN-based: 
                                                 - it's an internal connection established either within the same region (local peering) 
                                                 - or across regions (remote peering) using Oracle's backbone network.
## Peering with Dynamic Routing Gateway V2 
      - all the VCNs regardless the region could connect to each other via Dynamic Routing Gateway V2 ( DRG v2)
      - each DRG v2  can cover up to 300 VCNs
      



## Security List of a subnet  in VCN 
        -  the VCN have subnets 
        -  Applied at the subnet level.
        -  Security List : firewall rules associated with a subnet
        -  applied to all instances inside the subnet 
        -  specify the type of traffic allowed in or out of the subnet 
        -  this applies to a given instance
        -  whether it is talking with another instance in the vcn
        -  or a host outside the vcn 
        -  Controls traffic for all resources (instances) within a subnet.
        -  Security lists consist of ingress (inbound)
        -  and egress (outbound) rules that apply to the entire subnet.
        -  All resources within a subnet share the same set of rules,
        -  resources within a subnet can be treated the same in terms of security

        Ex: 
             If a security list allows traffic on port 80,
              all instances within the subnet can receive HTTP traffic on port 80.

## Network security groups (NSG)
      -  Applied at the instance or resource level
      -  allowing you to apply security rules to specific resources
      -  can apply different NSGs to different resources within the same subnet.
      -  can define specific rules for a particular set of resources without affecting other resources in the subnet
      -  Best suited for environments where you need fine-grained control over traffic for individual resources or groups of resources in the same subnet.
      
         Ex:
             You can create an NSG for a specific web server instance that only allows traffic on port 443 (HTTPS),
              while another instance in the same subnet can have different rules (e.g., allowing traffic only on port 22 for SSH).



## Load Balancer (LB):
                  -   operates at Layer 7 of the OSI model (application layer)
                  -   the Oracle cloud region has VCN and VCN has  Internet Gateway (IG) to catch internet traffic in and out 
                  -   the cloud region has a least one VNC 
                  -   the VCN has a public subnet which has a security-list and  a load balancer 
                  -   the VCN has private subnet which has 2 web-servers 
                  -   distribute traffic from the internet to your resources (public )
                  -   or Used to distribute traffic within your Virtual Cloud Network (private )
                  -   the Internet Gateway (IG) pass the traffic to the Load Balancer (LB)
                  -   referred to as reverse proxies 
                  -   accessed by multiple clients (internet calls )
                  -   clients would  hit region internet gateway then hit  the load balancer
                  -   proxy the traffic to the various back-end servers
                  -   provides High availability in case a particular backend-server is not available 
                  -   application can still be up and running 
                  -   scalability
                  -   deals with HTTP, HTTPS, WebSocket 
                  -   Web servers, API gateways
                  -   Often uses a proxy, may mask source IP
                  - 
                     1- Public Load Balancer:
                           - distribute traffic from the internet to your resources (such as instances) within OCI.
                           - It provides access to resources in public subnets.
                           -  deployed in public subnets.
                           -  Exposed to the internet via a public IP address
                           ex: 
                             You would use a public load balancer to route HTTP/HTTPS traffic from the internet to a set of web servers.

                     2-  Private Load Balancer:
                            -  Used to distribute traffic within your Virtual Cloud Network (VCN), 
                            -  for resources in private subnets
                            -  used for internal applications where internet access is not required.
                            -  deployed in private subnets.
                            - Only accessible within the VCN (no public access)

                           ex : 
                               Used for internal-facing applications, 
                               such as distributing traffic between backend application servers  in private subnets

## Network Load Balancer (NLB)
                    - operates at Layer 4 of the OSI model ( transport layer )
                    - routes traffic based on IP addresses and ports (TCP, UDP, ICMP)
                    - It doesn't inspect or modify the application data
                    - without inspecting the application payload.
                    - large traffic spikes and high-volume workloads.
                    - Preserves source IP address
                    - Optimized for low-latency and high-throughput traffic :
                                                                             - real-time gaming,
                                                                             - high-performance computing, 
                                                                             - financial services
                    - distribute traffic across a pool of backend servers (VMs or bare metal instances).
                    -  Backend servers can be added or removed dynamically, depending on demand.

                      1- Public NLB: Routes traffic from the internet to resources in your VCN.
                      2- Private NLB: Routes traffic internally within the VCN for private-facing applications.


## Flexible shapes 
     - choose your own cores,
     - your CPU processors,
     - and you could also choose your own memory.
     - choose a combination of CPU cores and memory and there's a ratio there
     - flexibility in choosing your own configuration.

## traditional approach for servers 
                           - virtual machines VMs :
                                               -  VMs are  shared and multi tenant,
                                               -  the host can be running VMs from multiple customers.
                                               -  They have strong security isolation,
                                               -  so you don't have to worry about that.
                           - bare metal servers: 
                                                -a full machine,
                                                -  a full server which is completely dedicated to you
                           - Dedicated host: 
                                            -  a full dedicated bare metal machine.
                                            -  But on top of that
                                            -  you could run virtual machines.
                                            - dedicated host where they could run their own VMs



## region,AD (availability domain ) , VCN , Subnets , VNIC, Instance ...
         -  A region is comprised of multiple ADs.
         -  AD is nothing but a data center,
         -  the compute service has a  Virtual Cloud Network.
         -  compute instance needs a Virtual Cloud Network.
         -   network divided into smaller  subnets ( private & public ). 
         - VNIC :  virtual NIC is placed inside the subnet,
   

## VNIC :
           - the private IP for the compute host comes from,

## boot volume,   boot disk,  the block volumes:
   -  instance determines its operating system
   -  and other software.
   -  an image  comes from this network storage disk called a boot disk.
   -  So it doesn't stay on the compute host, 
   -  it's actually living on the network somewhere.

## remote storage 
             - boot 
             - data 

## VM Live  Migration 
      -  if  computers fail
      -  the compute host you are running has to be always up and running
      -  migrate your VM to another host in our data center (AD),
      -  it will be transparent to you.
      -   migrate your virtual machines so you can live-migrate between hosts without rebooting.
      -   applications running even during maintenance events



## steps to create Instance 
                1 - go to network than create VCN  and subnet 
                                                - provide name 
                                                - choose the cidr block (10.0.0.0/16)
                                                - create a subnet inside this VCN :
                                                                                - provide name 
                                                                                - provide compartment 
                                                                                - provide regional or domain specific 
                                                                                - provide cidr block (10.0.0.0/24)
                                                                                - create public or private subnet 
                                                                                - choose the route table 
                                                                                



                2 -  create internet gateway (My_internet_gateway)

                3 -  go to the route table and click on the correct table 
                                                                        - create route rule ( ex: internet gateway)
                                                                        - create cidr block (0.0.0.0/0 means all the internet traffic )
                                                                        
                                                                        
                4- in the security list in the VCN , click on the correct list 
                                                                         - add ingress rule 
                                                                         - CIDR ( 0.0.0.0/0)
                                                                         - choose IP Protocol to be : TCP
                                                                         - choose the port to be : 80
                5- create an instance 
                                   - choose the image (OS) and shape( hardware)
                                   - pick the right network (VCN)
                                   - pick the right subnet (public one )
                                   - add the public ssh key and save it 
                                   -
            
            
               ex: 
                   /Users/hilalaissani/Desktop/instance-sample.png



## Scaling 
          - vertical scaling:
                             -  scaling up or scaling down instance shapes
                             -  scale the cores (CPOs),
                             -  scale memory.
                             -  a downtime required
                             -  because, likely, we take your machine, and we instantiate a new-- when you institute a new shape
                             -  It actually goes to another host. 
                             -  stop your instance before you do any kind of vertical scaling.



                  
          - horizontal scaling (Autoscaling):
                             - add more VMs of the same shape,
                             - or you take a bit more of the same shape. 
                             - enables large-scale deployment of VMs.
                             -  There is scale-out (add) or scale in (remove)
                             - going from one VM to 4 VMs.
                             - going from 4 VMs back to one VM.
                             - There is no extra cost for using Autoscaling.
                             - how does it work and in practice: 

                                           - first :
                                                - So you create a template (config or stamp) of the running instance 
                                                - It's basically things like your: 
                                                                                - operating system image, 
                                                                                - metadata,
                                                                                - the shape,
                                                                                - the size,
                                                                                - other characteristics, like storage, networking, et cetera.

                                           - second:
                                                 -  take that stamp,
                                                 -  create instance pool.
                                                 -  pool is  a collection of those instances in advance
                                                 -  manage all of these instances as one unit.
                                                 -  stop all of them at the same time.
                                                 -  start them, you could terminate them, and, to get high availability, 
                                                 -  put them in different availability domains on different data centers. 


                                          - third: 
                                               -  take your instance pool,
                                               -  write these Autoscaling rules on that.
                                               -  You start with a desired or initial size.
                                               -  There is a minimum size and  a maximum size.
                                               -  if CPU or memory goes beyond a particular percentage threshold, add some instances.
                                               -  if CPU or memory goes below some threshold, remove some instances. 
                                               -  Autoscaling is constantly monitoring your traffic.
                                               -  Autoscaling constantly monitoring your CPU usage.
                                               -  Autoscaling  is looking at whether to add instances or remove instances.



## difference between VMs and Containers 

                                                  VMs                             |                             Containers 
                
                - hardware                                                                           - hardware  
                - hypervisor                                                                         - OS
                - every VM has  OS                                                                   - container runtime (docker)
                - every VM has  library/dependencies                                                 - every container has library/dependencies 
                - every VM has application                                                           - every container has application 
                - resource heavy compare to on-premises                                              - one OS for multiple containers 
                - multiple VMs with  multiple OS                                                     - boot fast 
                - higher disk space                                                                  - light wight 
                - longer boot time                                                                   - portable to other clouds 
              
  

## container`s orchestration:
               -  deploy them,
               -  manage them, 
               - connect them, 
               - scale them up and down
               - All this process of automatically deploying and managing containers is known as container orchestration.
        
## Kubernetes 
               - is an container`s orchestration tool 
               - an open source system for automating deployment, scaling, and management of containerized application.
               - no down time
               - self heal
               - use docker to build containers and kubernetes to orchestrate them 
               


## OKE (Oracle Kubernetes Container-Engine)
            - it  is a Kubernetes service.
            - it's a fully managed, scalable, and highly available Kubernetes service.
            -  It's based on the open source Kubernetes system.
            - a lot of features for developers: 
                                              -  one click cluster creation,
                                              -  CLI API support,
                                              -  support for running these on ARM-based and GPU-based instances.

## Node in kubernetes
           -  a machine on which Kubernetes is installed.
           -  referred to as worker node.
           -  worker node is where containers (grouped in pods) are launched by Kubernetes.

## pod :
       -  a group of one or more containers
       -  with shared storage
       -  shared network resources
       -  shared specification file for how to run the containers.
       -  the smallest unit of compute within a managed Kubernetes environment.
 
## NodePool 
         - a group of worker nodes 
         - either virtual nodes
         - or manged nodes 
         

## virtual nodes 
    -  a serverless option.
    - only in the enhanced cluster 
    -  Oracle do :
                  - Kubernetes software is upgraded, 
                  - security patches 
                  - application availability ...

## manged nodes 
        -  you are responsible for upgrading Kubernetes
        -  you are responsible for managing the nodes.
        -  you can configure them to meet your requirements.
        -  in basic clusters, as well as enhanced clusters.

## cluster 
        - a group of NodePool 


##  control plane for  nodes.
                -  manage the cluster
                -  schedule the containers
                -  manage high availability
                -  manages the worker nodes and the pods in the cluster.
                -  control plane nodes is highly available and it's managed by Oracle. 
                -  no charge for running the control plane nodes.
                - contains :
                           -  kube-controller-manager,
                            - cloud-controller-manager
                           -  kube-APIserver
                           -  etcd (it's a key-value store used for Kubernetes to back all the cluster data)
                          

##  enhanced clusters 
                        - support all available features
                        - come with a financially-backed  SLA (service level agreement)

##  basic clusters
                   -  support core functionality,
                   -  but none of the enhanced features.
                   -  financial with SLO (Service Level Objective)
                   -  no financially-backed SLA 
## SLA:  
       - contract between provider and customer 
       - outlines the services  provided,
       - and  performance standards (including SLOs),
       - and the consequences if those standards are not met (penalties, compensations).
    
## SLO :
      -  desired level of services:
                                        - uptime, 
                                        - response time
                                        -  or throughput.


## OCI container instances 


     problem: 
                - test containerized application,
                - no  deploying it on OKE as the scale is not large.
                - the application has isolated web applications or RESTful APIs.
                -  simple, quick, and secure way to run containers without managing any servers.

                -  run a containerized application without using Kubernetes,
                                                        - provision a virtual machine,
                                                        - install a container runtime (docker)
                                                        - run applications on it,

                -  increases the operational complexity,
                -   manage the VMs and the servers, 
                -  patch the operating system,
                -  update the container runtime regularly

    solution:
                -  OCI Container-Instances.
                -  the quickest way to launch containers
                -  no  need to virtual machines 
                -  no OKE.
                -  run containerized applications without having to manage any infrastructures.
                -  supply the container-image for  applications 
                -  OCI takes care of the underlying container runtime and compute resources.


## serverless (Oracle functions)
             -  Bare Metal machine :  access to the full machine, 
             -  Virtual Machines : 
                                    - take that big Bare Metal server and you divide it into smaller segments
                                    -  all be run independently of each other

             - Containers: 
                       -   where you have a container runtime(docker)
                       -  the containers share the OS kernel,
                       -  and they have a little bit weaker security isolation,
                       -  but they have a good resource isolation in terms of CPU and memory.
                       -  they could drive your overall resource utilization,
                       -  they are portable,
                       -   they really help in DevOps adoption.
                       -  You write once, you could deploy anywhere, 

              - Functions:
                          -  write your code in a particular runtime,
                          -  you don't worry about servers,
                          -  you don't worry about any of the infrastructure, 
                          -  you just provide the code and the cloud provider is responsible for executing that code.
                          -  consumption-based-pricing model where you are only billed for the time your function is running.
                          -  no pay-as-you-go-pricing 
                         
## function-as-a-service
                  -  write code and the code is executed.
                  -  Event Driven Architecture,
                  -  an event happens when function is invoked.
                  -  functions run inside a container.
                  -  billed only for the duration the function runs
                  -  highly parallel execution.
                  -  Oracle Functions is powered by the Fn-Project-Open-Source-engine.
                  -  autonomous,
                  -  scales

        
        how it works in reality  :
                      -  your uploaded code and configuration is packaged as a container image and stored in the OCI Registry.
                      -  Then you set up trigger actions.
                      -  You can invoke using CLI or API, or OCI events can trigger it.
                      -  then  Oracle Functions  executes the code in response to the trigger or invocation.
                      -  then can invoke other function-integrations/oci-services or even external systems :        
                                                                                        - monitoring 
                                                                                        - identity
                                                                                        - registry
                                                                                        - logging
                                                                                        - network
                                                                                        - oci-services 
                                        

## IOPS 
       stands for Input/Output Operations Per Second.


## SSDs
        Solid State Drives
## storage 
          
          - persistent storage: 
          - non-persistent storage: 

          - kind of data are you storing: 
                                        - database files
                                        - videos
                                        - audios
                                        - photos
                                        - text
        - kind of performance:
        - kind of capacity
        - amount  input/output per second,
        - IOPS
        - amount of throughput
        - Connectivity: 
                     -  local storage
                     -   network storage
        - the way application access that storage data
        -  protocol:
                  -  block
                  -  file
                  -  HTTP


## Local NVMe storage :
                     -  data center (AD)
                     -  compute server
                     -  a locally-attached storage.
                     -  locally-attached storage.
                     -  NVMe SSDs.
                     -  Super high performance gives you hundreds of thousands of IOPS.
                     -  could run your  applications using local NVMe. 

## Block Volume (block storage disk)
             -  persistent/durable storage to compute instances
             -  stores data in fixed-sized blocks
             -  the operating system treats it like a small-disk
             -  similar to a traditional hard drive or SSD.
             -  Each block has its own address,
             -  we need  a compute instance
             -  we need  a storage server,
             -  is on the same  network
             -  the storage is  persistent and durable and extend beyond the lifetime of the instance itself.
             -  the storage, the data is managed as fixed-sized blocks.
             -  So you create a partition.
             -  You create a file system.
             -  Then you mount the file system. 


## file storage 
            -  the same availability domain,
            -  it's a shared file storage system.
            -  two compute instances.
            -  a shared storage system
            -  the storage is shared.
            -  you manage the storage as: 
                                        - files
                                        - directories

            -  You don't partition the disk.
            -  mount the file system :
                                          - A file system is the way data is organized and stored on a storage device.
                                          - It determines how files are named, accessed, and manage
                                          -  mount file system means: 
                                                             - making that organized structure (the file system) accessible to the operating system.
                                                             - It’s like telling the computer to open up the structure that contains all the files and folders.
                                                             - Mounting a file system allows you to access files on a hard drive, SSD, or USB stick
                                                             - because it enables the computer to understand the organization of those files.
     
           - after the file system get mounted ,  all the compute instances could use the shared file storage system easily  


## Object storage 
           - data is managed as objects
           - storage for the web.
           -  unstructured data
                              - photos
                              - videos
                              -  log files
                              -  text file,
                              - any kind of files you store on the web.
           - regional service.
           - public service.
           - multiple storage tiers
           - have an internet client, who accesses this these objects using simple and familiar HTTP requests
           - private access from OCI resources like your compute instances
           - storage scenarios 
                              - content repository
                              - structured and semi-structured data
                              -  big data/ spark / hadoop / data analytics
                              - archive and backup purposes.
        
         how it works :
                    - objects are key-value-pairs or name-value-pairs 
                    - they can have metadata 
                    - store in buckets 

## Object storage tiers

                  - standard tier  (hot tier):
                                 - keep all the critical data,
                                 - you want to retrieve instantaneously
                                 - can not downgrade 

                  - infrequent access storage tier:
                                - critical data,
                                - this is a long-term critical data.
                                - You don't need it right away.
                                - backups
                                - data has to be stored for a minimum of 31 days
                                - retrieval fees when you get the data back
                                - 60% cheaper than the standard tier

                  - archive tier :
                                -  data don't need right away.
                                -  rarely access this data.
                                -  tape storage.
                                -  objects need to be restored and then downloaded
                                -  min retention 90 days 
                                -  restore time 1 hour 
                                -  download time 24 h 
                                -  archive bucket can not be upgrade 

                  - auto tiering 
                               - looks at your access pattern.
                               -  And let's say you have unknown access pattern
                               -  or your data access pattern keeps changing,
                               -  it can move the data from standard tier to infrequent access tier and vise versa.
                               -  And it can move back to standard if your objects start getting used again.


                             



## namespace:
                -  a logical entity. 
                -  It's a top-level container for all buckets object.
                -  And it has to have a globally 
           ex: 
                an object storage URL :

                        https://objectstorage.<region>.oraclecloud.com/n/<namespace>/b/<bucket_name>/o/<object_name>

                         https://objectstorage.us-sanjose-1.oraclecloud.com/n/hilal-files/b/school-files/o/hilal-log.zip
            
## OCI Data migration services
         - Data transfer Disk : 
                               - you send us your disks, and we migrate the data.

         - Data transfer appliance:
                               -  use a much larger appliance to send the data to us.
        
        - Storage Gateway (linux appliance):
                        -  Sits in your data center (AD),
                        -  and using that, you can migrate data to OCI.