# Collections

A collection is a group of documents.
Collections in mongo enforce no schema - meaning the documents don't have to follow the same structure, if you pleased they could have a completely different structure from document to document.

Generally, documents in a schema will be related, they just don't have to follow a set structure.

## Creating

To create a new collection in the current DB, use the `createCollection()` method, passing in the name of the new collection.

`db.createCollection("collection-name");`

## Show all collections

To display all of the collections in the current database, use the command:

`show collections;`

## Update

To rename a collection, use the method `renameCollection()` - and pass in the new collection name

`db.collection_name.renameCollection("new-name");`

## Deleting

To remove a collection, use the `drop()` command on the collection you no longer want.

`db.collection_name.drop()`
