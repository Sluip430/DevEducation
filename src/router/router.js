const URL = require('url');
const { getDataController, getFuctTimeController } = require('../controller/controller');

const router = async ({ req, res, body }) => {
  let result, error;
  const { method, url } = req;
  const { query, pathname } = URL.parse(url, true);
  switch (true) {
    case method === 'GET' && pathname === "/get-data" :
      ({ result, error } = await getDataController(query));
      break;
    case method === 'GET' && pathname === "/get-fuct" :
      ({ result, error } = await getFuctTimeController(query));
      break;
    default:
      res.statusCode = 404;
      return res.end(JSON.stringify({ error: 'Route Not Found' }));
  }
  if (error) {
    res.statusCode = error.status;
    return res.end(JSON.stringify(error.data));
  }
  res.statusCode = result.status;
  res.end(JSON.stringify(result.data));
};

module.exports = { router };