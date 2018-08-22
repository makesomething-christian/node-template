import MongoInstance from '../db';

export default class UserService {
  static find() {
    return MongoInstance.db.collection('User').find().toArray();
  }
}
