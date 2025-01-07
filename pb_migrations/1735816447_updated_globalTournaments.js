/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3h0hsms70322cry")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mszz35y4",
    "name": "tableWidget",
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
    "id": "n0shwfjq",
    "name": "roundsWidget",
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
  const collection = dao.findCollectionByNameOrId("3h0hsms70322cry")

  // remove
  collection.schema.removeField("mszz35y4")

  // remove
  collection.schema.removeField("n0shwfjq")

  return dao.saveCollection(collection)
})
