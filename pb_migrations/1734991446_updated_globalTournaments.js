/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3h0hsms70322cry")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dhtxrtjd",
    "name": "isActive",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3h0hsms70322cry")

  // remove
  collection.schema.removeField("dhtxrtjd")

  return dao.saveCollection(collection)
})
