const request = require('request');
const lodash = require('lodash');

exports.owners_list_get = function (req, res) {

    let pag = req.query.page || 1

    request.get(`https://gorest.co.in/public-api/users?page=${pag}&access-token=${process.env.API_GOREST}`, { json: true }, function (error, response, body) {
        res.json(body.data)
    });
};

exports.owners_favorite_get = function (req, res) {

    req.getConnection(function (err, conn) {
        if (err) return next(err);
        conn.query("SELECT * FROM favorites WHERE  owner = ? ", [req.params.id], function (err, results) {
            if (err) return res.json({ "status": "false", "msg": "" });

            res.json({ "status": "true", results })
        });
    });

};

exports.owners_favorite_post = function (req, res) {

    if (req.query.company) {

        let data = { company: req.query.company, owner: req.params.id }

        req.getConnection(function (err, conn) {
            if (err) return next(err);
            conn.query("INSERT INTO favorites set ? ", [data], function (err, results) {
                if (err) return res.json({ "status": "false", "msg": "" });

                res.json({ "status": "true", "msg": `The Owner (${req.params.id}) likes this company (${req.query.company})` })
            });
        });

    } else {
        res.json({ "status": "false", "msg": "No company" });
    }

};


exports.owners_info_get = function (req, res) {
    let id = req.params.id


    request.get(`https://gorest.co.in/public-api/users/${id}/posts?access-token=${process.env.API_GOREST}`, { json: true }, function (error, response, body) {

        body.data.forEach(obj => {
            delete obj.updated_at
            delete obj.created_at
          
        });

        aux(body.data)
    });

    const aux = (post) => {
        request.get(`https://gorest.co.in/public-api/users/${id}?access-token=${process.env.API_GOREST}`, { json: true }, function (error, response, body) {
            body.data.post = post
            console.log(body.data)
            res.status(200).json(body.data)

        });
    }

};