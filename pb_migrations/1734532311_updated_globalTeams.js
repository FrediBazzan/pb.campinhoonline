/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1zlkrosz7m56u4p")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "twlujlzn",
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
  const collection = dao.findCollectionByNameOrId("1zlkrosz7m56u4p")

  // remove
  collection.schema.removeField("twlujlzn")

  return dao.saveCollection(collection)
})
