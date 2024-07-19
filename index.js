import express from 'express';
import dotenv from 'dotenv';
dotenv.config()


import { gethealth } from './controllers/health.js';
import { deletePlantId, getPlantId, getPlants, postPlant, putPlantId } from './controllers/plant.js';
import { errorHandler } from './controllers/errors.js';
import mongoose from 'mongoose';


const app = express();
app.use(express.json());

const dbconnection = async () => {
  const conn = await mongoose.connect(process.env.DB_URL)

  if (conn) {
    console.log(`Connected to MongoDB`);
  }
  else {
    console.log("Failed to connect to MongoDB");

  }
}

dbconnection()

const plants = [
  {
    "id": 1,
    "name": "Mogra",
    "category": "indoor",
    "image": "https://identity.getpostman.com/images/logo-postman.svg",
    "price": 280,
    "description": "This is a flower 🌸"
  },
  {
    "id": 2,
    "name": "Rose",
    "category": "outdoor",
    "image": "https://example.com/rose.jpg",
    "price": 350,
    "description": "This is a beautiful flower 💐"
  },
  {
    "id": 3,
    "name": "Lily",
    "category": "indoor",
    "image": "https://example.com/lily.jpg",
    "price": 220,
    "description": "This is a lovely flower 💮"
  }
];

app.get("/health", gethealth)
app.post('/plant', postPlant);
app.get('/plants', getPlants);
app.get('/plant/:id', getPlantId)
app.put('/plant/:id', putPlantId)
app.delete('/plant/:id', deletePlantId)
app.use("*", errorHandler)

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

