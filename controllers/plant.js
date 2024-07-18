const postPlant = (req, res) => {
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
}

const getPlants = (req, res) => {
    res.json({
        success: true,
        data: plants,
        message: "All plants fetched!!"
    });
}

const getPlantId = (req, res) => {
    const { id } = req.params

    const plant = plants.find((p) => p.id === parseInt(id))

    res.json({
        success: plant ? true : false,
        data: plant || null,
        message: plant ? "Plant successfully created." : "Plant not found."
    });
}

const putPlantId = (req, res) => {
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
}

(req, res) => {

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
}

const deletePlantId = (req, res) => {

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
  }

export {
    postPlant,
    getPlants,
    getPlantId,
    putPlantId,
    deletePlantId,
    

}