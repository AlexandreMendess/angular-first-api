const parse = require('node:url');
const AngularFirstRepository = require('./repositories/angularFirstRepository');
const generateInstance = require('./factories/angularFirstFactory');
const handlerError = require('./util/handleError');
const AngularFirstRoutes = require('./routes/angularFirstRoutes');

const angularFirstService = generateInstance({
    AngularFirstRepository
});

const routes = AngularFirstRoutes({
  angularFirstService
});

const allRoutes = {
  ...routes,
  default: (req, res) => {
    response.writeHead(404, DEFAULT_HEADER);
    response.write('Not found!');
    response.end();
  }
}

function handler(req, res) {
    const { url, method } = req;

    const { pathname } = parse(url, true);

    const key = `${pathname}:${method.toLowerCase()}`;
    const chosen = allRoutes[key] || allRoutes.default;

    return Promise.resolve(chosen(request, response)).catch(
      handlerError(response)
    );
}

module.exports = handler;