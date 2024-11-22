import { Server } from 'http';
import app from './app';

const PORT = 3000;

let server: Server;

async function bootstrap() {
    const server = app.listen(PORT, () => {
        console.log(`hi on port ${PORT}`);
    })
}

bootstrap();