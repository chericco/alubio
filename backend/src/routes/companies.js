const express = require('express')
const company_controller = require('../controllers/companyController')
const jwt = require('jsonwebtoken')

const router = express.Router()


router.get("/", company_controller.company_list_get)
router.post("/", company_controller.company_list_post)

router.get("/add", company_controller.company_add_get)
router.post("/add", company_controller.company_add_post)

router.get("/update", authenticateToken ,company_controller.company_update_get)
router.post("/update", authenticateToken, company_controller.company_update_post)


router.get("/delete/:id", company_controller.company_delete_get)
router.post("/delete/:id", company_controller.company_delete_post)


function authenticateToken(req, res, next) {

    const authHeader = req.headers['authorization']
    if (authHeader == null) return res.sendStatus(401) 

    jwt.verify(authHeader, process.env.SECRETKEY , (err, cif) => {
      if (err) return res.sendStatus(403)
      req.cif = cif
      next() 
    })
  }


module.exports = router