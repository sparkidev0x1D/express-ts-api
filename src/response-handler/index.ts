import {
    Request,
    Response
} from 'express'




export const responseHandler =  (controller) =>

 {

     return async (req: Request, res: Response) => {

             const reqData: any = {
                     body: req.body,
                     query: req.query,
                     params: req.params,
                     ip: req.ip,
                     method: req.method,
                     path: req.path,
                     headers: {
                       'Content-Type': req.get('Content-Type'),
                        Referer: req.get('referer'),
                      'User-Agent': req.get('User-Agent') }
                 };


                    try {
                        const {statusCode, body } = await controller(reqData);
                        const headers = { 'X-Powered-By' : 'TS-API'  , 'V-TAG' : '1.0.0' } ;
                        if(headers) { res.set(headers) }
                        res.type('json')
                        res.status(statusCode).send(body);                     
                    }
                    
                    catch (error)   {
                           // log the error 
                            res.status(500).send({
                                status: "error",
                                message: 'An unkown error occurred'
                            });
                         }

                }
     }
