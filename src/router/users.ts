import express from 'express';

import { getAllUsers, deleteUser, updateUser } from '../controllers/users';

export default (router: express.Router) => {

  router.get('/users', getAllUsers);

  router.delete('/users/delete/:id', deleteUser);
  router.patch('/users/update/:id', updateUser);




};
