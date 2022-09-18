const { ApiResponse } = require('../../utils/apiResponse')

class AuthController {
    static async register(req, res, next) {
        try {
            const loginType = req.body.loginType;
            const email = req.body.email;
            const countryCode = req.body.countryCode;
            const phoneNumber = req.body.phoneNumber;

            const resData = {
                loginType
            }

            ApiResponse(res, 200, "success", resData)

        } catch(error) {
            ApiResponse(res, 400, error.message, { error })
        }
    }
}

exports.default = AuthController