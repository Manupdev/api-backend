let instance = null;
require('dotenv').config();
const jwt = require("jsonwebtoken");
const ContactosService = require("../services/contactos.service");
const AuthService = require('../services/auth.service');

class ContactosController {

    static getInstance() {
      if (!instance) {
        return new ContactosController();
      }
      return instance;
    }
  
    async getContactos(req, res) {
      try {
        const contacts = await ContactosService.getContacts();
        return res.status(200).json(users);
      } catch (err) {
        console.error(err);
        return res.status(500).json({
      method: "getContacts",
      message: err,
        });
      }
    }
    async createContactos(req, res) {
        try {
          let newContacts = await ContactosService.createContact(req.body);
    
          return res.status(201).json({
        message: "Created!",
        contacto: newContacts,
          });
        } catch (err) {
          console.error(err);
          return res.status(500).json({
        method: "createContacts",
        message: err.message,
          });
        }
      }

    }

    module.exports = ContactosController.getInstance();