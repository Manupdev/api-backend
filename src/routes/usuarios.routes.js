const { Router } = require("express");

const UserController = require("../controllers/usuarios.controller");

const router = Router();
const validateJwt = require("../middlewares/jwtValidator")

router.post('/create', UserController.createUser)

router.get('/', validateJwt, UserController.getUsers)

router.post('/login', UserController.login)


module.exports = router;