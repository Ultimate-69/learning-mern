require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors(
  {
    origin: 'https://learning-mern-five.vercel.app/',
    credentials: true
  }
));

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/workouts", workoutRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        `listening on port ${process.env.PORT}: http://localhost:${process.env.PORT}`
      );
    });
  })
  .catch((err) => console.log(err));
