function validateYAML(data, schema) {
  const ajv = new Ajv();
  const validate = ajv.compile(schema);
  const valid = validate(data);
  if (!valid) console.error(validate.errors);
  return valid;
}
