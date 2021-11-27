const Router = require('express').Router();

const citiesControllers = require('../controllers/citiesControllers')

const {getAllCities, getCity, loadCity} = citiesControllers;

Router.route('/cities')
 .get(getAllCities)

Router.route('/cities/:id')
 .get(getCity)

 module.exports = Router