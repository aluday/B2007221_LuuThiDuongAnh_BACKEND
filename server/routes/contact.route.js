const express = require('express');
const contacts  = require('../controller/contact.controller');

const router = express.Router();

router.post("/", contacts.create);
router.get("/", contacts.findAll);
router.delete("/", contacts.deleteAll);
router.get("/favorite", contacts.findAllFavorite);
router.get("/:id", contacts.findOne);
router.put("/:id", contacts.update);
router.delete("/:id", contacts.delete);

// router.route("/")npm
//     .get(contacts.findAll)
//     .post(contacts.create)
//     .delete(contacts.deleteAll);

// router.route("/favorite")
//     .get(contacts.findAllFavorite);

// router.route("/:id")
//     .get(contacts.findOne)
//     .put(contacts.update)

module.exports = router;