/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wcfwmmw9lj7qhet")

  // remove
  collection.schema.removeField("vwqm6x61")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "svbidctz",
    "name": "awayTeam",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "2lq4uk3yuuz9zrr",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wcfwmmw9lj7qhet")

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

  // remove
  collection.schema.removeField("svbidctz")

  return dao.saveCollection(collection)
})
