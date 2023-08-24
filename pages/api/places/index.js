import dbConnect from "../../../db/connect";
import Place from "../../../db/Models/Place";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    try {
      const places = await Place.find();
      // console.log(places);
      return response.status(200).json(places);
    } catch (error) {
      return response.status(405).json({ message: "Method not allowed" });
    }
  }

  if (request.method === "POST") {
    try {
      const placeData = request.body;

      const place = new Place(placeData);

      await place.save();

      response.status(201).json({ status: "Place created" });
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  }
}
