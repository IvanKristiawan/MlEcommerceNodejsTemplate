import Stok from "../models/StokModel.js";
// const axios = require('axios')
import axios from "axios";

export const getStoks = async (req, res) => {
  try {
    const stoks = await Stok.find();
    res.json(stoks);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

export const getStokById = async (req, res) => {
  try {
    const stok = await Stok.findById(req.params.id);
    let findRecommends = await axios.post(
      `http://localhost:5000/input/${stok.product_id}`
    );
    res.json([{"recommendation": findRecommends.data},{"product": stok}]);
  } catch (error) {
    // Error 404 = Not Found
    res.status(404).json({ message: error.message });
  }
};

export const saveStok = async (req, res) => {
  const stok = new Stok(req.body);
  try {
    const insertedStok = await stok.save();
    // Status 201 = Created
    res.status(201).json(insertedStok);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};
