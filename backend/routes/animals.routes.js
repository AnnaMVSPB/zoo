const router = require('express').Router();
const { Animal } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const animals = await Animal.findAll();
    res.status(200).json(animals);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const animal = await Animal.findOne({ where: { id } });
    res.json(animal);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

router.post('/', async (req, res) => {
  try {
    const {
      type, img, description, price,
    } = req.body;
    if (type && img && description && price) {
      const animal = await Animal.create({
        type,
        img,
        description,
        price,
        user_id: 1,
      });
      res.json(animal);
    }
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Animal.destroy({ where: { id } });
    res.json(result);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const {
      type, img, description, price,
    } = req.body;
    if (type && img && description && price) {
      const animal = await Animal.findOne({ where: { id: Number(id) } });
      animal.type = type;
      animal.img = img;
      animal.description = description;
      animal.price = price;
      animal.save();
      res.json(animal);
    }
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

module.exports = router;
