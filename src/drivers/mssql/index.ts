// How to Connect to DB

// /* eslint-disable @typescript-eslint/no-explicit-any */
// import
// {
//     createConnection
// }
// from "typeorm";

// import path from 'path'





// const dbparams: any = {

//     type: "mssql",
//     // tslint:disable-next-line: object-literal-sort-keys
//     host: process.env.DBHOST,
//     username: process.env.DBUSER,
//     password: process.env.DBPASS,
//     database: process.env.DB,
//     pool:
//     {
//         min: 10,
//         // tslint:disable-next-line: object-literal-sort-keys
//         max: 20
//     },
//     // synchronize: true,
//     // connectionTimeout : 160,
//     entities: [path.resolve(__dirname, '../../') + '/models/*{.ts,.js}'],
// }


// // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
// export const mssqlConnect = async () =>
// {
   
    
//     global['dbconnect'] = await createConnection(dbparams)
//     console.log('\x1b[36m%s\x1b[0m',"Connected to database\n")
    
// }