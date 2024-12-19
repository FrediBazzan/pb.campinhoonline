/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "wcfwmmw9lj7qhet",
    "created": "2024-12-16 08:57:19.264Z",
    "updated": "2024-12-16 08:57:19.264Z",
    "name": "matches",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "tub12ot2",
        "name": "user",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "vvs5snpi",
        "name": "homeTeam",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "2lq4uk3yuuz9zrr",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "umxadru9",
        "name": "awayTeam",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "2lq4uk3yuuz9zrr",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "8t9khsmh",
        "name": "tournament",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "3sos9qzddbn34wy",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "xjmvmoi4",
        "name": "details",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 2000000
        }
      },
      {
        "system": false,
        "id": "gieesfp0",
        "name": "refereeing",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 2000000
        }
      },
      {
        "system": false,
        "id": "nae5rk0u",
        "name": "homeFormation",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "4-3-3",
            "4-4-2",
            "4-5-1"
          ]
        }
      },
      {
        "system": false,
        "id": "d5ypvbdc",
        "name": "awayFormation",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "4-3-3",
            "4-4-2",
            "4-5-1"
          ]
        }
      },
      {
        "system": false,
        "id": "zbvgr7rn",
        "name": "homeScore",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "pb4trm8q",
        "name": "awayScore",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("wcfwmmw9lj7qhet");

  return dao.deleteCollection(collection);
})
