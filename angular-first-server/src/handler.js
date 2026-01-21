const generateInstance = require('./factories/angularFirstFactory');
const handlerError = require('./util/handleError');
const AngularFirstRoutes = require('./routes/angularFirstRoutes');
const DEFAULT_HEADER = require('./util/defaultHeader');

const angularFirstService = generateInstance();

const routes = AngularFirstRoutes({
  angularFirstService
});

const allRoutes = {
  ...routes,
  default: (req, res) => {
    res.writeHead(404, DEFAULT_HEADER);
    res.write('Not found!');
    res.end();
  }
}

function handler(req, res) {
    const { url, method } = req;

    const baseURL = `http://${req.headers.host || 'localhost'}`;
    const parsedUrl = new URL(url, baseURL);
    
    const { pathname } = parsedUrl;

    const key = `${pathname}:${method.toLowerCase()}`;
    const chosen = allRoutes[key] || allRoutes.default;

    return Promise.resolve(chosen(req, res)).catch(
      handlerError(res)
    );
}

module.exports = handler;