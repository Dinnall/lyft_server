const express = require('express');
const appRoutes = express.Router();
const httpsRequest = require('../services/crud');

appRoutes.get('/', (req, res) => {
      res.json(`Test route by entering a string`);

});

appRoutes.post('/test', (req, res) => {
const { str } = req.body;
  
  let result = httpsRequest.getThirdCharFromAstring( str )
        .then(data => {
            res.json({ 
            "return_string": result 
           });
        })
        .catch(e => {
            res.status(400);
            res.json({
                error: e.toString(),
            })
        })
});

module.exports = appRoutes;
