# Documents

Documents are how mongo-db stores data.
Documents use `key-value` pair format, similar to JSON files.
They don't have to follow a strict schema, unless one has been set when the collection was created.

## Create

To insert a document, use `insertOne()` on the collection you wish to add to, and pass in the JSON object you want to store.

```mongodb
db.collectionname.insertOne({
    "firstname":"Savannah",
    "lastname":"Vaith",
    "age": 22, 
    "occupation":"Trainer",
    "specialisation":"Software",
    "subjects":[
        "Mongo",
        "Express",
        "React",
        "Node"
    ]
})
```

To insert more than one document, use the `insertMany()` method:

```mongodb
db.collectionname.insertMany([
    {
        "firstname":"Savannah",
        "lastname":"Vaith",
        "age": 22, 
        "occupation":"Trainer",
        "specialisation":"Software",
        "subjects":[
            "Mongo",
            "Express",
            "React",
            "Node"
        ]
    },
    {
        "firstname":"Vinesh",
        "lastname":"Ghela",
        "age": 25, 
        "occupation":"Trainer",
        "specialisation":"Software",
        "subjects":[
            "Spring",
            "API Dev",
            "Java"
        ]
    }
])
```

When documents are created, they are all given a **primary key** which has a unique identifier for each document, denoted by **_id**.

## Read

To print all of the documents in a collection, use the `find()` method:

`db.collectionname.find()`

### Queries

To find a record with a particular query, we can pass a partial object to our `find()` method

```mongodb
db.collectionname.find({
    "firstname":"Savannah"
})
```

We can also query using `$eq` `$ne` `$gt` `$lt`

## Update

### Update One document

To change an existing document, we use the `update` method.
Let's say I just wanted to update one document... to do so I would pass in a filter, and an update

```mongodb
db.collectionname.updateOne(
    {
    "firstname":"Savannah",
    "lastname":"Vait"
    },
    {
        "$set":{
            "specialisation" : "Software Development"
        }
    }
)
```

### Update Many Records

To update many records, we need to use the `set` operator, we use "$" to denote a system field or operator, in order to differentiate between the operator and a normal field called set.

Use the `updateMany()` function. The real difference between `updateMany` and `updateOne` is that the latter stops looking for any other records, once a document is found that matches the filter, whereas updateMany will continue searching the whole collection for any matching documents.

```mongodb
db.collectionname.updateMany({},{
    "$set":{
        "reportsTo":"Jordan Harrison"
    }
});
```

By passing the empty filter `{}` - we target EVERY document in the collection, and add a field `reportsTo`

## Delete

To delete one document

`db.collectionname.deleteOne({ "firstname":"Vinesh"});`

To delete all the documents, that meet a certain criteria

```mongodb
db.collectionname.deleteMany({
    "specilisation":"Software"
});
```

### Useful to know

* `$push` lets you add to an array
* `$pull` lets you remove from array
* It is possible to embedd a document within another - for instance, if we wanted to have an address and all of its details associated to a person. Or represent a job for a particular user and display the title, salary, start date, manager and all.
