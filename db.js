import mongodb from 'mongodb';
import config from './config';

const { MongoClient } = mongodb;

const dbConfig = config.getDbConfig();

export default class MongoInstance {
  static async connect() {
    if (!this.client) {
      this.client = await MongoClient.connect(dbConfig.URI, dbConfig.OPTIONS);
      this.db = this.client.db(dbConfig.NAME);
      console.log('database connected....');
    }
  }
}
