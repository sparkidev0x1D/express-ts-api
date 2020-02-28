// Reusable Function for  Redis Crud Operations

export const CheckinCache = async (key) =>
{
    try
    {

        const resp = await global.redisCache.get(key);

        return resp ? JSON.parse(resp) : null;
    }


    catch (err)
    {
        //handle_with prometheus
        console.log(err)
        return null

    }


}


export const SetinCache = async (key, value, ttl = process.env.REDIS_TTL) =>
{

    try
    {
   
        const resp = await global.redisCache.set(key, JSON.stringify(value), "EX", ttl);
        return resp
    }


    catch (err)
    {
        console.log(err);
    }

}


export const PurgeinCache = async (key) =>
{

    try
    {

        const resp = await global.redisCache.del(key);
    }


    catch (err)
    {
        console.log(err);
    }

}