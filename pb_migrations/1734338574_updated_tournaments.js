/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3h0hsms70322cry")

  collection.name = "globalTournaments"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3h0hsms70322cry")

  collection.name = "tournaments"

  return dao.saveCollection(collection)
})
