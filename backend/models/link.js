const mongoose = require("mongoose");

const LinkSchema = new mongoose.Schema(
  {
    link: {
      type: String,
      required: true,
    },
    shorten: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Link = mongoose.model("link", LinkSchema);

module.exports = {
  Link,
};
