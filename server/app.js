// 'Import' the Express module instead of http
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import collabs from "./routers/collabs.js";
// Load environment variables from .env file
dotenv.config();

// Initialize the Express application
const app = express();
const logging = (request, response, next) => {
  console.log(
    `${request.method} ${request.url} ${new Date().toLocaleString("en-us")}`
  );

  next();
};

// CORS Middleware
const cors = (req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Accept,Authorization,Origin"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
};

mongoose.connect(process.env.MONGODB, {
  // Configuration options to remove deprecation warnings, just include them to remove clutter
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection Error:"));
db.once(
  "open",
  console.log.bind(console, "Successfully opened connection to Mongo!")
);
// Handle the request with HTTP GET method from http://localhost:4040/status
app.get("/status", (request, response) => {
  // Create the headers for response by default 200
  // Create the response body
  // End and return the response
  // Old version of Service Healthy
  // response.send(JSON.stringify({ message: "Service is healthy" }));

  // New version of Service Healthy
  response.status(200).json({ message: "Service Healthy" });
});

app.use(cors);
app.use(express.json());
app.use(logging);

// app.get("/weather/:city", (request, response) => {
//   // Express adds a "params" Object to requests that has an matches parameter created using the colon syntax
//   const city = request.params.city;

//   // Set default values for the query strain
//   let cloudy = "clear";
//   let rainy = false;
//   let lowTemp = 32;

//   // check if the request.query.cloudy attribute exists
//   if ("cloudy" in request.query) {
//     // If so update the variable with the query string value
//     cloudy = request.query.cloudy;
//   }
//   if ("rainy" in request.query && request.query.rainy === "true") {
//     rainy = request.query.rainy;
//   }
//   if ("lowtemp" in request.query) {
//     lowTemp = Number(request.query.lowtemp);
//   }

//   // Generate a random number to use as the temperature
//   // Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values_inclusive
//   const min = 70;
//   const max = 90;
//   const temp = Math.floor(Math.random() * (max - min + 1) + min);
//   // handle GET request for weather with an route parameter of "city"
//   response.send(
//     JSON.stringify({
//       current: `The weather in ${city} is ${temp} degrees today.`,
//       cloudy: cloudy,
//       rainy,
//       temp: {
//         current: temp,
//         low: lowTemp
//       },
//       city
//     })
//   );
// });

app.use("/collabs", collabs);
const PORT = process.env.PORT || 4040;
// Tell the Express app to start listening
// Let the humans know I am running and listening on 4040
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
export default app;
