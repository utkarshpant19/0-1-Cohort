class HttpException extends Error {
  public message: string;
  public statusCode: number;
  constructor(statusCode: number, message: string) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
  }
}

export default HttpException;
