import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionString =
      process.env.NODE_ENV === "development"
        ? process.env.MONGO_URI_DEVELOPMENT
        : process.env.MONGO_URI_PRODUCTION;

    console.log("Connection String:", connectionString);

    const conn = await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`🙃🙃 Mongo DB is connected ${conn.connection.host} 🙃🙃`);
  } catch (error) {
    console.log(`🏮🏮🏮 ${error} 🏮🏮🏮`);
  }
};

export default connectDB;
