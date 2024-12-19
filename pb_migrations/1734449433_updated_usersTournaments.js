/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3sos9qzddbn34wy")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gjpjo0vl",
    "name": "badge",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3sos9qzddbn34wy")

  // remove
  collection.schema.removeField("gjpjo0vl")

  return dao.saveCollection(collection)
})
