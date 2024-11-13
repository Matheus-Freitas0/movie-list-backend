const Plan = require('../models/plan');

exports.createPlan = async (req, res) => {
  const { title, description, date, imageUrl } = req.body;
  try {
    const newPlan = await Plan.create({ title, description, date, imageUrl });
    res.status(201).json(newPlan);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao adicionar plano', error });
  }
};

exports.getPlans = async (req, res) => {
  try {
    const plans = await Plan.findAll();
    res.status(200).json(plans);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar planos', error });
  }
};
