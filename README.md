# Cypress Tests for Magento Luma E-commerce

This project uses Docker to run Cypress end-to-end tests for a Magento-based application. Follow the instructions below to set up and run the tests using Docker.

### Prerequisites

Ensure the following dependencies are installed:

- Node.js
- Docker (optional for containerized env.)
- Docker-compose (optional for containerized env.)

### Installation

1. **Clone the repository:**

   ```bash
   git clone git@github.com:gugadbrosa/cypress-magento.git
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Install Cypress**

   ```bash
   npx cypress install
   ```

### Running tests

On this project, you have three options of running our tests.

#### 1. Locally

You can run tests locally using `npm test` for chrome as default browser or run tests on selected browser with:

`test:chrome` for chrome execution

`test:firefox` for firefox execution

`test:edge` for edge execution

`testelectron` for electron execution

#### 2. Running Tests with Docker

If you prefer to run the tests in an isolated environment using Docker, follow these steps.

Build the Docker image using the following commands:

```bash
docker-compose build
docker-compose up
```

#### 3. Running Tests with GithubActions

It's possible to check the CI runs for every push.

The CI runs chrome and firefox browser as default.

### Project Structure

### CI

The project uses [GitHub Actions](https://docs.github.com/en/actions) and tests are run automatically on PRs and on merge to `main` branch.
