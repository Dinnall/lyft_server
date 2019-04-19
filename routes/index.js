const express = require('express');
const appRoutes = express.Router();
const httpsRequest = require('../services/crud');

appRoutes.get('/', (req, res) => {
      res.json(`Test route by entering a string`);

});

appRoutes.post('/', (req, res) => {
const { string_to_cut } = req.body;
let result = httpsRequest.getThirdCharFromAstring(string_to_cut )

res.json({ "return_string": result });

});

module.exports = appRoutes;
