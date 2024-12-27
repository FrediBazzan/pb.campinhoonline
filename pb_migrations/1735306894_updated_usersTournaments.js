/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3sos9qzddbn34wy")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1zqawpet",
    "name": "metaDescription",
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
  const collection = dao.findCollectionByNameOrId("3sos9qzddbn34wy")

  // remove
  collection.schema.removeField("1zqawpet")

  return dao.saveCollection(collection)
})
