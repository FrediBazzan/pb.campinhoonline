/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mmx61ta6k1dgut6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "erldtot2",
    "name": "isDone",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mmx61ta6k1dgut6")

  // remove
  collection.schema.removeField("erldtot2")

  return dao.saveCollection(collection)
})
