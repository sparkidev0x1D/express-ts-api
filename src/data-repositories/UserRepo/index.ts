// import the neccesory model
// import necessary validations such as sqlize 
// All the errors from the data source should be handled properly 


class UsersOps {
   public async getByID(id) {



      try {

         // Get Data From a Data source Connection  and return data      
         return {
            _data: "data" ,error : null
         }
      } 
      
      catch (error) {
         //Log error and process the error and send the code back
         return {
            _data : null ,
            error : { message : "Handle and process the errors",
                      code : 302
                            }
            }
         }
      
      
      }

   }


// r

export const UserRepo  =  new UsersOps() ;