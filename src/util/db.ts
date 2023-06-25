import { Db } from "mongodb";
import mongoose from "mongoose";

import config from "../util/config";

export class DbClient {
  public db: Db;

  public async connect() {
    await mongoose.connect(`${config.db.DB_URL}/${config.db.DB_NAME}`);
  }

  public dbInstance(collectionName) {
    return this.db.collection(collectionName);
  }
}

export default new DbClient();
