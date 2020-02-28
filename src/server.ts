/*
** Please Follow the import structure ** 
Load the path module 
import dotenv module
configure env 
import express app
*/
import path from 'path'
import  dotenv from 'dotenv';
dotenv.config({ path :  path.resolve(__dirname, '.env')});
import app from './app'

// import drivers if needed
// import
// {
//     mssqlConnect,
//     redisConnect
// }
// from './drivers'



// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
async function startserver()
{


    try
    {

        // Connect to Mssql DB and Assign global variable "dbconnect" as driver load 
        // await mssqlConnect()

        // Connect to Redis and Assign global variable "redisCache" as driver
        // await redisConnect()
        

        const port = process.env.PORT || 4500;
       


        app.listen(port, () => console.log( '\x1b[32m', `app listening on port : ${port}`))

    }
    catch (error)
    {
        // tslint:disable-next-line: no-console
        console.log('\x1b[31m',error);
        process.exit(0)
    }


}

startserver()