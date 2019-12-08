const controller = require('./controller');

const { authenticate } = require('../auth/auth.controller');

module.exports = function (app) {
    app.route('/about')
        .get(controller.about);
    app.route('/distance/:zipcode1/:zipcode2')
        .get(controller.getDistance);
    app.route('/ibmchallengemic1/element_sorter1_0')
        .post(authenticate, controller.sorter)
};

