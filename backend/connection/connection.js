const mongoose = require("mongoose");

const connection = async () => {
    await mongoose.connect('mongodb+srv://Sachin3578:Sneha%401404@cluster0.mongodb.net/To-Do-List?retryWrites=true&w=majority')
        .then(() => {
            console.log("MongoDB Connected");
        })
        .catch(err => {
            console.error("MongoDB connection error:", err);
        });
};

connection();
