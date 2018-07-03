const express = require("express");
const router = express.Router();
const request = require("request");

/**
 * Routes HTTP POST requests to root
 * TODO safety check
 */
router.post("/", function (req, res) {
    let body = req.body;
    console.log(body.responseId);
    console.log(body.session);
    let dataString = `{ "query":"${body.queryResult.queryText}", "docType":"digipolis" }`;

    let options = {
        url: 'https://gent.digipolis.demo.miia.technology/legal/services/v1/query',
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: dataString,
        auth: {
            'user': 'digipolis',
            'pass': 'aepung5yeisu5biew3eiPohYahng5moo'
        }
    };

    function callback(error, response, body) {
        if (!error && response.statusCode === 200) {
            res.send(body);
        } else {
            res.send("Nothing!")
        }
    }

    request(options, callback);
});

// TODO all HTML METHODS(block or accept)

module.exports = router;
