import supertest  from 'supertest'
import app from '../src/app'
import  dotenv from 'dotenv';
import path from 'path'
dotenv.config({ path :  path.resolve(__dirname, '../src/.env')});
const request = supertest(app)
//Connect to DB and redis 
// beforeAll(async (done) => {

//   try{
//    await  mssqlConnect();
//     await redisConnect();
//     done()
//   }

//   catch (err)
//   {
//    throw new Error  ("Redis/MSSQL  connection failed")
//   }
  

// })


describe('API  Test Suite 1 ', () =>
{

     
    //Check for status code and content type
    it('tesing ping ', async done =>
    {
            const response   = await request
            .get('/api/users/ping')

        expect(response.status).toBe(200)
        expect(response.header['content-type']).toEqual('application/json; charset=utf-8')

        done()
    })

    it('testing user api/id ', async done =>
    {
            const response   = await request
            .get('/api/users/24')

        expect(response.status).toBe(200)
        expect(response.header['content-type']).toEqual('application/json; charset=utf-8')
        done()
        
    })





})



//   afterAll(async(done) => {
 
//     try {

//         await global.redisCache.disconnect();
//         await global.dbconnect.close();
//         done();
       
        
//     }
//     catch (err) {
//         process.exit(0);

//     }
        
//   })

