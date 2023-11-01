import mongoose from "mongoose";

const collabSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  creative: {
    type: String,
    required: true,
    enum: ["model", "photographer", "stylist", "makeup-artist"]
  },
  location: {
    type: String,
    required: true,
    enum: ["statenisland", "bronx", "manhattan", "queens", "brooklyn"]
  },
  gender: {
    type: String,
    required: true,
    enum: ["male", "female"]
  }
});

const Collab = mongoose.model("Collab", collabSchema);

export default Collab;
