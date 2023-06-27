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
            const mails = await mailModel.find( {estado: true}); //poner solo los que esten en True
            return mails;
        }catch(err){
            console.log(err)
        }
    }

    async validateMail(_id){
        try{
            await mailModel.updateOne({_id: _id}, {$set: {estado: true}})
            return _id
        }catch(err){
            console.log(err)
        }
        
    }
}

module.exports = new MailService();