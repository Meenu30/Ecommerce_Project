import express from 'express'
import {registerController,
    loginController,
    testController,
    forgotPasswordController
}
     from '../controller/authController.js'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js'

//route object
const router = express.Router()

//routing
//register//method post 
router.post('/register',registerController);

//Login||post
router.post('/login',loginController);

// // /Forgot Password || POST
router.post("/forgot-password", forgotPasswordController);

//test routes
router.get('test',requireSignIn,isAdmin, testController)

//protected user route auth
router.get("/user-auth", requireSignIn, (req, res) => {
    res.status(200).send({ ok: true });
  });

  //protected Admin route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;




