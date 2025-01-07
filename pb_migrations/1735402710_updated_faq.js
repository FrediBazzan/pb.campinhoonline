/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ovno0evfvz5jzcp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2ku9ktha",
    "name": "order",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ovno0evfvz5jzcp")

  // remove
  collection.schema.removeField("2ku9ktha")

  return dao.saveCollection(collection)
})
