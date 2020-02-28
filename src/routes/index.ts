import {Router} from 'express'
import   UserRouter from './users';

//    "/api" prefix
class Api {
  public apiRouter = Router();
  
  constructor() {
    this.initate()
  
  }
  private initate(): void {
    
    //  Router with authentication middleware imported from ''../middleware module
    // this.apiRouter.use('/users',  [Tokencheck, TokenVerify],UserRouter);

    this.apiRouter.use('/users',UserRouter);
  
  }
}


export default new Api().apiRouter