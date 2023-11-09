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
    enum: ["Model", "Photographer", "Stylist", "Makeup-Artist"]
  },
  location: {
    type: String,
    required: true,
    enum: ["Statenisland", "Bronx", "Manhattan", "Queens", "Brooklyn"]
  },
  gender: {
    type: String,
    required: true,
    enum: ["Male", "Female"]
  },

  message: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  photo: {
    type: String,
    required: false
  }
});

const Collab = mongoose.model("Collab", collabSchema);

export default Collab;
