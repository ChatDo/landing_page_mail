const sendMail = require('./src/mailer.js');
const cors = require('cors');
const fastify = require('fastify')({
    logger: false,
})

// TODO: SETUP EXPRESS SERVER AND DATABASE

fastify.get('/send', function (req, res) {
    sendMail(req, res);
});

fastify.get("/", function(req, res) {
    return res.send({hello: "world"});
})

fastify.listen({host: "0.0.0.0" , port: 3000 }, function (err, address) {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    console.log(`Server is now listening on ${address}`);
})
