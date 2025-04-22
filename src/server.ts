
import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db";
import routes from "./routes";
 

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json()); // Middleware (e.g. for JSON parsing)

connectDB(); // Connect to MongoDB

// app.get("/", async (req: Request, res: Response) => {
//   	await User.create({ name: "Test User 2", email: "test2@example.com" });
//   	res.send("Hello from TypeScript + Express!");
// });



app.use("/api",routes); // register all routes 


app.listen(PORT, () => {
  	console.log(`Server is running on http://localhost:${PORT}`);
});
