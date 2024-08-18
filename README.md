# NPM-PACKAGE-TEMPLATE

[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)

A template for NPM packages in TypeScript.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Scripts](#scripts)
- [License](#license)
- [Acknowledgments](#Acknowledgments)

## Prerequisites

Ensure you have the following installed on your system:

- **Bun**: [Installation Documentation](https://bun.sh/docs/installation)
- **Node.js**: [Download and Installation](https://nodejs.org/)

Make sure both are added to your system's PATH.

## Installation

Clone the repository:

```bash
git clone https://github.com/Ram-Amoncar/npm-package-template.git your-package-name
```

Install dependencies:

```bash
bun install
```

## Scripts
- ```bun run build``` :arrow_right: Build the TypeScript code using tsup.
- ```bun run test``` :arrow_right: Run Jest tests.
- ```bun run test:watch``` :arrow_right: Run Jest tests in watch mode.
- ```bun run coverage``` :arrow_right: Run Jest tests with coverage.
- ```bun run format``` :arrow_right: Format code using Prettier.
- ```bun run format:check``` :arrow_right: Check if code is formatted using Prettier.
- ```bun run lint``` :arrow_right: Run ESLint for linting TypeScript files.
- ```bun run lint:fix``` :arrow_right: Run ESLint with the --fix flag to - - automatically fix linting issues.

## License
This project is licensed under the Unlicense - see the [LICENSE](UNLICENSE) file for details.

## Acknowledgments

- [Jest](https://jestjs.io/) :arrow_right: Delightful JavaScript Testing.
- [Tsup](https://tsup.egoist.sh/) :arrow_right: Zero-config TypeScript bundler.
- [TypeScript](https://www.typescriptlang.org/) :arrow_right: Typed superset of JavaScript.
- [Eslint](https://eslint.org/) :arrow_right: Pluggable linting utility for JavaScript and TypeScript.
- [Prettier](https://prettier.io/) :arrow_right: Opinionated code formatter.
- [Husky](https://typicode.github.io/husky/) :arrow_right: Git hooks made easy.
- [Bun](https://bun.sh) :arrow_right: Incredibly fast JavaScript runtime.