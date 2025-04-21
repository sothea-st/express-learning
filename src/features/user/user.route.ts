import { Router } from 'express';
import userController from './user.controller';
import { verifyJWT } from '../../middleware/auth-middleware';
const router = Router();
// Apply the verifyJWT middleware globally for all routes in this router
// router.use(verifyJWT);
router.get('/users', userController.getUsers);
// router.get('/users/:id', userController.getUser);
router.post('/users', userController.createUser);
router.put('/users/:id', userController.updateUser);
// router.delete('/users/:id', userController.deleteUser);

export default router;
