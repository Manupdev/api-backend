const { Router } = require("express");
const { check } = require("express-validator");
const checkFields = require ("../middlewares/validateFields");

const MailController = require("../controllers/mail.controller");
const validateJwt = require("../middlewares/jwtValidator")

const router = Router();

router.post('/create',[check('name').not().isEmpty(),
                        check('email').not().isEmpty(),
                        check('telefono').not().isEmpty(), checkFields],
                        MailController.createMail)
router.get('/getMails', validateJwt , MailController.getMails)



module.exports = router;