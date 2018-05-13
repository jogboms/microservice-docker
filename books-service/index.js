const {
  send,
  json
} = require('micro')
const {
  router,
  get,
  post,
  del,
  options
} = require('microrouter');
const Model = require('./model.js');
const db = require('./db');

db();

const notfound = (req, res) => {
  send(res, 404, 'Not found route')
}

const create = async (req, res) => {
  let data = await json(req)
  let lamp = new Model(data);
  console.log('create-Model---', req.query, data)
  lamp.save();
  send(res, 200, {
    msg: 'create-ok'
  })
}

const find = async (req, res) => {
  const results = await Model.find({})
  send(res, 200, results);
}

const findByStatus = async (req, res) => {
  let data = await json(req);
  const p = {
    'status': "active"
  };
  const results = await Model.find(p);
  send(res, 200, results);
}

module.exports = router(
  get('/*', find),
  post('/*', create),
  post('/status', findByStatus),
)