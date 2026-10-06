import Ajv from 'ajv/dist/2020.js';
import userProfileSchema from './schemas/user-profile.schema.json' with { type: 'json' };
import userProfile from './data/user-profile.json' with { type: 'json' };

const ajv = new Ajv();

const validate = ajv.compile(userProfileSchema);

const valid = validate(userProfile);

console.log(valid);

if (!valid) {
  console.log(validate.errors);
}
