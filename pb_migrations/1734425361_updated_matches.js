/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wcfwmmw9lj7qhet")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hglwe7hg",
    "name": "yellowCards",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "219abxea",
    "name": "redCards",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5lly8g1o",
    "name": "goals",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "71ac32qp",
    "name": "substitutions",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wcfwmmw9lj7qhet")

  // remove
  collection.schema.removeField("hglwe7hg")

  // remove
  collection.schema.removeField("219abxea")

  // remove
  collection.schema.removeField("5lly8g1o")

  // remove
  collection.schema.removeField("71ac32qp")

  return dao.saveCollection(collection)
})
