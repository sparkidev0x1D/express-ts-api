// Try to create a global variable for data drivers

import ioredis  from 'ioredis'
import bluebird from 'bluebird'
const redis = bluebird.promisifyAll(ioredis)
const redisParams = {

host : process.env.REDIS_URL,
port : process.env.REDIS_PORT ,
family: 4
}

export const redisConnect = async () =>
{
    //Setting Redis as Global Variable
    global['redisCache'] = await new redis(redisParams);
    console.log('\x1b[36m',"Connected to redis\n");

}

