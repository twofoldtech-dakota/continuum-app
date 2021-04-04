var faunadb = require('faunadb'),
  q = faunadb.query;
var faunaClient = new faunadb.Client({ secret: process.env.NEXT_PUBLIC_FAUNADB_SECRET });
var authClient = (secret) => new faunadb.Client({ secret });
 
export default async function handler(req, res) {
    try {
        //SavedCourse Object, this is what we need to create
        // name: String!
        // provider: String!
        // date: String!
        // hours: Int
        // governingAgency: String!
        // saved: Boolean
        // owner: String!
        // username: String!
        // description: String
        // user: User! @relation
        // contactName: String
        // contactPhone: String
       // var id = req.query?.id
       console.log("save course api call");
        console.log(req);
        console.log(req.query);

       console.log(id);
      // const saveCourse = await faunaClient.query(
      //   q.Update(
      //     q.Ref(q.Collection('Course'), id),
      //     { data: { saved: true } },
      //   )
      //   );
      // ok
      // console.log("root data");
      //console.log(saveCourse.data);
      //res.status(200).json(saveCourse.data);
    } catch (e) {
      // something went wrong
      res.status(500).json({ error: e.message });
    }
  };