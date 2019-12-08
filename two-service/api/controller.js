var controllers = {
    about: function (req, res) {
        // var aboutInfo = {
        //     name: properties.name,
        //     version: properties.version
        // }
        // res.json(aboutInfo);
        res.json({
            funciona: "true",
            about: "about del server 400"
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