const mongoose = require("mongoose");

const AdaptDetailsScehma = new mongoose.Schema(
  {
    email: String,
    amt: String,
    

  },
  {
    collection: "AdaptInfo",
  }
);

mongoose.model("AdaptInfo", AdaptDetailsScehma);
