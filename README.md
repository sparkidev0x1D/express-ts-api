# Express-TS-BoilerPlate-API


Express TS API 


      
      npm i                   #  Install all the packages 
      npm run dev             #  Running on dev 
      npm run build           #  Build to js with js map 
      npm run debug           #  Debug with chrome 
      npm run test            #  to run test suite 
      npm run test-generate   #  to Generate Coverage Report on performed tests 

  

launch.json is preconfigured for debugging with vs-code

 
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

