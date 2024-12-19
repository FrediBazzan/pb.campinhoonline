/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "3h0hsms70322cry",
    "created": "2024-12-16 08:39:10.161Z",
    "updated": "2024-12-16 08:39:10.161Z",
    "name": "tournaments",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hsgl8w3l",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("3h0hsms70322cry");

  return dao.deleteCollection(collection);
})
