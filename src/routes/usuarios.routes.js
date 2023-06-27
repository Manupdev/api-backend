const { Router } = require("express");

const UserController = require("../controllers/usuarios.controller");

const router = Router();
const validateJwt = require("../middlewares/jwtValidator")

router.post('/create', UserController.createUser)

router.get('/', validateJwt, UserController.getUsers)

router.get('/email/:email', UserController.getUserByMail)

router.post('/login', UserController.login)

router.get('/cant', UserController.getCountUsers)

module.exports = router;