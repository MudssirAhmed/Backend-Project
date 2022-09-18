const express = require('express');
const AuthValidator = require('../../validators/app/authValidator')
const AuthController = require('../../controllers/app/authController')

class AuthRouter {
    constructor() {
        this.router = express.Router();
        this.getRoutes();
    }

    getRoutes() {
        this.router.post(
            '/register',
            AuthValidator.default.validateRegisterRequest,
            AuthController.default.register
        )

        this.router.post('/register', (req, res, next) => {

        })
    }
}

exports.default = new AuthRouter().router