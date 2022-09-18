const ApiResponse = (res, statusCode, message, data) => {
    return res.status(statusCode).json({
        status: statusCode,
        message,
        data
    })
}

module.exports = { ApiResponse }