import app from './app';
import http from 'http';

const PORT = process.env.PORT || 443;

http.createServer(app).listen(PORT, () => {
    console.log('Server rodando na porta 443')
})