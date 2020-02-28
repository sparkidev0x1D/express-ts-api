
export const  jsonErrorHandler = (error,req,res,next) =>
{
       if (error) {
         res.status(422) .jsonp({  message: "Invalid json" }) ;
         res.end();
       }
       
      else   
        next();


} 

