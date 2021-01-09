//const axios = require('axios');
const faunadb = require('faunadb');
const faunaClient = new faunadb.Client({ secret: process.env.NEXT_PUBLIC_FAUNADB_SECRET });

const sendQuery = async ({query}) => {
    return console.log("send query");
};
// try{
//     const {
//         data: { data, errors },
//     } = await axios({
//         url: 'https://graphql.fauna.com/graphql',
//         method: 'POST',
//         headers: {
//             Authorization: `Bearer ${process.env.NEXT_PUBLIC_FAUNADB_SECRET}`,
//         },
//         data: {
//             query,
//             variables,
//         },
//     });
//     console.log(data);
//     if (errors) {
//         console.error(errors);
//         throw new Error('Something went wrong');
//     }
//     return data;
// }
// catch(error)
// {
//     console.error(error);
//         throw new Error('Something went wrong');
//         return null;
// }
    
    
 //};