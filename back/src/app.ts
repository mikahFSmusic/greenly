import express, { Express } from "express";
import mongoose from 'mongoose';
import bodyParser from "body-parser";
import cors from "cors";
import routes from "./routes"
require('dotenv').config();
const app: Express = express();
const PORT: string | number = process.env.PORT || 4000;

// Middleware
app.use((req, res, next) => { next(); }, cors({maxAge: 84600}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MongoDB Setup
const mongoURI: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.buvp8.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;
const options = { useNewUrlParser: true, useUnifiedTopology: true };

app.use(routes)

mongoose.set("useFindAndModify", false);

mongoose
  .connect(mongoURI, options)
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Server running on PORT: ${PORT}`)
    )
  })
  .catch(error => {
    throw error
  })
