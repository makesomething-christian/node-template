import app from './server';
import MongoInstance from './db';


function initServer() {
  MongoInstance.connect();
  app.start();
}

initServer();

process.on('SIGINT', () => {
  console.log('Shutting down...');
  process.exit();
});
