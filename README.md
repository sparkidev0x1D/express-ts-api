# Express-TS-BoilerPlate-API


Express TS API (Supports Debugging with vs-code)


      
      npm i                   #  Install all the packages 
      npm run dev             #  Running on dev 
      npm run build           #  Builds and transpiles to Javascript 
      npm run debug           #  Debug with chrome 
      npm run test            #  to run test suite 
      npm run test-generate   #  to Generate Coverage Report on performed tests 



 
  # Routes
  /**api**   - Parent route


     Routes are exported as single instance , which contains all the child routes 
     that will be initiated by the init() method  
           
   # src/controller

    - Controller Layer for handling http calls


   # src/drivers

    - Database and other external connections driver pre configured


   # src/helpers

    - helper functions for controllers and data repository

   # src/middlewares

    - Middlewares for the API routes


   # src/models

    - Models required for database operations


   # src/query-builder

    - Query builder for constructing raw queries for RDBMS 

   # src/data-repositories

    - Database access layer

   # src/response-handler

    - Common response handler for http 

   # src/routes

    - Common Route controller  


   # /tests

    - API test cases  

