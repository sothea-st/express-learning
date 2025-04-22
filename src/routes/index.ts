 
import { Router } from 'express';
import fs from 'fs';
import path from 'path';

const router = Router();
const routesPath = path.join(__dirname, '../features');

// Loop through features folders and load route files automatically
fs.readdirSync(routesPath).forEach((folder) => {
  const routePath = path.join(routesPath, folder, `${folder}.controller.ts`);
  if (fs.existsSync(routePath)) {
    const route = require(routePath).default;
    router.use(route); // Mount the route
  }
});

export default router;