const express = require('express')
const router = require('./routes/routes')

class Server {

    constructor() {
        this.app = express();
        this.setDatabases();
        this.configBodyParser();
        this.setRoutes();
    }

    setDatabases() {

    }

    configBodyParser(logger) {
        this.app.use(express.urlencoded({ extended: true, limit: '10mb' }));
        this.app.use(express.json({ limit: '10mb' }));
    }

    setRoutes() {
        this.app.use('/api', router.default)
    }

}

exports.Server = Server