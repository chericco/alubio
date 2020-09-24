const jwt = require('jsonwebtoken');

exports.company_add_get = function (req, res) {

    const data = req.body


    if (data.cif && data.name && data.email && data.logo && data.description) {

        const token = jwt.sign({ cif: `${data.cif}` }, process.env.SECRETKEY);
        data.token = token

        req.getConnection(function (err, conn) {
            if (err) return next(err);
            conn.query("INSERT INTO companies set ?", [data], function (err, results) {
                if (err) return res.json({ "status": "false", "msg": "There is already a company with the same CIF" });

                res.json({ "status": "true", "msg": `The new company has been successfully added whit ID ${results.insertId}`, "token": token })
            });
        });
    } else {
        res.json(404, { "status": "false", "msg": "One of the basic data for creating a company is missing {name, cif, email, description, logo}" })
    }

};
exports.company_add_post = function (req, res) {

    const data = req.body


    if (data.cif && data.name && data.email && data.logo && data.description) {

        const token = jwt.sign({ cif: `${data.cif}` }, process.env.SECRETKEY);
        data.token = token

        req.getConnection(function (err, conn) {
            if (err) return next(err);
            conn.query("INSERT INTO companies set ?", [data], function (err, results) {
                if (err) return res.json({ "status": "false", "msg": "There is already a company with the same CIF" });

                res.json({ "status": "true", "msg": `The new company has been successfully added whit ID ${results.insertId}`, "token": token })
            });
        });
    } else {
        res.json(404, { "status": "false", "msg": "One of the basic data for creating a company is missing {name, cif, email, description, logo}" })
    }

};


exports.company_update_get = function (req, res) {

    const data = req.body
  
    if (data.cif && data.id && data.email) {

        res.json(404, { "status": "false", "msg": "The CIF, name and email address cannot be changed" })
    }
    else {

        req.getConnection(function (err, conn) {
            if (err) return next(err);

            conn.query("UPDATE companies set ? where cif = ?", [data, req.cif.cif], function (err, results) {
                console.log(results)
                if (err) return res.json({ "status": "false", "msg": "Could not be updated" });

                res.json({ "status": "true", "msg": "Updated successfully" })
            });

        });
    }
};
exports.company_update_post = function (req, res) {

    
    const data = req.body
  
    if (data.cif && data.id && data.email) {

        res.json(404, { "status": "false", "msg": "The CIF, name and email address cannot be changed" })
    }
    else {

        req.getConnection(function (err, conn) {
            if (err) return next(err);

            conn.query("UPDATE companies set ? where cif = ?", [data, req.cif.cif], function (err, results) {
                console.log(results)
                if (err) return res.json({ "status": "false", "msg": "Could not be updated" });

                res.json({ "status": "true", "msg": "Updated successfully" })
            });

        });
    }
};


exports.company_delete_get = function (req, res) {

    const id = req.params.id

    req.getConnection(function (err, conn) {
        if (err) return next(err);

        conn.query("DELETE FROM companies WHERE id = ?", [id], function (err, results) {

            if (err) return res.json({ "status": "false", "msg": `There is no company with the id ${id}` });

            res.json({ "status": "true", "msg": "Deleted successfully" })
        });
    });
};
exports.company_delete_post = function (req, res) {

    const id = req.params.id

    req.getConnection(function (err, conn) {
        if (err) return next(err);

        conn.query("DELETE FROM companies WHERE id = ?", [id], function (err, results) {

            if (err) return res.json({ "status": "false", "msg": `There is no company with the id ${id}` });

            res.json({ "status": "true", "msg": "Deleted successfully" })
        });
    });
};


exports.company_list_get = function (req, res) {

    if (!req.query.page) {

        req.getConnection(function (err, conn) {
            if (err) return next(err);

            conn.query("SELECT * FROM companies ", [], function (err, results) {

                if (err) return res.json({ "status": "false", "msg": `` });

                res.json(results)
            });
        });

    } else {

        let limiteInferior = (req.query.page - 1) * 20 //(N-1)*20 a  N*20
        let limiteSuperior = 20

        req.getConnection(function (err, conn) {
            if (err) return next(err);

            conn.query("SELECT * FROM companies LIMIT ?, ? ", [limiteInferior, limiteSuperior], function (err, results) {
                if (err) return res.json({ "status": "false", "msg": `` });

                if (Object.keys(results).length) {
                    res.json(results)
                } else {
                    res.json({ "status": "false", "msg": "There are not so many companies registered in our services :)" })
                }

            });
        });

    }


};
exports.company_list_post = function (req, res) {

    req.getConnection(function (err, conn) {
        if (err) return next(err);

        conn.query("SELECT * FROM companies ", [], function (err, results) {

            if (err) return res.json({ "status": "false", "msg": `` });

            res.json(results)
        });
    });

};