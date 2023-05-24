const DB = require('mongoose');
const connectionString = process.env.DB_DEVELOPMENT || "mongodb+srv://vazquezt2018:aguanteboca21@adm-barberia.vcgphdx.mongodb.net/"

const dbOptions = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
}

const connectDB = async () => {
	try {
		DB.set('strictQuery', false)
		await DB.connect(connectionString, dbOptions);
		console.log(`Database connection successful).`);
	} catch (error) {
		console.error(error.message);
	}
};

module.exports = connectDB;
