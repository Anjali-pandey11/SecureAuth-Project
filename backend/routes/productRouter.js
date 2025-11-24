import express, { Router } from 'express';
import { ensureAuthentication } from '../middlewares/productAuthMiddle.js';

const productRouter = express.Router();

productRouter.get('/',ensureAuthentication,(req,res)=>{
  res.status(200).json([
     {
      name:"Product 1",
      description:"Product 1 Description",
      price:100
     },
     {
      name:"Product 2",
      description:"Product 2 Description",
      price:200
     }
    ])
})

export default productRouter;