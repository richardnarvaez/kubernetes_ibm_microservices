
const userService = require('../auth/user.service');

var controllers = {
    sorter: function (req, res) {
        console.log("REQ:", req.body.elements)
        let data = req.body.elements
        if (!Array.isArray(data)) {
            res.json({
                status: "error",
                message: "error"
            })
        } else {
            res.json({
                status: "success",
                message: "ok",
                data: { sorted: data.sort() }
            })
        }

    },
    about: function (req, res) {
        // var aboutInfo = {
        //     name: properties.name,
        //     version: properties.version
        // }
        // res.json(aboutInfo);
        res.json({
            funciona: "true",
            about: "about"
        })
    },
    getDistance: function (req, res) {
        res.json({
            funciona: "true",
            distancia: "30"
        })
        // distance.find(req, res, function(err, dist) {
        //     if (err)
        //         res.send(err);
        //     res.json(dist);
        // });
    },
};

module.exports = controllers;