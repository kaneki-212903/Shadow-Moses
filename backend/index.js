require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/auth");
const { createUserProfile } = require('./controllers/profilecontroller');
const uploadcontrol = require('./controllers/uploadcontrol');
const authtoken = require('./middlewares/authtoken');
const morgan = require("morgan");

const app = express();

// database connection
connection();

// middlewares
app.use(express.json());
const corsOptions = {
    origin: 'http://localhost:3000',
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
  };
  
app.use(cors(corsOptions));
app.use((req, res, next) => {
  // Log the headers of the incoming request
  console.log('Request Headers:', req.headers);

  // Move to the next middleware in the chain
  next();
});
app.use(morgan("dev"));
// routes
app.post('/upload',authtoken,uploadcontrol.upload.single('image'), createUserProfile);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));