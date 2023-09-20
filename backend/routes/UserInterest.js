const express = require('express')
const {saveInterest} = require('../controllers/UserInterest')
const Middleware = require('../middleware/middleware')
const router = express.Router()

router.post('/save',Middleware.authenticateToken,saveInterest)





module.exports = router;