import mongoose from "mongoose";

const StokSchema = new mongoose.Schema({
    product_id: {type: Number},
    category_id: {type: Number},
    price: {type: Number},
})

export default mongoose.model('stoks', StokSchema);