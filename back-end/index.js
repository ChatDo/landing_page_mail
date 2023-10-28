const sendMail = require('./src/mailer.js');
const fastify = require('fastify')({
    logger: false,
})

// TODO: SETUP EXPRESS SERVER AND DATABASE
fastify.register(require('@fastify/cors'), (instance) => {
    return (req, callback) => {
        const corsOptions = {
            // This is NOT recommended for production as it enables reflection exploits
            origin: true
        };

        // do not include CORS headers for requests from localhost
        if (/^localhost$/m.test(req.headers.origin)) {
            corsOptions.origin = false
        }

        // callback expects two parameters: error and options
        callback(null, corsOptions)
    }
});

fastify.post('/send', function (req, res) {
    sendMail(req, res);
});

fastify.get("/", function(req, res) {
    return res.send({hello: "world"});
})

fastify.listen({host: '127.0.0.1', port: 3000 }, function (err, address) {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    console.log(`Server is now listening on ${address}`);
})
