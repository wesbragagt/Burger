const connection = require("./connection");

const orm = {
    all: (tableInput, cb) => {
        let queryStr = "SELECT * FROM ??";
        connection.query(queryStr, [tableInput], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    update: (tableInput, condition, cb) => {
        let queryStr = "UPDATE ?? SET devoured=true WHERE id=?";
        connection.query(queryStr, [tableInput, condition], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },

    add: (tableInput, val, cb) => {
        let queryStr = "INSERT INTO ?? (burger_name) VALUES(?)";
        connection.query(queryStr, [tableInput, val], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    }
};

// ALL
// CREATE
// UPDATE

// orm.all("burgers");
module.exports = orm;
