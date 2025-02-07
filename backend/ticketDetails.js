const mongoose = require("mongoose");

const TicketDetailsScehma = new mongoose.Schema(
  {
    name: String,
    date: String,
    adult: String,
    amount: String,
    

  },
  {
    collection: "TicketInfo",
  }
);

mongoose.model("TicketInfo", TicketDetailsScehma);
