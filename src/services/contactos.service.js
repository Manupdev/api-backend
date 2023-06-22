const ContactosModel = require('../models/Contactos');
const bcrypt = require('bcrypt');

class ContactosService{

    async getContacts() {
        try {
          const contacts = await ContactosModel.find();
          return contacts;
        } catch (err) {
          console.error(err);
          throw new Error("Error in getContacts Service");
        }
      }

      async createContact(contacts) {
        try {

          let isContactsRegistered = await ContactosModel.findOne({email:contacts.email});
          if(isContactsRegistered){
            throw new Error("User already registered");
          }
          else{
        }
        } catch (err) {
          console.error(err);
          throw new Error("Error in createContacts Service");
        }
      }
}

module.exports = new ContactosService();