const mongoose = require("mongoose");
const connectDB = async () => {
	try {
		
		const conn = await mongoose.connect(process.env.MONGO_URL);
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error connection to MongoDB: ", error.message);
		process.exit(1); // 1 is failure, 0 status code is success
	}
};

module.exports = connectDB