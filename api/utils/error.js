const errorHandler = (statusCodee, message) => {
 const error = new Error()
 error.statusCode = statusCodee
 error.message = message
 return error
}

export default errorHandler;