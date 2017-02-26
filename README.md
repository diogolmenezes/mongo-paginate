With mongo-paginate, you can paginate mongoose queries using SIZE+1 to determine if there is a next page.


# Installation

```shell
$ npm install mongo-paginate --save
```


## Supported options

```javascript
  paginate([page_number], [page_size], [get_total_of_items])
```

- page_number: Number of page to retreive
- page_size: Number of items per page
- get_total_of_items: When true, this option makes a count and returns in result the total of items in the collection.

## Examples




### get_total_of_items = false

```javascript

 require('mongoose-smartpager');

 this.mongo.model('people').find({})
            .paginate(page, 10, false)
            .then(result => {
                callback(null, result);
            })
```

Result: 

```json
{ 
  "items_per_page": 10,
  "has_next": true,
  "current_page": 1,
  "docs": [ { ... }, { ... } ]
}

```

### get_total_of_items = false

```javascript

 require('mongoose-smartpager');

 this.mongo.model('people').find({})
            .paginate(page, 10, true)
            .then(result => {
                callback(null, result);
            })
```

Result: 

```json
{ 
  "items_per_page": 10,
  "has_next": true,
  "total_pages": 2,
  "total_items": 15,
  "current_page": 1,
  "docs": [ { ... }, { ... } ]
}
