Repository for a group project in a web application development course in University of Tartu.

Team members:
- Osvald
- Leo-Martin
- Robyn

Yes, that's a good, concise guide for your teammates. It covers the essential steps for manual deployment. However, to make it even more comprehensive and foolproof, you might want to expand it slightly. Here's an enhanced version:

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
