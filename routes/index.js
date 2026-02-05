var express = require('express');
var router = express.Router();

const axios = require('axios');

const API_KEY = '572a3679ce5dde457715cf887cac935b'; // token de https://superheroapi.com

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hero/:id', async (req, res) => {
    try {
        const url = `https://superheroapi.com/api/${API_KEY}/${req.params.id}`;
        const response = await axios.get(url);
        // Renderizamos el archivo 'perfil.pug' pasando los datos del héroe
        res.render('hero/perfil', { hero: response.data });
    } catch (error) {
        res.status(500).send("Error al obtener datos");
    }
});

module.exports = router;




