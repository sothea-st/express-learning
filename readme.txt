
 Step-by-Step: Create Express Project

 1. Create a New Project Folder
 mkdir my-express-app
 cd my-express-app

 2. Initialize npm (to create package.json)

 npm init -y
 This will create a package.json file with default values.

 3. Install Express

 npm install express

 4. Create Main File (e.g. server.js)
 Create a file named server.js and add:

 // server.ts
 const express = require('express');
 const app = express();
 const PORT = 3001;

 app.get('/', (req, res) => {
 res.send('Hello from Express!');
 });

 app.listen(PORT, () => {
 console.log(`Server running on http://localhost:${PORT}`);
 });

 5. Install TypeScript + Node types

 npm install --save-dev typescript ts-node @types/node @types/express

 6. config package.json

 "scripts": {
 "dev": "ts-node src/server.ts",
 "build": "tsc",
 "start": "node dist/server.js"
 }

 7. Initialize TypeScript config

 npx tsc --init
 tsconfig.json was created
 config tsconfig.json
 {
 "compilerOptions": {
 "target": "ES2020",
 "module": "CommonJS",
 "outDir": "dist",
 "rootDir": "src",
 "strict": true,
 "esModuleInterop": true,
 "forceConsistentCasingInFileNames": true,
 "skipLibCheck": true
 }
 }

 8. Run the Server

 npm run dev => For development
 npm run build => For production
 npm start  => For production

 Server running on http://localhost:3001
 Open your browser and visit http://localhost:3001

 ======== Step-by-Step: Connect Express + TypeScript to MongoDB ========
 1. Install MongoDB Driver (Mongoose)
 npm install mongoose
 npm install --save-dev @types/mongoose
 2. Create a MongoDB Connection File
 create path src/config/db.ts

 import mongoose from 'mongoose';
 const connectDB = async () => {
 try {
 await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/mydb');
 console.log('✅ MongoDB connected');
 } catch (err) {
 console.error('❌ MongoDB connection failed:', err);
 process.exit(1);
 }
 };
 export default connectDB;
 3. create .env File for Mongo URI in root project
 .env

 add MONGO_URI=mongodb://localhost:27017/mydb to .env
 for MongoDB atlas MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/mydb?retryWrites=true&w=majority
 4. Install dotenv
 npm install dotenv
 In server.ts, load it at the top:

 import dotenv from 'dotenv';
 dotenv.config();
 5. Use the DB Connection in server.ts
 import connectDB from './config/db';
 const PORT = process.env.PORT || 3001;
 app.use(express.json());
 connectDB();

