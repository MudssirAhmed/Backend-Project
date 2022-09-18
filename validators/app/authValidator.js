const Joi = require('joi')
const {LOGIN_TYPE} = require('../../constants/userConstants')
const { validateRequest } = require('../validate')

class AuthValidator {
    static async validateRegisterRequest(req, res, next) {
        const schema = Joi.object().keys({
            loginType: Joi.string().required().valid(LOGIN_TYPE.email, LOGIN_TYPE.phone),
            phoneNumber: Joi.string().when('loginType', {
                is: LOGIN_TYPE.phone,
                then: Joi.required()
            }),
            countryCode: Joi.string().when('loginType', {
                is: LOGIN_TYPE.phone,
                then: Joi.required()
            }),
            email: Joi.when('loginType', {
                is: LOGIN_TYPE.email,
                then: Joi.required()
            })
        })

        const isValid = await validateRequest(req.body, res, schema)

        console.log(isValid);
        if(isValid) {
            next()
        }

    }
}

exports.default = AuthValidator