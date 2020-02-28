export {};
declare global {
    namespace NodeJS {
      interface Global {
        dbconnect: any;
        redisCache: any;
          
      }
    }
  }