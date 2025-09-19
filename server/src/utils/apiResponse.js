class ApiRes {
  constructor(message = "Success", data = {}, statusCode = 200) {
    this.success = true;
    this.message = message;
    this.data = data;
    this.statusCode = statusCode;
  }
}

class ApiErr extends Error {
  constructor(message = "Something went wrong", statusCode = 500, errors = []) {
    super(message);
    this.success = false;
    this.statusCode = statusCode;
    this.errors = errors;
  }
}

export { ApiRes, ApiErr };

