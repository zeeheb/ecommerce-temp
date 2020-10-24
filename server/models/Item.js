const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({

  preco: {
    type: Number
  },

  descricao: {
    type: String
  }
});

module.exports = Item = mongoose.model("Item", ItemSchema);