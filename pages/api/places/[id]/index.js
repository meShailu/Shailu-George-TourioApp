import Place from "../../../../db/Models/Place.js";
import dbConnect from "../../../../db/connect.js";

export default async function handler(request, response) {
  const { id } = request.query;
  await dbConnect();

  if (!id) {
    return;
  }

  const place = await Place.findById(id);

  if (request.method === "PATCH") {
    await Place.findByIdAndUpdate(id, {
      $set: request.body,
    });
    return response.status(200).json("place updated successfully");
  }

  if (!place) {
    return response.status(404).json({ status: "Not found" });
  }

  response.status(200).json(place);

  if (request.method === "DELETE") {
    const placeToDelete = await Place.findByIdAndDelete(id);

    response.status(200).json(placeToDelete);
  }
}
