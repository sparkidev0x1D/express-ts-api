import path from 'path'
export const  handle404 = (req,res): void =>
{
     res.status(404).sendFile( path.resolve(__dirname + '../../../infra/404page/404.html'));


} 


