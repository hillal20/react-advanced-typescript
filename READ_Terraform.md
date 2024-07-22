##  terraform 
  infrastructure as code  tool allows to write code to deploy applications into the CLoud


  ## famous terraform resources :

       
        ```
        * aws_instance:

                        resource "aws_instance" "example" {
                                
                                            ami           = "ami-0c55b159cbfafe1f0"
                                            instance_type = "t2.micro"
                                            tags = {
                                                Name = "ExampleInstance"
                                            }

                                    }
        ```


        ```
        * aws_s3_bucket
        
                        resource "aws_s3_bucket" "example" {
                                        bucket = "my-unique-bucket-name"
                                        acl    = "private"
                        }
        ```

        ```
        * aws_lambda_function:
        
                        resource "aws_lambda_function" "example" {
                                filename         = "lambda_function_payload.zip"
                                function_name    = "example_lambda_function"
                                role             = aws_iam_role.example.arn
                                handler          = "index.handler"
                                runtime          = "nodejs12.x"
                                source_code_hash = filebase64sha256("lambda_function_payload.zip")
                                }



        ```

        * aws_vpc

        * aws_security_group

        * aws_iam_role

###  terraform state file 
     ex 
           terraform.tfstate 

           -  used it to compare the terraform changes between the local infrastructure  and the remote one 

### import existing infrastructure  

           - if the resources are already created we use  terraform import  command for every single resources 
                 ex : 

                            terraform import aws_instance.example i-1234567890abcdef0

### use the same terraform code for : dev , stage , prod 
       - we could use : 
                     * using  terraform Modules
                         

                                1- create the following file structure 
   
                                  ```
                                    terraform/
                                                ├── main.tf
                                                ├── variables.tf
                                                ├── outputs.tf
                                                ├── envs/
                                                │   ├── dev/
                                                │   │   └── main.tf
                                                │   ├── stage/
                                                │   │   └── main.tf
                                                │   └── prod/
                                                │       └── main.tf
                                                └── modules/
                                                    └── ec2-instance/
                                                        ├── main.tf
                                                        ├── variables.tf
                                                        └── outputs.tf
                                    

                                       # envs/dev/main.tf

                                                provider "aws" {
                                                     region = "us-west-2"
                                                }

                                                module "ec2_instance" {
                                                    source         = "../../modules/ec2-instance"
                                                    ami            = "ami-0c55b159cbfafe1f0"
                                                    instance_type  = "t2.micro"
                                                    instance_name  = "dev-instance"
                                                }






                                       # modules/ec2-instance/main.tf

                                                resource "aws_instance" "example" {
                                                                ami           = var.ami
                                                                instance_type = var.instance_type

                                                                tags = {
                                                                    Name = var.instance_name
                                                                }
                                                }



                                        # modules/ec2-instance/variables.tf

                                                    variable "ami" {
                                                        description = "The AMI ID to use for the instance"
                                                        type        = string
                                                    }

                                                    variable "instance_type" {
                                                        description = "The type of instance to create"
                                                        type        = string
                                                    }

                                                    variable "instance_name" {
                                                        description = "The name of the instance"
                                                        type        = string
                                                    }


                                        # modules/ec2-instance/outputs.tf

                                                    output "instance_id" {
                                                        description = "The ID of the instance"
                                                        value       = aws_instance.example.id
                                                    }
                                        
                                    
                                   ```


                                2-  initiate terraform  for dev env 

                                                cd envs/dev
                                                terraform init
                                                terraform apply


                     * using terraform workspace 

                                    1 - create the foll0wing structure 

                                            ```
                                            terraform/
                                                    ├── main.tf
                                                    ├── variables.tf
                                                    ├── outputs.tf
                                                    ├── terraform.tfvars
                                                    └── envs/
                                                        ├── dev.tfvars
                                                        ├── stage.tfvars
                                                        └── prod.tfvars


                                            # main.tf
                                                provider "aws" {
                                                        region = var.region
                                                }

                                                resource "aws_instance" "example" {
                                                                ami           = var.ami
                                                                instance_type = var.instance_type

                                                                tags = {
                                                                    Name = "${terraform.workspace}-instance"
                                                                }
                                                }


                                            # variables.tf

                                                    variable "region" {
                                                                description = "The AWS region to deploy in"
                                                                type        = string
                                                    }

                                                    variable "ami" {
                                                                description = "The AMI ID to use for the instance"
                                                                type        = string
                                                    }

                                                    variable "instance_type" {
                                                            description = "The type of instance to create"
                                                            type        = string
                                                    }



                                            # envs/dev.tfvars

                                                    region        = "us-west-2"
                                                    ami           = "ami-0c55b159cbfafe1f0"
                                                    instance_type = "t2.micro"

                                            

                                    2 -  then run in terminal : 

                                                    terraform init


                                    3 - create work spaces for each env :

                                        terraform workspace new dev
                                        terraform workspace new stage
                                        terraform workspace new prod

                                    4 - run the needed work space 

                                        terraform workspace select dev
                                        terraform apply -var-file=envs/dev.tfvars


                    ```