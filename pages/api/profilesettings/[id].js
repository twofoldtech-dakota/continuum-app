var faunadb = require('faunadb'),
  q = faunadb.query;
var faunaClient = new faunadb.Client({ secret: process.env.NEXT_PUBLIC_FAUNADB_SECRET });
var authClient = (secret) => new faunadb.Client({ secret });
 
export default async (req, res) => {
    const {
      query: { id },
    } = req;
  
    const { username, email } = req.body;
    try {
      await faunaClient.query(
        q.Update(q.Ref(q.Collection('User'), id), {
          data: {
            username,
            email
            // telephone,
            // creditCard: {
            //   number: creditCardNumber,
            // },
          },
        })
      );
      res.status(200).end();
    } catch (e) {
        console.log(e.message);
      res.status(500).json({ error: e.message });
    }
  };