import mongoose, { Connection } from 'mongoose';

let cachedConnection: Connection | null = null;

export default async function dbConnect(): Promise<Connection> {
  if (cachedConnection) {
    return cachedConnection;
  }

  const MONGODB_URI = process.env.MONGODB_URI;

  if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
  }

  try {
    const opts: mongoose.ConnectOptions = {
      bufferCommands: false
    };

    const connection = await mongoose.connect(MONGODB_URI, opts);
    cachedConnection = connection.connection; 
    return cachedConnection;
  } catch (error) {
    throw error;
  }
}
