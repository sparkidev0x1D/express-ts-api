


const sqlerrors = {

      '2627' : {   statusCode : 409 ,
                 message :"Duplicate Record exist "},

      '233'  : {
         statusCode : 428 ,
         message :"Field names could not be null"},
        
      '339'  : {
        statusCode : 428 ,
        message :"Value Should not be Null by default"},

      '513'  : {
            statusCode : 400 ,
            message :"Cannot Update due to enforced rules"

        },
       
      '515'  : {
            statusCode : 400 ,
            message :"null value present on the input"

        }


      


    }

export const handleSqlerror = (code: any) => 

{

  code = String(code)
  
 
if (sqlerrors[code]){


return  {statusCode: sqlerrors[code].statusCode , body : {message : sqlerrors[code].message, status : "failed"} }

}
else 
{
    return  {statusCode: 400, body : {message : "Operation Failed", status : "failed"} }
}


}


