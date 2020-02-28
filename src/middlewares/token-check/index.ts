export const Tokencheck = (req,res,next)=>{


    if(req.headers['x-auth'])
    {
        req.token = req.headers['x-auth'];
        req.type   = 'access';
        next()
    }


    else
    {
       res.status(403) .jsonp({  message: "Unauthorized access" }) ;
       res.end();
    }
}