/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2lq4uk3yuuz9zrr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "z9wrcaqp",
    "name": "formation",
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
  const collection = dao.findCollectionByNameOrId("2lq4uk3yuuz9zrr")

  // remove
  collection.schema.removeField("z9wrcaqp")

  return dao.saveCollection(collection)
})
