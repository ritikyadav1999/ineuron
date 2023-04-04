import express from 'express';

import { getUserByEmail, createUser } from '../db/users';
import { hash, compare } from '../helpers';

export const login = async (req: express.Request, res: express.Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.sendStatus(400);
    }

    const user = await getUserByEmail(email);

    if (!user) {
      return res.sendStatus(400);
    }

    const hashedPassword =await hash(password);
    const match = await compare(password,hashedPassword);

    if(!match){
      res.send({
        success:false,
        message:"Email or password is incorrect"
      })
    }

    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const register = async (req: express.Request, res: express.Response) => {
  try {
    const { email, password, username } = req.body;

    if (!email || !password || !username) {
      return res.sendStatus(400);
    }

    const existingUser = await getUserByEmail(email);
  
    if (existingUser) {
      return res.sendStatus(400);
    }

    const hashedPassword = await hash(password);
    const user = await createUser({
      email,
      username,
      password:hashedPassword
    });

    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}