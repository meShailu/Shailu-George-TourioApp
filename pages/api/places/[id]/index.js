import Place from "../../../../db/Models/Place.js";
import dbConnect from "../../../../db/connect.js";

export default async function handler(request, response) {
  const { id } = request.query;
  await dbConnect();

  if (!id) {
    return;
  }

  const place = await Place.findById(id);

  if (!place) {
    return response.status(404).json({ status: "Not found" });
  }

  response.status(200).json(place);
}
