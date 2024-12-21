import HttpException from "./HttpException";
import { statusCodes } from "../constants/statusCodes.constant";

class UserNotFoundException extends HttpException {
  constructor(id: number) {
    super(statusCodes["NOT FOUND"], `User with id ${id} does not exists`);
  }
}

export default UserNotFoundException;
