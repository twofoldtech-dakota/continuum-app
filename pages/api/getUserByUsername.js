var faunadb = require('faunadb'),
  q = faunadb.query;
var faunaClient = new faunadb.Client({ secret: process.env.NEXT_PUBLIC_FAUNADB_SECRET });
var authClient = (secret) => new faunadb.Client({ secret });
 
export default async function handler(req, res) {
    try {

      const userData = await faunaClient.query(
        q.Map(
          // iterate each item in result
          q.Paginate(
            // make paginatable
            q.Match(
              // query index
              q.Index('api-getUserByUsername'),
              q.ToString(req.query?.username)
               // specify source
            ),{size: 10000}
          ),
          (ref) => q.Get(ref) // lookup each result by its reference
        )
      );
      // ok
      // console.log("root data");
      //console.log(userData.data);
      res.status(200).json(userData.data);
    } catch (e) {
      // something went wrong
      res.status(500).json({ error: e.message });
    }
  };