import express from 'express';
import dotenv from 'dotenv';
dotenv.config()


import { gethealth } from './controllers/health.js';
import { deletePlantId, getPlantId, getPlants, postPlant, putPlantId } from './controllers/plant.js';
import { errorHandler } from './controllers/errors.js';


const app = express();
app.use(express.json()); // added parentheses to call the function


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

