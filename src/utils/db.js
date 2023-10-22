import mongoose from 'mongoose';

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
  } catch (error) {
    throw new Error('Failed to connect to Database');
  }
};

export default connect;
