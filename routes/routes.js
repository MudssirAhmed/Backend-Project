const express = require('express');
const AuthRouter = require('./app/authRouter')

class Routes {

    constructor() {
        this.router = express.Router();
        this.app();
    }

    app() {
        this.router.use('/app/auth', AuthRouter.default)
    }

}

exports.default = new Routes().router