const app = require("./app");
const connectDB = require("./config/db");


require('dotenv').config({path:"config/dev.env"});
connectDB();
const port = process.env.port;

app.listen(port, () => {
    console.log(`Running on port ${port}`);
})


