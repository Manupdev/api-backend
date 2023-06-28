const userModel = require('../models/Usuarios');
const bcrypt = require('bcrypt');

class UserService {
    async createUser(user){
        try{
            let isRegistred = await userModel.findOne({email:user.email})
            console.log(isRegistred)
            if (isRegistred){
                throw new Error("Error")
            }else{
                const count = await userModel.countDocuments();
                console.log(count)
                if (count===0){
                    user.password = bcrypt.hashSync(user.password, process.env.SALT)
                    await userModel.create(user);
                    return true;
                }else{
                    return false
                }
                
            }
        }catch(err){
            console.log(err)
            throw new Error("Error crearU");
        }
    }

    async getUsers(){
        try{
            const users = await userModel.find()
            return users;
        } catch(err){
            throw new error ("Error getU")
        }
    }

    

    async getUserByMail(email){
        try{
            const user = await userModel.findOne({email:email});
            return user;
        }catch(err){
            throw new error ("Error getuM")
        }
    }

    
    
}

module.exports = new UserService();