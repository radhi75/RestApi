const contact = require("../module/contact");
exports.ADDcontact = async (req, res) => {
  try {
    const newcontact = new contact(req.body);
    await newcontact.save();
    res.status(200).send({ msg: "contact added", newcontact });
  } catch (error) {
    res.status(500).send({ msg: "could not add contact" });
  }
};
exports.Getcontact = async (req, res) => {
  try {
    const contacts = await contact.find();
    res.status(200).send({ msg: "our collection", contacts });
  } catch (error) {
    res.status(500).send({ msg: "could not get contact" });
  }
};
exports.Deletecontact = async (req, res) => {
  try {
    const deletedcontact = await contact.findByIdAndDelete(req.params.id);
    res.status(200).send({ msg: "contact deleted" });
  } catch (error) {
    res.status(500).send({ msg: "cannot delete contact" });
  }
};
exports.Updatecontact = async (req, res) => {
  try {
    const updatedcontact = await contact.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).send({ msg: "contact updated" });
  } catch (error) {
    res.status(500).send({ msg: "could not update contact" });
  }
};
exports.Onecontact = async (req, res) => {
  try {
    const onecontact = await contact.findById(req.params.id);
    res.status(200).send({ msg: `hello from ${onecontact.name}`, onecontact });
  } catch (error) {
    res.status(500).send({ msg: "could not get contact" });
  }
};
