//import the router module from express core  with types 

import { Request, Response, Router } from 'express'
import {responseHandler} from "./../../response-handler"
import  {UserController} from '../../controllers'



class UserRoutes {
  public  UserRouter
  constructor() {
    this.UserRouter = Router()
    this.initate()
  }
  private initate(): void {
    
    
     
    this.UserRouter.get('/ping', (req: Request, res: Response) => res.status(200).jsonp({ status: "Up From COntact Router" }))
    
    this.UserRouter.get('/:id',responseHandler(UserController.getByID));
 

  }
}
export default new UserRoutes().UserRouter

