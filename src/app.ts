import express from 'express';
import userRoutes from './routes/userRoutes';
import productRoutes from './routes/productRoutes';
import sequelize from './models';

const app = express();

app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', productRoutes);

sequelize.sync({force: false}).then(() => {
    console.log('Database conectada!')
})

export default app;