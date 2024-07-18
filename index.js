import express from 'express';
import dotenv from 'dotenv';
dotenv.config()
const app = express();
app.use(express.json()); // added parentheses to call the function
const port = process.env.PORT;

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

app.post('/plant', (req, res) => {
  const {
    name,
    category,
    image,
    price,
    description
  } = req.body;

  const randomID = Math.round(Math.random() * 10000);

  const newPlant = {
    id: randomID,
    name: name,
    category: category,
    image: image,
    price: price,
    description: description
  };

  plants.push(newPlant);
  res.json({
    success: true,
    data: newPlant,
    message: "New plant added"
  });
});

app.get('/plants', (req, res) => {
  res.json({
    success: true,
    data: plants,
    message: "All plants fetched!!"
  });
});

app.get('/plant/:id', (req, res) => {
  const { id } = req.params

  const plant = plants.find((p) => p.id === parseInt(id))

  res.json({
    success: plant ? true : false,
    data: plant || null,
    message: plant ? "Plant successfully created." : "Plant not found."
  });
})

app.put('/plant/:id', (req, res) => {
  const {
    name,
    category,
    image,
    price,
    description
  } = req.body;

  const { id } = req.params

  let index = -1

  plants.forEach((plant, i) => {
    if (plant.id == parseInt(id)) {
      index = i
    }
  })

  const newObj = {
    id: parseInt(id),
    name,
    category,
    image,
    price,
    description
  }

  if (index == -1) {
    return res.json({ success: false, message: `Plant not found for id ${id}.`, data: null })
  }
  else {
    plants[index] = newObj
    return res.json({ success: true, message: "Plant updated successfully.", data: newObj })
  }
})


app.delete('/plant/:id', (req, res) => {

  const { id } = req.params

  let index = -1

  plants.forEach((plant, i) => {
    if (plant.id == id) {
      index = i
    }
  })

  if (index == -1) {
    return res.json({
      success: false,
      message: `Plant not found for id ${id}.`,
      data: null
    })
  }
  plants.splice(index, 1)
  res.json({ success: true, message: "Plant deleted successfully.", data: null })
  console.log('agaya');
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});