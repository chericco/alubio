const express = require('express')
const request = require('request');

const owners_controller = require('../controllers/ownersController')

const router = express.Router()


router.get("/", owners_controller.owners_list_get)

router.get("/:id", checkOwner,owners_controller.owners_info_get)


router.get("/favorites/:id", checkOwner, owners_controller.owners_favorite_get)
router.post("/favorites/:id", checkOwner, owners_controller.owners_favorite_post)





function checkOwner(req, res, next) {

    request.get(`https://gorest.co.in/public-api/users/${req.params.id}&access-token=${process.env.API_GOREST}`, { json: true }, function (error, response, body) {

        if (body.code == 404) {
            return res.json(404, { error: "No Profile Found" })
        } else {
            next()
        }
    });

};

module.exports = router