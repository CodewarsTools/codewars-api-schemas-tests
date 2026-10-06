import Ajv from 'ajv/dist/2020.js';
import addFormats from 'ajv-formats';

import userProfileSchema from '@codewarstools/codewars-api-schemas/schemas/user/profile.schema.json' with {
  type: 'json',
};
import userAuthoredSchema from '@codewarstools/codewars-api-schemas/schemas/user/authored-challenges.schema.json' with {
  type: 'json',
};
import userCompletedSchema from '@codewarstools/codewars-api-schemas/schemas/user/completed-challenges.schema.json' with {
  type: 'json',
};
import challengeSchema from '@codewarstools/codewars-api-schemas/schemas/challenges/challenge.schema.json' with {
  type: 'json',
};

import userProfile from './data/user/profile.json' with { type: 'json' };
import userAuthored from './data/user/authored-challenges.json' with { type: 'json' };
import userCompleted from './data/user/completed-challenges.json' with { type: 'json' };
import challenge from './data/challenges/challenge.json' with { type: 'json' };

const ajv = new Ajv();

addFormats(ajv);

const tests = [
  {
    name: 'profile.schema.json',
    schema: userProfileSchema,
    data: userProfile,
  },
  {
    name: 'authored-challenges.schema.json',
    schema: userAuthoredSchema,
    data: userAuthored,
  },
  {
    name: 'completed-challenges.schema.json',
    schema: userCompletedSchema,
    data: userCompleted,
  },
  {
    name: 'challenge.schema.json',
    schema: challengeSchema,
    data: challenge,
  },
];

for (const { name, schema, data } of tests) {
  const validate = ajv.compile(schema);
  const valid = validate(data);

  console.log(`${name}: ${valid}`);

  if (!valid) {
    console.log(validate.errors);
  }
}