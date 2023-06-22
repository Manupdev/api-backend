const { Router } = require("express");
const { check } = require("express-validator");
const contactosController = require("../controllers/contactos.controller");
const checkFields = require("../middlewares/validateFields");


const router = Router();

router.get("/", contactosController.getContactos); //GET CONTACTOS

router.post(
    "/",
    [
      check("name").not().isEmpty(),
      check("email").not().isEmpty(),
      check("telefono").not().isEmpty(),
      checkFields,
    ],
    contactosController.createContactos
  ); //POST CONTACTOS

module.exports = router;