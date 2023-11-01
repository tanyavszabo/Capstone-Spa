import { Router } from "express";
import Collab from "../models/collab.js";

const router = Router();

// Create  route
router.post("/", async (request, response) => {
  try {
    const body = request.body;
    const newCollab = Collab({});
    newCollab.creative = body.creative;
    newCollab.location = body.location;
    newCollab.gender = body.gender;
    newCollab.name = body.name;
    const data = await newCollab.save();

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    //Might have to rename the name below because i already have name defined.
    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});
// Get all collabs route
router.get("/", async (request, response) => {
  try {
    // Store the query params into a JavaScript Object
    const query = request.query; // Defaults to an empty object {}

    const data = await Collab.find(query);

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});
// Get a single Collab by ID
router.get("/:id", async (request, response) => {
  try {
    const data = await Collab.findById(request.params.id);

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// Delete a collab by ID
router.delete("/:id", async (request, response) => {
  try {
    const data = await Collab.findByIdAndRemove(request.params.id, {});

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// Update a single collab by ID
router.put("/:id", async (request, response) => {
  try {
    const body = request.body;

    const data = await Collab.findByIdAndUpdate(
      request.params.id,
      {
        $set: {
          crust: body.crust,
          cheese: body.cheese,
          sauce: body.sauce,
          toppings: body.age
        }
      },
      {
        new: true
      }
    );

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});

export default router;
