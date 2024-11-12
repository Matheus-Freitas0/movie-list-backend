const Photo = require('../models/photo');

exports.createPhoto = async (req, res) => {
  const { url, description, relatedTo, relatedId } = req.body;
  try {
    const newPhoto = await Photo.create({ url, description, relatedTo, relatedId });
    res.status(201).json(newPhoto);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao adicionar foto', error });
  }
};

exports.getPhotos = async (req, res) => {
  try {
    const photos = await Photo.findAll();
    res.status(200).json(photos);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar fotos', error });
  }
};
