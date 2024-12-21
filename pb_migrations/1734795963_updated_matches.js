/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wcfwmmw9lj7qhet")

  // remove
  collection.schema.removeField("umxadru9")

  // remove
  collection.schema.removeField("6rar1o4u")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wcfwmmw9lj7qhet")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "umxadru9",
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
})
