const express = require('express');
const mongoose = require('mongoose');
const budgetRoutes = require('./routes/BudgetRoutes')
const expenseRoutes = require('./routes/ExpensesRoutes')
require('dotenv').config();

// Initialize the Express app
const app = express();

// Middleware
app.use(express.json()); // Parse incoming JSON requests

// Validate environment variables
if (!process.env.PORT_NUMBER || !process.env.MONGOOSE_URI) {
    console.error('Error: Missing required environment variables. Please check .env file.');
    process.exit(1); // Exit process if critical env variables are missing
}

// Connect to the database
mongoose.connect(process.env.MONGOOSE_URI)
    .then(() => {
        console.log('Connected to database successfully');

        // Start the server only after successful database connection
        app.listen(process.env.PORT_NUMBER, () => {
            console.log(`Server is running on PORT ${process.env.PORT_NUMBER}`);
        });
    })
    .catch((error) => {
        console.error('Database connection failed:', error.message);
        process.exit(1); // Exit process if database connection fails
    });


//Routes
app.use('/app/endpoints', budgetRoutes);
app.use('/app/endpoints', expenseRoutes);
