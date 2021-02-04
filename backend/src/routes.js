const express = require("express");
const routes = express.Router();

const CountryController = require("./controllers/CountryController");

routes.get("/", function (request, response, next) {
  try {
    return response.json({
      application: process.env.APP_NAME,
      developer: "Lisma Team",
    });
  } catch (error) {
    next(error);
  }
});

routes.get("/country", CountryController.country);
routes.get("/blocked", CountryController.blocked);

module.exports = routes;