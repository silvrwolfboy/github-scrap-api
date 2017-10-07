const _ = require('lodash');

const fullRules = (model) => {
	
	const sumStarAndFork = _.max(_.map(model, (value) => {
		return (parseInt(value.stars) + parseInt(value.forks));
	}));

	const groupRepository = _.groupBy(model, function (value) {
		return value.language;
	});

	const stars = _.sumBy(model, (value) => {
		return parseInt(value.stars);
	});

	const language = _.orderBy(groupRepository, 'length', 'desc')[0];

	const bestRepositoty = _.find(model, (value) => {
		return (parseInt(value.stars) + parseInt(value.forks)) === sumStarAndFork;
	});

	const relevantsRepositories = _.filter(model, (value) => {
		return value.stars > 5 && value.forks > 0;
	});

	const forks = _.sumBy(model, (value) => {
		return parseInt(value.forks);
	});

	const data = {
		stars,
		forks,
		repositories: {
			full: model,
			relevants: relevantsRepositories
		},
		bestRepositoty: bestRepositoty || 'noob',
		language: language ? language[0].language : 'noob'
	};

	return data;
};

const getStars = (model) => {
	
	const stars = _.sumBy(model, (value) => {
		return parseInt(value.stars);
	});

	const data = {
		stars
	};

	return data;
};

const getForks = (model) => {
	
	const forks = _.sumBy(model, (value) => {
		return parseInt(value.forks);
	});

	const data = {
		forks
	};

	return data;
};

const getBestRepositoty = (model) => {
	
	const sumStarAndFork = _.max(_.map(model, (value) => {
		return (parseInt(value.stars) + parseInt(value.forks));
	}));

	const bestRepositoty = _.find(model, (value) => {
		return (parseInt(value.stars) + parseInt(value.forks)) === sumStarAndFork;
	});

	bestRepositoty.stars = parseInt(bestRepositoty.stars);
	bestRepositoty.forks = parseInt(bestRepositoty.forks);

	const data = {
		bestRepositoty
	};

	return data;
};

const getLanguage = (model) => {

	const groupRepository = _.groupBy(model, function (value) {
		return value.language;
	});

	const language = _.orderBy(groupRepository, 'length', 'desc')[0];

	const data = {
		language: language ? language[0].language : 'noob'
	};

	return data;
};

module.exports = {
	fullRules,
	getStars,
	getForks,
	getBestRepositoty,
	getLanguage
};