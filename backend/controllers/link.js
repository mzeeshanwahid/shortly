const { Link } = require("../models/link");
const { validateLink } = require("../validators/link");
const shortid = require("shortid");

async function createShortLink(req, res, next) {
  try {
    let { error, value } = validateLink(req.body);

    if (error) {
      return res.status(400).json({ message: "Invalid URL", error });
    }

    const createBody = {
      link: value.link,
      shorten: shortid.generate().toLowerCase(),
    };

    const createRecord = await Link.create(createBody);
    res.status(201).json({ message: "Done", data: createRecord });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function getLink(req, res, next) {
  try {
    const record = await Link.findOne({
      shorten: req.params.link.toLowerCase(),
    });

    if (!record) {
      return res.status(404).json({ message: "No link found" });
    }

    res.status(200).json({ message: "Done", data: record });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = {
  createShortLink,
  getLink,
};
