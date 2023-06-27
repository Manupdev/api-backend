let instance = null;
const jwt = require("jsonwebtoken");
const userService = require("../services/usuarios.service");
const authService = require("../services/auth.service");

class UserController {

    static getInstance() {
        if (!instance) {
          return new UserController();
        }
        return instance;
      }

    async createUser(req,res) {
        try {
            let newUser = await userService.createUser(req.body);
            return res.status(201).json({
                estado: newUser,
              });
        }catch (err){
            console.log('Error, usuario ya existente')
            return res.status(500).json({
                method: "createUsuario",
                message: err.message,
              });
        }
    }

    async getUsers(req, res){
        try{
            const users = await userService.getUsers();
            return res.status(200).json(users);
        } catch(err){
            console.log("error1")
        }
    }

    async getUserByMail(req, res){
        try{
            const email = req.params.email
            const user = await userService.getUserByMail(email);
            return res.status(200).json(user);
        } catch(err){
            console.log("error3")
        }
    }

    async login(req, res){
        try{
            const { email, password } = req.body;
            let isUserRegistered = await authService.hasValidCredentials(email, password);

            if (isUserRegistered){
                const user = await userService.getUserByMail(email);

                const token = jwt.sign(user.toJSON(), process.env.PRIVATE_KEY, {
                expiresIn: "1d",
                });

                return res.status(200).json({
                status: 200,
                token,
                estado: true,
                message: "Token created successfully."
                });
            } else {
                return res.status(200).json({
                estado: false,  
                message: "Unauthorized.",
                });
              }
            } catch (err) {
              console.error(err);
              return res.status(500).json({
                method: "login",
                message: err.message,
              });
            }
        }

    async getCountUsers(req, res){
        try{
            const count = await userService.getCountUser();
            return res.status(200).json({
                estadoCountUser: count
            });
        }catch(err){
            return res.status(200).json(err);
        }
        
    }

    }


module.exports = UserController.getInstance();