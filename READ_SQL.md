## 1 ** Store procedures 

it is a query u write again and again 

ex:  

```

/////////////////////////////////////// no prams 

CREATE PROCEDURE getAllHeros 
as 
SELECT * from superHeroses
go;
exec getAllHeros;

/////////////////////////////////////// with single param 

CREATE PROCEDURE getAllHerosWithParam @Name VARCHAR(255) 
as 
SELECT *  from superHeroses
WHERE Name =  @Name;

exec getAllHerosWithParam @Name = 'stones';


////////////////////////////////////// with 2 params 

CREATE PROCEDURE getAllHerosWithTwoParams @Name VARCHAR(255), @City VARCHAR(255) 
as 
SELECT *  from superHeroses
WHERE Name =  @Name;

exec getAllHerosWithTwoParams @Name = 'stones', @City = 'mancity';

```

## 2 ** Command to see all the procedures in the db
```
SELECT routine_name, routine_type
FROM information_schema.routines
WHERE routine_schema = 'DB_NAME' AND routine_type = 'PROCEDURE'

```



### 3 ** views in sql 
views are a virtual custom tables to hide or show some columns or rows 

```
CREATE VIEW showAllSuperHeros
as 
SELECT * from superHeroses;


select * from showAllSuperHeros;

```



### 4 ** union in sql 
it is combining two-select-queries in one resulting table , at condition the tables has the same column name 

```
select  citizen_id , lastName, firstName , age , city  from citizens
 union 
select  visitor_id,  lastName , firstName , age , city from visitors 

but we will have problem of id , we can not make different between them since they belong to different tables 
so the right solution :

select  CONCAT('c', citizen_id) as Id  , lastName, firstName , age , city  from citizens
 union 
select  CONCAT('v', visitor_id) as Id,  lastName , firstName , age , city from visitors 

we could turn it to a view to simplify the things 

create view allPeople  as 
select  CONCAT('c', citizen_id) as Id  , lastName, firstName , age , city  from citizens
 union 
select  CONCAT('v', visitor_id) as Id,  lastName , firstName , age , city from visitors 
order by Id 

``` 

## 5  ** aggregation functions which works with `group by `

COUNT(): Returns the number of rows in a group.
SUM(): Returns the sum of a numeric column in a group.
AVG(): Returns the average of a numeric column in a group.
MIN(): Returns the minimum value of a column in a group.
MAX(): Returns the maximum value of a column in a group.
GROUP_CONCAT()


## 5 ** deleting repeated records 

DELETE FROM mytable 
WHERE id NOT IN (
  SELECT MIN(id) 
  FROM mytable 
  GROUP BY column_to_check_for_duplicates
);

## 6 ** updating the records 

UPDATE products 
SET price = price * 1.1 
WHERE category = 'books';