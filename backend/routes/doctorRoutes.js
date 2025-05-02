const express = require('express');
const Doctor = require('../models/Doctor');
const router = express.Router();

// Add Doctor
router.post('/add-doctor', async (req, res) => {
  try {
    const doctor = new Doctor(req.body);
    await doctor.save();
    res.status(201).send(doctor);
  } catch (error) {
    res.status(400).send(error);
  }
});

// List Doctors
router.get('/list-doctor-with-filter', async (req, res) => {
  const { specialization, experience, page = 1, limit = 10 } = req.query;
  const filter = {};
  if (specialization) filter.specialization = specialization;
  if (experience) filter.experience = { $gte: experience };

  try {
    const doctors = await Doctor.find(filter)
      .skip((page - 1) * limit)
      .limit(parseInt(limit));
    const total = await Doctor.countDocuments(filter);

    res.json({
      data: doctors,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
