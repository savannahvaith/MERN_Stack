# Databases

Databases are a store of collections.

## Creating

To create a new database use the command `use db_name`

This command changes the current database to the one specified, if it doesn't exist then it will create one for you!

## Read

In order to see all of the databases, use the command `show databases` - this will show you all of the databases with *atleast one* collection!

To check which database you're currently in use the command `db`

## Renaming a database

Unfortunately, there is no easy way to rename a database in Mongo :-1:
The simpliest way is to copy your gb, and give the new database the name you want, then remove the previous...

```mongo
old_db.copyDatabase(`old_db`, `newdb`); 
use newdb; 
old_db.dropDatabase(); 
```

## Deleting a database

To delete a database, use the method `dropDatabase()`
