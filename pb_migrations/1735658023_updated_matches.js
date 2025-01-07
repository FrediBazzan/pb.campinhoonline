/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wcfwmmw9lj7qhet")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zgw89xzt",
    "name": "periods",
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
  collection.schema.removeField("zgw89xzt")

  return dao.saveCollection(collection)
})
