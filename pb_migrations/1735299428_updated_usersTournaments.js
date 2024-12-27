/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3sos9qzddbn34wy")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hnxl26px",
    "name": "period",
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
    "id": "h5pclduw",
    "name": "description",
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
    "id": "rapeqaob",
    "name": "teams",
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
  const collection = dao.findCollectionByNameOrId("3sos9qzddbn34wy")

  // remove
  collection.schema.removeField("hnxl26px")

  // remove
  collection.schema.removeField("h5pclduw")

  // remove
  collection.schema.removeField("rapeqaob")

  return dao.saveCollection(collection)
})
