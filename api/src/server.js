import app from './app';
import dotenv from 'dotenv/config';

app.listen(process.env.PORT || 3333);
