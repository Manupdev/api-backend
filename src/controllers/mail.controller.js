let instance = null;
const mailService = require("../services/mail.service");

class MailController {

    static getInstance() {
        if (!instance) {
          return new MailController();
        }
        return instance;
      }

    async createMail(req,res){
        try{
            let newMail = await mailService.createMail(req.body);
            return res.status(201).json({
                message: "Created!",
                usuario: newMail,
              });
        }catch(err){
            console.log(err)
        }
    }

    async getMails(req, res){
      try{
        const mails = await mailService.getMails()
        return res.status(200).json(mails)
      }catch(error){
        console.log(error)
      }
    }

    async validateMail(req, res){
      try{
        const id = await mailService.validateMail(req.params.id)
        return res.status(200).json(id)
      }catch(err){
        console.log(err)
      }
      
    
    }
}

module.exports = MailController.getInstance();