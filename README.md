Repository for a group project in a web application development course in University of Tartu.

Team members:
- Osvald
- Leo-Martin
- Robyn

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Ozzuke/webtest.git
   cd webtest
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

### Starting the Development Server

To start the development server, run the following command:
```bash
npm run serve
```

This will start the development server and you can access the application at `http://localhost:8080`.

## Deploying to GitHub Pages

1. Ensure you're on the main branch and have the latest changes:
   ```bash
   git checkout main
   git pull origin main
   ```

2. Make sure all dependencies are installed (including gh-pages):
   ```bash
   npm install
   ```

3. Build the project:
   ```bash
   npm run build
   ```

4. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

5. Push local changes:
   ```bash
   git push origin main
   ```

Notes:
- The `deploy` script will update the `gh-pages` branch with the contents of the `dist` folder on your local computer
- GitHub Pages will use the `gh-pages` branch to serve the static files
- The deployment will take a few minutes

## Running Tests

### Running Unit Tests

To run the unit tests using Jest and Supertest, follow these steps:

1. Ensure you have all dependencies installed:
   ```bash
   npm install
   ```

2. Run the tests:
   ```bash
   npm test
   ```

### Running Cross-Browser Tests

To run cross-browser tests using BrowserStack, follow these steps:

1. Ensure you have all dependencies installed:
   ```bash
   npm install
   ```

2. Set up your BrowserStack credentials in the environment variables:
   ```bash
   export BROWSERSTACK_USERNAME=your_browserstack_username
   export BROWSERSTACK_ACCESS_KEY=your_browserstack_access_key
   ```

3. Run the cross-browser tests:
   ```bash
   npm run test:cross-browser
   ```
