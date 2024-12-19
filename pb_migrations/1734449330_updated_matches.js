/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wcfwmmw9lj7qhet")

  // remove
  collection.schema.removeField("nae5rk0u")

  // remove
  collection.schema.removeField("d5ypvbdc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vwqm6x61",
    "name": "homeFormation",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6rar1o4u",
    "name": "awayFormation",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wcfwmmw9lj7qhet")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nae5rk0u",
    "name": "homeFormation",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "4-3-3",
        "4-4-2",
        "4-5-1"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "d5ypvbdc",
    "name": "awayFormation",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "4-3-3",
        "4-4-2",
        "4-5-1"
      ]
    }
  }))

  // remove
  collection.schema.removeField("vwqm6x61")

  // remove
  collection.schema.removeField("6rar1o4u")

  return dao.saveCollection(collection)
})
