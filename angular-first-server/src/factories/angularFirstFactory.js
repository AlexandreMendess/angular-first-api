const AngularFirstRepository = require('../repositories/angularFirstRepository');
const AngularFirstService = require('../services/angularFirstService');
const database = require('../util/database');

const generateInstance = () => {
    const angularFirstRepository = new AngularFirstRepository({
        database
    });

    const angularFirstService = new AngularFirstService({
        angularFirstRepository
    });

    return angularFirstService;
};

module.exports = generateInstance;