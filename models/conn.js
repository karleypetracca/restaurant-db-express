const host = 'localhost',
    database = 'restaurant',
    user = 'dbuser',
    password = 'dbpassword';

const options = {
    host: host,
    database: database,
    user: user,
    password: password
};

const pgp = require('pg-promise')({
    query: function(e) {
        console.log('QUERY: ', e.query);
    }
});

const db = pgp(options);

module.exports = db;