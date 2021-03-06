const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

/* const url = process.env.mongourl; */

const url = "mongodb+srv://retos:retos@cluster0.e1tad.mongodb.net/reto9?retryWrites=true&w=majority";

const dbName = 'job';

const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

const getDatabase = (callback) => {
    client.connect(function (err) {
        assert.equal(null, err);
        console.log("Connected successfully to server"); 

        const db = client.db(dbName);

        callback(db, client); 
    });
}

const findDocuments = function (db, callback) {
    const collection = db.collection('offers');
    collection.find({}).toArray(function (err, docs) {
        assert.equal(err, null);
        callback(docs);
    });
}

exports.getDatabase = getDatabase;
exports.findDocuments = findDocuments;