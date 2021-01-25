const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/FEC-listing-details';

const db = mongoose.connect(mongoUri);
// eslint-disable-next-line no-console
console.log('=============== Connected to MongoDB ===============');

module.exports = db;
