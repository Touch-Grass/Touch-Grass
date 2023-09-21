import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@lib/dbConnection";
import { UserModel, UserInterface } from "@models/users";
import { CryptographyUtils } from "@utils/Cryptography/CryptographicUtils";
import * as ErrorUtils from '@utils/Error/ErrorUtils';

// eslint-disable-next-line no-void
export default async function handler(request: NextApiRequest, response: NextApiResponse) {
    await dbConnect();
    switch (request.method) {
      case "GET":
          await handleGet(request, response);
          break;
      case "POST":
          await handlePost(request, response);
          break;
      case "DELETE":
          await handleDelete(request, response);
          break;
      case "PUT":
          await handlePut(request, response);
          break;
      case "PATCH":
          await handlePatch(request, response);
          break;
      default:
          ErrorUtils.sendError(response, ErrorUtils.HttpStatus.METHOD_NOT_ALLOWED);
    }
}

async function handleGet(request: NextApiRequest, response: NextApiResponse) {
  //Retrieve all users
  const todos = await UserModel.find({});
  response.status(200).json(todos);
}

async function handlePost(request: NextApiRequest, response: NextApiResponse) {
  //Create one user
  const body = request.body as UserInterface;
      const user = await new UserModel({
        name: body.name,
        surname: body.surname,
        email: body.email,
        password: await CryptographyUtils.hashString(body.password)
      });
      await user.save();
  
  response.status(200).json(user.toJSON());
}

function handleDelete(request: NextApiRequest, response: NextApiResponse) {
  ErrorUtils.sendError(response, ErrorUtils.HttpStatus.METHOD_NOT_ALLOWED);
}

function handlePut(request: NextApiRequest, response: NextApiResponse) {
  ErrorUtils.sendError(response, ErrorUtils.HttpStatus.METHOD_NOT_ALLOWED);
}

function handlePatch(request: NextApiRequest, response: NextApiResponse) {
  ErrorUtils.sendError(response, ErrorUtils.HttpStatus.METHOD_NOT_ALLOWED);
}