import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import 'dotenv/config';
import router from './routes/routes.js';
import connectDB from "../src/db/index.js"
import leadRoutes from './modules/leads/lead.routes.js';



const app = express();

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


// Connect to Database
connectDB();


// Routes
// Auth 
app.use('/api', router);

// Lead Management
app.use('/api/leads', leadRoutes);

export default app;
