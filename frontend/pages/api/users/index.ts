import { NextApiRequest, NextApiResponse } from 'next';
import { RequestHandler } from '@/utils/HTTPHandler/HTTPHandler';
import { UserService } from './service';
import { UserInterface } from '@/models/users';

class UserHandler extends RequestHandler {
  constructor() {
    super(); // Call the constructor of the parent class
  }

  public async handleGet(request: NextApiRequest, response: NextApiResponse): Promise<void> {
    const users = await UserService.findAll(); // Await the result of UserService.findAll()
    response.status(200).json(users);
  }

  public async handlePost(request: NextApiRequest, response: NextApiResponse): Promise<void> {
    const user = await UserService.insertOne(request.body as UserInterface)
    response.status(200).json(user.toJSON());
  }
}

export default new UserHandler().handleRequest;