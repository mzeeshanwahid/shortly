const Joi = require("joi");

function validateLink(body) {
  const schema = Joi.object({
    link: Joi.string().trim(true).pattern(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/).required(),
  });

  let { error, value } = schema.validate(body);

  if (error) {
    error = error.details[0].message;
  }

  return { error, value };
}

module.exports = {
  validateLink,
};
