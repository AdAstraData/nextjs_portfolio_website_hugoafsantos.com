import clientPromise from "../../../lib/mongodb";

export default async (req, res) => {
   try {
       const client = await clientPromise;
       const db = client.db("riotwatcher_api_fetch_data");

       const featured_match = await db
           .collection("featured_match_euw1")
           .find({})
           .limit(10)
           .toArray();

       res.json(featured_match);
   } catch (e) {
       console.error(e);
   }
};
