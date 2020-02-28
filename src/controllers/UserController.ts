import {UserRepo} from '../data-repositories'

class _UserController {
    public async getByID(reqData) {
 
       
         const {_data,error}  =  await UserRepo.getByID(reqData.params.id);
         if (error)
         {
            return {
                statusCode: error.code,
                body: {
                   status: "error",
                   message: error.message,
                }
             }
         }
         else {
            return {
                statusCode: 200,
                body: {
                   data : _data,
                   status: "success"
                }
             } 
         }
 
    }
 
 }
 
 
 export const UserController  =  new _UserController() ;