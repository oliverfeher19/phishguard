const express = require('express'); //imports express library that was installed 
const router = express.Router(); //creates router instance to handle requests (mini web server)
const { scanURL } = require('../utils/urlScanner');
const { scanEmail } = require('../utils/emailScanner');

//define POST API endpoints 
router.post('/scan-url', (req, res) => { //listen for post requests on route path 
    const { url } = req.body;
    const result = scanURL(url);
    res.json(result);
});

router.post('/scan-email', (req, res) => { //listen for post requests on route path 
    const { email } = req.body;
    const result = scanEmail(email);
    res.json(result);
});

module.exports = router;