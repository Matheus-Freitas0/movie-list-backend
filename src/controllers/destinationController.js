const Destination = require('../models/destination');

exports.createDestination = async (req, res) => {
  const { name, description, visited, imageUrl } = req.body;
  try {
    const newDestination = await Destination.create({ name, description, visited, imageUrl });
    res.status(201).json(newDestination);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao adicionar destino', error });
  }
};

exports.getDestinations = async (req, res) => {
  try {
    const destinations = await Destination.findAll();
    res.status(200).json(destinations);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar destinos', error });
  }
};
