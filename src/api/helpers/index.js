import dotenv from 'dotenv';

dotenv.config();

const { JWT_SECRET } = process.env;

export const getSecret = () => JWT_SECRET;
