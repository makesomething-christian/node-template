import express from 'express';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
import config from './config';
import router from './routes';

const app = express();
const serverConfig = config.getServerConfig();

app.use(helmet());
app.use(cors({
  origin: ['http://localhost:3001'],
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(compression());
app.use('/api', router);

export default {
  start: () => {
    app.listen(serverConfig.PORT, () => console.log(`Server running on port:${serverConfig.PORT} ...`));
  },
};
