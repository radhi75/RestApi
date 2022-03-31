const express = require("express");
const {
  ADDcontact,
  Getcontact,
  Deletecontact,
  Updatecontact,
  Onecontact,
} = require("../controllers/contact");

const contactRoutes = express.Router();

contactRoutes.post("/", ADDcontact);
contactRoutes.get("/", Getcontact);
contactRoutes.delete("/:id", Deletecontact);
contactRoutes.put("/:id", Updatecontact);
contactRoutes.get("/:id", Onecontact);

module.exports = contactRoutes;
