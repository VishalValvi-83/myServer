import express from 'express';
import dotenv from 'dotenv';
dotenv.config()
import cors from 'cors'


import { gethealth } from './controllers/health.js';
import { deletePlantId, getPlantId, getPlants, postPlant, putPlantId } from './controllers/plant.js';
import { errorHandler } from './controllers/errors.js';
import mongoose from 'mongoose';


const app = express();
app.use(express.json());
app.use(cors())
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



app.get("/health", gethealth)
app.get("/", (req, res) => {

  res.send(
    `<div>
    <h1 style="text-align: center; color : green;" >Home Page <br/><a href="/plants">All Plants</a></h1>
    
    </div>`
  )

})
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

