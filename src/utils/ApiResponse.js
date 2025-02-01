class ApiResponse {
    constructor(statusCode, data, message = "Success"){
        this.date = data
        this.statusCode = statusCode
        this.message = message
        this.success = statusCode < 400
    }
}