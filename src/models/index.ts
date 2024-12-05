import dotenv from 'dotenv';
import { Sequelize } from 'sequelize-typescript';
import { User } from './user';
import { Product } from './product';

dotenv.config()

const sequelize = new Sequelize({
    database: process.env.DB_NAME,
    dialect: 'mysql',
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    models: [User, Product],
})

export default sequelize;