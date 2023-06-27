const { Router } = require("express");

const MailController = require("../controllers/mail.controller");
const validateJwt = require("../middlewares/jwtValidator")

const router = Router();

router.post('/create', MailController.createMail)
router.get('/getMails', MailController.getMails)
router.put('/validate/:id', MailController.validateMail)


module.exports = router;