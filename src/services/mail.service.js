const mailModel = require('../models/Mail');

class MailService {
    async createMail(mail){
        try{
            await mailModel.create(mail);
            return mail;
        }catch(err){
            console.log(err)
        }
    }

    async getMails(){
        try{
            const mails = await mailModel.find();
            return mails;
        }catch(err){
            console.log(err)
        }
    }

}

module.exports = new MailService();