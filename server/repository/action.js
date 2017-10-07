const repositoryService = require("./service");
const rules = require('./rules');

const getRepository = (req, res, next) => {
  repositoryService.getRepository(req.body.username).then((data) => {
     res.send(data);
  });
};

const getRulesRepository = (req, res, next) => {
  repositoryService.getRepository(req.body.username).then((data) => {
     res.send(rules.fullRules(data));
  });
};

const getStars = (req, res, next) => {
  repositoryService.getRepository(req.body.username).then((data) => {
     res.send(rules.getStars(data));
  });
};

const getForks = (req, res, next) => {
  repositoryService.getRepository(req.body.username).then((data) => {
     res.send(rules.getForks(data));
  });
};

const getBestRepository = (req, res, next) => {
  repositoryService.getRepository(req.body.username).then((data) => {
     res.send(rules.getBestRepositoty(data));
  });
};

const getLanguage = (req, res, next) => {
  repositoryService.getRepository(req.body.username).then((data) => {
     res.send(rules.getLanguage(data));
  });
};

module.exports = {
  getRepository,
  getRulesRepository,
  getStars,
  getForks,
  getBestRepository,
  getLanguage
};