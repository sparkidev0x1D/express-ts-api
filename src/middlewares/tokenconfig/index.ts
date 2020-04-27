import fs from 'fs'
import path from 'path'
import * as jwt from 'jsonwebtoken'

class TokenConfig
{

    private certk: Buffer = fs.readFileSync(path.resolve(__dirname, '../../infra/rsa.key'));
    private certp: Buffer = fs.readFileSync(path.resolve(__dirname, '../../infra/rsa.pub'));



    public encode(payload, jti, expiry='5m')
    
    {


        return new Promise <string> ((resolve, reject) =>
        {

            try
            {
                const sign: string = jwt.sign(payload, this.certk,
                {
                    issuer: 'NODE',
                    audience :'web.node.com',
                    algorithm: 'RS256',
                    expiresIn: expiry,
                    jwtid : jti 
                });
                resolve(sign);
            }
            catch (err)
            {
                reject(err);
            }

        })



    }


    public decode(token: string)
    {

        return new Promise((resolve, reject) =>
        {

            try
            {
                const userdata = jwt.verify(token, this.certp,
                {
                    algorithms: ['RS256'],
                    issuer:'NODE',
                    
                    
                });
                resolve(userdata);
            }
            catch (err)
            {
                reject(err);
            }
        })
    }

}
export const tokenConfig  =   new TokenConfig()


