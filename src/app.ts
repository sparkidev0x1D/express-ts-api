import express from  'express';
import bodyParser from 'body-parser'
import path from 'path'
import fs from 'fs'
import apirouter   from './routes'
import { jsonErrorHandler ,handle404 } from './middlewares'
import morgan from 'morgan';
import swagger  from 'swagger-ui-express'
import cors  from 'cors'
import expressSanitized from '@nemospeculo/express-sanitized';

//Load Swagger DOC
const swaggerdoc = JSON.parse(fs.readFileSync(
                                path.resolve(__dirname, 'swagger.json'), 'UTF-8')
                                .replace(/\xAB/g, '<').replace(/\xBB/g, '>'));                             



const app: express.Application =  express();  
app.use(cors({ origin: '*' }))
app.disable('x-powered-by')
app.use(bodyParser.urlencoded({ extended: false  , limit : '200 kb'}))
app.use(bodyParser.json({limit : '200 kb'}))
app.use(expressSanitized())
app.use(jsonErrorHandler)
app.use(morgan('dev'))
app.use('/api',apirouter)
app.use('/api-docs' ,swagger.serve ,swagger.setup(swaggerdoc) )
app.use(handle404)

export default app

 

      
