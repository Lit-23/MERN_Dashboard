// i didn't install body-parser because based on my research its not necessary in the current express version. I'll leave it here for now.
// import bodyParser from 'body-parser';

import express from 'express';
// import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
// import clientRoutes from "./routes/clients.js";
// import generalRoutes from "./routes/general.js";
// import managementRoutes from "./routes/management.js";
// import salesRoutes from "./routes/sales.js";

// Configuration
dotenv.config();
const app = express();

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
// i replaced the bodyParser.urlencoded() with express.urlencoded();
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Routes
// app.use("/clients", clientRoutes);
// app.use("/general", generalRoutes);
// app.use("/management", managementRoutes);
// app.use("/sales", salesRoutes);

// MONGOOSE SETUP
// const PORT = process.env.PORT || 9000;
// mongoose.connect(process.env.MONGO_URL, {
//   useNewUR
// })

// app.listen(3000, () => {
//   console.log('The server is running on PORT 3000')
// })