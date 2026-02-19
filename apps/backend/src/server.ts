import app from "./app.js";
import dotenv from 'dotenv';

dotenv.config();



const PORT = process.env.PORT || 4000;

// connectDB();

app.listen(PORT, () => {
  console.log(`Backend running on portssss ${PORT}`);
});

