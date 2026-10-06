# codewars-api-schemas-tests

Tests for [`@codewarstools/codewars-api-schemas`](https://github.com/CodewarsTools/codewars-api-schemas).

The tests validate Codewars API data against the JSON Schemas provided by the published npm package.

## Requirements

* Node.js
* npm

## Installation

```bash
npm install
```

## Run tests

```bash
node validate.js
```

The tests validate the following schemas:

* `user/profile.schema.json`
* `user/authored-challenges.schema.json`
* `user/completed-challenges.schema.json`
* `challenges/challenge.schema.json`

Test data is stored in the `data` directory.

## Dependencies

* [`@codewarstools/codewars-api-schemas`](https://www.npmjs.com/package/@codewarstools/codewars-api-schemas) — JSON Schemas for Codewars API
* [`ajv`](https://ajv.js.org/) — JSON Schema validator for JavaScript
* [`ajv-formats`](https://www.npmjs.com/package/ajv-formats) — additional format validation for AJV

## API Documentation

The schemas are based on the official Codewars API documentation:

* [Users API](https://dev.codewars.com/#users-api)
* [Code Challenges API](https://dev.codewars.com/#code-challenges-api)

## JSON Schema

The schemas use the [JSON Schema Draft 2020-12](https://json-schema.org/draft/2020-12) specification.

For the official JSON Schema specification, see [json-schema.org](https://json-schema.org/specification).

## Purpose

This repository is used to verify that the published JSON Schemas correctly validate Codewars API data.

The schemas themselves are maintained in the [`codewars-api-schemas`](https://github.com/CodewarsTools/codewars-api-schemas) repository.

## License

MIT
