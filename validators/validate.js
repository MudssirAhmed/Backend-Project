const { RESPONSE } = require('../constants/responseConstants')

const validateRequest = async (data, res, schema) => {
    try {
        const validation = await schema.validate(data, { abortEarly: false });

        if (validation.error) {
            const error = validation.error.details.map(e => e = e.message);
            res.status(RESPONSE.HTTP_BAD_REQUEST).json({
              status: RESPONSE.HTTP_BAD_REQUEST,
              message: 'validation failed',
              error
            });
      
            return false;
          }

          console.log("validation success");
          return true;

    } catch(error) {
        res.status(RESPONSE.HTTP_BAD_REQUEST).json({
            status: RESPONSE.HTTP_BAD_REQUEST,
            message: 'validation failed',
            error
        });

        return false;
    }
}

module.exports = { validateRequest }