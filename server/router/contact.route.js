const express = require('express');
const contacts  = require('../controller/contactController');

const router = express.Router();

router.post("/", contacts.createContact);
router.get("/", contacts.findAllContact);
router.get("/:id", contacts.findOneContact);
router.put("/:id", contacts.updateContact);
// router.route("/")
//     .get(contacts.findAll)
//     .post(contacts.create)
//     .delete(contacts.deleteAll);

// router.route("/favorite")
//     .get(contacts.findAllFavorite);

// router.route("/:id")
//     .get(contacts.findOne)
//     .put(contacts.update)

module.exports = router;