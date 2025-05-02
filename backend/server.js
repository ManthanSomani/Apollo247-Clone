const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const doctorRoutes = require('./routes/doctorRoutes');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

console.log(process.env.MONGO_URI)
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
connectDB();

app.use('/api', doctorRoutes);

app.listen(process.env.PORT, () => {
  console.log('Backend running on http://localhost:4000');
});
