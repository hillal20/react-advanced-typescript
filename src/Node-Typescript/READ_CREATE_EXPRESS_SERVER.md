
### make sure you follow the order because it matters 


## 1 - create package.json 
        - command: npm init 

## 2 - add module type to package.json
       add this :
       "type": "module"

## 3 - npm install typescript 
      command :
               npm install typescript -D 
## 4 - create tsconfig.ts file at the root level 
      command:
        npx tsc --init

## 5 - create src folder and inside create  server.ts file 

## 6 - install types for node modules 
    command:
            npm install @types/node  -D 
## in tsconfig.ts make sure these fields are there 
       ```
          "outDir": "dist",  
          "sourceMap": true,
          "moduleResolution": "NodeNext",      
          "module": "NodeNext",  
          "target": "ES2020",                   

       ```

       
## 7- add the build command to scripts in package.json
   command: 
     "build" : "tsc"
