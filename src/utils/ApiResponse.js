class ApiResponse {
  constructor(statusCode, message, data = null) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }

  static success(message, data) {
    return new ApiResponse(200, message, data);
  }

  static created(message, data) {
    return new ApiResponse(201, message, data);
  }

  static badRequest(message) {
    return new ApiResponse(400, message);
  }

  static unauthorized(message) {
    return new ApiResponse(401, message);
  }

  static forbidden(message) {
    return new ApiResponse(403, message);
  }

  static notFound(message) {
    return new ApiResponse(404, message);
  }

  static internalServerError(message) {
    return new ApiResponse(500, message);
  }
}

export default ApiResponse;