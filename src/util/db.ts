import { Db, MongoClient } from 'mongodb';

import config from '../util/config';
import { logError } from './handlers';

export class DbClient {
    public db: Db;

    public async connect() {
        try {
            this.db = (await MongoClient.connect(config.db.DB_URL)).db(config.db.DB_NAME);
            console.log('Connected to database');
        } catch (err) {
            logError(err, 'Could not connect to db');
        }
    }

    public dbInstance() {
        return this.db.collection('owner');
    }
}

export default new DbClient();
